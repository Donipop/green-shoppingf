import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const AnswerUpdate = () => {
    const [List, setList] = useState([]);
    const{id} = useParams();
    const{page} = useParams();
    const{cont} = useParams();
    const{child_id} = useParams();
    const[answercont, setAnswercont]  = useState(cont)

     
    

     useEffect(() => {
         axios({
             method: 'get',
             url: `/api/QnA/reply/${page}/${id}`,
             params:{id: child_id, 
                   page:page
            },
         })
         .then(res => setList(res.data))
     }, [id, page])

     const QnaCont = (e) => {
        setAnswercont(e.target.value)
    }

    const addadd = (e) => {
        axios({
            method: 'post',
            url: `/api/view/QnA/answerUpdate/${page}/${id}`,
            params: {
                 id:id, 
                 product_num: page,
                 cont: answercont

            } 
        })
        .then(alert("답변이 수정되었습니다."),window.close(), window.opener.location.reload())

    }

     




    return(
        <div>
             <div className=''>
                <p>아이디: {List.user_id}</p>
             </div>
             <div>
                <p>질문내용: {List.cont}</p>
             </div>
             <div>
                <p>날짜: {List.regdate}</p>
             </div>
             <div>
                <p>답변</p>
             </div>
             <div className="QnAWrite2">
                 <form id= "Subm">
                    <div className="QnAContBox">
                        <textarea className="QnAcont" value={answercont} placeholder="답변을 입력하세요." onChange={QnaCont} name="cont"></textarea>
                        
                    </div>
                    <a href="#!"className="add" role="button" onClick={addadd}>수정</a>
                </form>
            </div>
        </div>

    )
}

export default AnswerUpdate;
    
