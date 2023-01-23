import axios from "axios";
import React, {useState, useEffect} from "react";
import { FaStar } from 'react-icons/fa'
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import './Reviewcss.css';
import ReviewList  from "./ReviewList";
import Logininformation from "../Login/Logininformation";

const Review = () => {
    const {page} = useParams();
    const [clicked, setClicked] = useState([false, false, false, false, false]);
    const Array = [0, 1, 2, 3, 4];
    const [evaluation, setevaluation] = useState('')
    const [letter , setletter] = useState(0);
    const [maintext, setMaintext] = useState(0);
    const [star, setStar] = useState(0);
    const [account, setAccount] = useState({
        cont: '',
        title: ''
    })
    let user_id = Logininformation();

    const handleStarClick = index => {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
    clickStates[i] = i <= index ? true : false;
        }
        setClicked(clickStates);
      }; 
    

      
      const lettersee = (e) => {
        setletter(e.target.value.replace(/<br\s*\/?>/gm, "\n").length)      
        setAccount({...account, [e.target.name]: e.target.value})
      }

      const contChange = (e) => {
        setMaintext(e.target.value.replace(/<br\s*\/?>/gm, "\n").length)
        setAccount({...account, [e.target.name]: e.target.value})
        }
      const ReviewSubmit = (e) =>{

        if(user_id === "로그인 된 정보가 없습니다."){
          alert("로그인이 필요한 서비스입니다.")
          return false;
        } 

        if(star === 0){
          alert("별점을 입력해주세요")
          return false;
        }
        
        axios({
            method: 'post',
            url: `/api/view/reviewWrite/{page}`,
            data: {
                ...account,
                star: star,
                id: 1,
                product_num: page,   
                user_id: user_id

        }
        }).then((res) => {
          alert('후기가 등록되었습니다.')
        }
        ).catch((err) => {
            console.log('후기 보내기 에러', err)
    })
      }

      useEffect(() => {
        const sendReview = () =>{
          let score = clicked.filter(Boolean).length;
          setStar(clicked.filter(Boolean).length);
          if(score === 1){
              setevaluation('나쁨')
          }
          if(score === 2){
              setevaluation('별로')
          }
          if(score === 3){
              setevaluation('보통')
          }
          if(score === 4){
              setevaluation('좋음')
          }
          if(score === 5){
              setevaluation('최고')
          }
  
        };
        sendReview();
      }, [clicked]);

      

    return (
        //review page
        <div className="review" id="review">
            <div className="review__title">
                <div className="rere">
                <img src="https://image6.coupangcdn.com/image/productreview/badge/review/write/product/product_icon-xxhdpi.png" alt ="free"style={{height:"26px"}}></img>
                <h2>상품후기</h2>
                </div>
            <div><p style={{fontSize:"15px", fontWeight:"400",color:"#111111"}}>이 상품의 품질에 대해서 얼마나 만족하시나요?</p></div>
            </div>
            <div className="review__star">
                    <h3>별점 평가</h3>
                <div className="review__star__content">
                    <div className="review__star__content__star">
                        <div className="review__star__content__star__icon">
                            <Stars>
                            {Array.map((el, idx) => {
                                 return (
                                        <FaStar
                                            key={idx}
                                            size="30"
                                            onClick={() => handleStarClick(el)}
                                            className={clicked[el] && "yellowStar"}
                                        />
                                    )
                            })}
                            {evaluation}
                            </Stars>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <form onSubmit={ReviewSubmit}>
            <div className="review__content">
                <div className="review_review">상세후기</div>
                     <div className="review__content__form">
                             <div className="review__content__form__content">
                                  <textarea className="textarea" name="cont" rows="5" maxLength={500} onChange={contChange} ></textarea>
                                    <div className="letter">{maintext}/500</div>
                             </div>
                     </div>
            </div>
                <div className="one_line_summary">
                    <div className="one_line">한줄요약</div>
                        <div className="one_line__content"> 
                         <input type="text" className="summary" name = "title" maxLength={30} placeholder="한 줄 요약을 입력해주세요" onChange={lettersee}></input>
                            <div className="letter">{letter}/30</div>
                        </div>
                </div>
                <div className="review__button">
                <button type="submit" className="btn btn-lg btn-primary btn-block">등록하기</button>
                </div>
                    </form>
                    <ReviewList page={page} />
         </div>
    );
    }

export default Review;

const Stars = styled.div`
display: flex;
padding-top: 5px;

& svg {
  color: gray;
  cursor: pointer;
}

:hover svg {
  color: #fcc419;
}

& svg:hover ~ svg {
  color: gray;
}

.yellowStar {
  color: #fcc419;
}
`;