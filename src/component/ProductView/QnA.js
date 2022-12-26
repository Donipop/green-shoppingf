import React, {useEffect, useState} from "react";
import axios from "axios";
import QnAreplyList from "./QnAreplyList";


const QnA = () => {
    const[QnA, setQnA] = useState([]);
    const[List, setList] = useState([]);
    const[reply, setReply] = useState([]);
    const[id, setId] = useState(0);
    useEffect(() => {
        axios({
        method: 'get',
        url: '/api/view/QnA',
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


   
  
    const QnASite = () => {
        window.open("http://localhost:3000/QnA/123","_blank","width=650, height=730");
    }

    const onchange = (e) => {
        e.preventDefault();
    }

    const onsubmit = (e) => {
        e.preventDefault();
        setId(e.target.id.value)
        window.open(`http://localhost:3000/QnA/reply/${id}`,"_blank","width=650, height=730");    
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
                    <div className="answer">
                    {List.map((List => (
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
                             <QnAreplyList props={List.id}/>

                                 

                        </div>
                        </form>

                    )))}  
                    
                    
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default QnA;