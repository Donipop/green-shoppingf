import React, {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "./Pagination";


const QnA = ({page}) => {
    const[List, setList] = useState([]);
    const [limit, setLimit] = useState(10);
    const [paging, setPaging] = useState(1);
    const offset = (paging - 1) * limit;
    const [idnumber, setIdnumber] = useState(new Map());
    const [test, setTest] = useState([]);
    const [reply, setReply] = useState([]);

    useEffect(() => {
        axios({
        method: 'get',
        url: `/api/view/QnA/${page}`,
        })
        .then((res) => {
            for(let i=0; i<res.data.length; i++){
                let products = {
                    id: '',
                    cont: '',
                    qnatype : '',
                    user_id: '',
                    regdate: '',
                    product_name: '',
                    product_num: ''
                }
                if(res.data[i].qnatype === "0"){
                    products.cont = res.data[i].cont
                    products.id = res.data[i].id
                    products.qnatype = res.data[i].qnatype
                    products.user_id = res.data[i].user_id
                    products.regdate = res.data[i].regdate
                    products.product_name = res.data[i].product_name
                    products.product_num = res.data[i].product_num
                    products.child_id = res.data[i].child_id
                    setTest((item) => {
                        return [...item, products]
                    })
            } else{
                products.cont = res.data[i].cont
                products.id = res.data[i].id
                products.qnatype = res.data[i].qnatype
                products.user_id = res.data[i].user_id
                products.regdate = res.data[i].regdate
                products.product_name = res.data[i].product_name
                products.product_num = res.data[i].product_num
                products.child_id = res.data[i].child_id
                setReply((item) => {
                    return [...item, products]
                })
            }
        }
          
           
        })
        }, [page])
   
    // 질문하기
    const QnASite = () => {
        window.open(`http://localhost:3000/QnA/write/${page}`,"_blank","width=650, height=730");
    }
    
    
    //답변하기 
    const onsubmit = (e) => {
        e.preventDefault();
        let key = e.target.attributes.id.value
        window.open(`http://localhost:3000/QnA/reply/${page}/${key}`,"_blank","width=650, height=730");    
    }

    const Noexsits = () => {
        if(test.length === 0){
           return(
            <div style={{padding:"30px", textAlign:"center"}}>
                등록된 문의가 없습니다.
            </div>
           )
           
        }
    }

       const roqnfkf = (props) => {
           for(let i=0; i<reply.length; i++){
            if(props === reply[i].child_id ){
                return (
              <div  className="reply">
                <i className="icon-reply"></i> 
                <em className="replyicon">답변</em>
                <div className="reply_wrap">
                <strong className="Strong">[{reply[i].user_id}]</strong>
                <a href="#!" role="button" id={reply[i].id}  style={{paddingLeft:"2px",fontSize:"12px"}}>수정</a>
                 <span style={{fontSize:"14px", marginLeft:"2px", marginRight:"2px"}}>|</span>
                 <a href="#!" role="button" id={reply[i].id} onClick={answerDelete} style={{fontSize:"12px"}}>삭제</a>
                <div className="replycont">
                    {reply[i].cont}
                </div>
                    <div className="replydate">
                    {reply[i].regdate}
                    </div>
                </div>
                </div>
                )

            }
        }
    }
       const QuestionDelete = (e) => {
        {test.map ((item) => {
            if(item.id === Number(e.target.id)){
                axios({
                    method: 'post',
                    url: `/api/view/QnA/QuestionDelete/${page}/${e.target.id}`,
                    data: {
                        id: e.target.id,
                        product_num : page
                    }
                })
                .then(() => {if(window.confirm("정말 삭제하시겠습니까?")) {
                    alert("삭제되었습니다.");
                    window.location.reload();
                  } else {
                    alert("취소합니다.");
                  }
                })
                     }
                 }
             )}
        }

        const answerDelete = (e) => {

            {reply.map ((item) => {
                if(item.id === Number(e.target.id)){
                    axios({
                        method: 'post',
                        url: `/api/view/QnA/answerDelete/${page}/${e.target.id}`,
                        data: {
                            id: e.target.id,
                            product_num : page
                        }
                    })
                    .then(() => {if(window.confirm("정말 삭제하시겠습니까?")) {
                        alert("삭제되었습니다.");
                        window.location.reload();
                        } else {
                        alert("취소합니다.");
                        }
                    })

                }
            }
        )}
        }

        const QuestionUpdate = (e) => {
            window.open(`http://localhost:3000/QnA/update/${page}/${e.target.id}`,"_blank","width=650, height=730");
        }

            


      return (
        <div>
             <div>
                 <h3>QnA</h3>
                 <p className="QnAtext">구매하시려는 상품에 대해 궁금한 점이 있으신 경우 문의해주세요.</p>
             </div>
             <div>
                <div className="QnABox" >
                    <button className="btn btn-dark" onClick={QnASite}>상품 Q&A 작성하기</button>
                    <select type="number" value={limit} onChange={({target: {value} }) => setLimit(Number(value))}>
                        <option value="10">10개</option>
                        <option value="12">12개</option>
                        <option value="20">20개</option>
                        <option value="50">50개</option>
                        <option value="100">100개</option>
                    </select> 
                     <div className="answer">
                    {test.slice(offset, offset+limit).map((item => (
                        <div key={item.id}>
                        {item.qnatype === "0" && ( 
                        <div>
                        <form id={item.id} onSubmit={onsubmit} name = "rr" value="rr" >
                        <div className="answerM" >                             
                             <div className="answerList" style={{position:"relative"}}>
                                <em className="answerState">질문</em>
                                    <div className="answerCont">
                                        <strong className="author">{item.user_id}</strong>
                                        <a href="#!" role="button" id={item.id} onClick={QuestionUpdate}  style={{paddingLeft:"2px",fontSize:"12px"}}>수정</a>
                                        <span style={{fontSize:"14px", marginLeft:"2px", marginRight:"2px"}}>|</span>
                                        <a href="#!" role="button" id={item.id} onClick={QuestionDelete} style={{fontSize:"12px"}}>삭제</a>
                                        <div className="Productname">
                                        {item.product_name}
                                        </div>
                                        <div className="answercont">
                                        {item.cont}
                                        </div>
                                        <div className="regdate">
                                        {item.regdate}
                                        </div>
                                        <div className="Do_answer">
                                         <input type="hidden" id="id" value={item.id} />
                                         <button type="sumbit"className="btn btn-success btn-sm" value={item.user_id} onChange={onchange} >답변하기</button>   
                                        </div>
                                    </div>
                               </div>
                               {roqnfkf(item.id)}                              
                            </div>
                            </form>  
                                </div>                     
                        )}
                        </div>
                    )))}  
                    <div>

                    <Pagination 
                    total={test.length}
                    limit={limit}
                    page={paging}
                    setPage={setPaging}
                      />
                    </div>
                             {Noexsits()}
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default QnA;