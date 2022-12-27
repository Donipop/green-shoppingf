import React, {useEffect, useState} from "react";
import axios from "axios";
import QnAReplyList from "./QnAReplyList";
import Pagination from "./Pagination";


const QnA = ({page}) => {
    const[List, setList] = useState([]);
    const[reply, setReply] = useState([]);
    const[id, setId] = useState(0);
    const [limit, setLimit] = useState(10);
    const [paging, setPaging] = useState(1);
    const offset = (paging - 1) * limit;
    useEffect(() => {
        axios({
        method: 'get',
        url: `/api/view/QnA/${page}`,
        })
        .then((res) => {

            for(var i=0; i<res.data.length; i++){
                let products = {
                    id: '',
                    cont: '',
                    qnatype : '',
                    user_id: '',
                    regdate: '',
                    product_name: '',
                    product_num: ''
                }
                if(res.data[i].child_id === 0){
                    products.cont = res.data[i].cont
                    products.id = res.data[i].id
                    products.qnatype = res.data[i].qnatype
                    products.user_id = res.data[i].user_id
                    products.regdate = res.data[i].regdate
                    products.product_name = res.data[i].product_name
                    products.product_num = res.data[i].product_num
                    products.child_id = res.data[i].child_id
                    setList((item) => {
                        return [...item, products]
                    })
                    
                } else {
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
    }, [])

   
   
    // 질문하기
    const QnASite = () => {
        window.open(`http://localhost:3000/QnA/write/${page}`,"_blank","width=650, height=730");
    }

    const onchange = (e) => {
        e.preventDefault();
    }


    //답변하기 
    const onsubmit = (e) => {
        e.preventDefault();
        setId(e.target.id.value)
        console.log(e.target.id.value)
        window.open(`http://localhost:3000/QnA/reply/${page}/${id}`,"_blank","width=650, height=730");    
    }

    const Noexsits = () => {
        if(List.length === 0){
           return(
            <div style={{padding:"30px", textAlign:"center"}}>
                등록된 문의가 없습니다.
            </div>
           )
           
        }
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
                    {List.slice(offset, offset+limit).map((List => (
                        <form key={List.id} onSubmit={onsubmit} name = "rr" value="rr" >
                        <div className="answerM" >
                             <div className="answerList" style={{position:"relative"}}>
                                <em className="answerState">질문</em>
                                    <div className="answerCont">
                                        <strong className="author">{List.user_id}</strong>
                                        <div className="Productname">
                                        {List.product_name}
                                        </div>
                                        <div className="answercont">
                                        {List.cont}
                                        </div>
                                        <div className="regdate">
                                        {List.regdate}
                                        </div>
                                        <div className="Do_answer">
                                         <input type="hidden" id="id" value={List.id} />
                                         <button className="btn btn-success btn-sm" value={List.user_id} onChange={onchange} >답변하기</button>   
                                        </div>
                                    </div>
                             </div>
                             <QnAReplyList props={List.id} page={page}/>
                        </div>
                        </form>

                    )))}  
                    <div>
                    <Pagination 
                    total={List.length}
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