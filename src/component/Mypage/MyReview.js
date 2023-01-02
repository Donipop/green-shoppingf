import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link, Navigate } from 'react-router-dom';
import Logininformation from '../Logininformation';
import LoginInterceptor from "../LoginInterceptor";
import Review from '../ProductView/Review';
import ReviewList from '../ProductView/ReviewList';
import { FaStar } from 'react-icons/fa'
import styled from 'styled-components';



    const MyReview = () => { 
    const[reviewlist, setReviewList] = useState([]);
    let user_id = Logininformation();
    const Array = [0, 1, 2, 3, 4];

    useEffect(() => {
        axios({
        method: 'get',
        url: `/api/mypage/myreview`,
        params: {
            user_id: user_id
        }
        })
        .then((res) => {
            setReviewList(res.data) 
        })
        }, [user_id])

    return(
    <div>
        <div>
      <h2>구매후기</h2>
        </div>
        <div style={{display:"flex", borderTop:"4px solid black",borderBottom:"1px solid black", width:"1000px"}}>
            <div style={{width:"309px",textAlign:"center",lineHeight:"53px"}}>
                상품정보
            </div>
            <div style={{width:"820px",textAlign:"center",lineHeight:"53px"}}>
                내용
            </div>
        </div>
        {reviewlist.map((item) => (
            <div key= {item.id}>
                {item.product_num === 79 && (
                    <div style={{display:"flex"}}>
                        <div style={{borderBottom:"1px solid #f5f5f5",width:"200px", textAlign:"center"}}>
                             아이유가 입을뻔한 후드티 
                        </div>
                    <div>
                        <div style={{color:"#aaa", fontSize:"14px"}}>
                            {item.regdate}
                        </div>
                        <div>
                        <Stars>
                            {Array.map((el, idx) => {
                                return (             
                                <FaStar
                                    key={idx}
                                    size="15"
                                    color={item.star>el ? "#fcc419" : "gray"}                                            
                                />
                                )
                            })}
                                    </Stars>
                        </div>
                        <div>
                            <strong style={{marginRight:"5px"}}>
                            한줄평
                            </strong>    
                            {item.title}
                        </div>
                        <div style={{width:"700px",marginTop:"15px"}}>
                             <em style={{fontStyle:"normal",fontWeight:"bold"}}>상세후기</em>
                             <div> {item.cont}</div>
                        </div>
                    </div>
                    </div>
                )}  
            </div>
        )
        )}
    </div>
    )

    }

    export default MyReview;

    const Stars = styled.div`
display: flex;
padding-top: 5px;


.yellowStar {
  color: #fcc419;
}
`;