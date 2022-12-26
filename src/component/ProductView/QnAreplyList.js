import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";




const QnAreplyList =  (props) => {
    const [reply, setReply] = useState([]);
    
    useEffect(() => {
        axios({
        method: 'get',
        url: `/api/view/QnA/${props.page}`,
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
             if(res.data[i].child_id != 0){
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
     
    const adad = (e) => {
        
       
            
        for(var i=0; i<reply.length; i++){
            if(reply[i].child_id === props.props){   
       return (
    
<div className="reply">
       <i className="icon-reply"></i>
       <em className="replyicon">답변</em>
   <div className="reply_wrap">
       <strong className="Strong">[{reply[i].user_id}]</strong>
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

    



    return (
        <div>
              {adad()}
              </div>
    )
}

export default QnAreplyList;