import axios from "axios"
import { useEffect,useState } from "react"
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';





const ReviewUpdate = (props) => {
    const {id, page} = props
    const [List, setList] = useState([])
    const [clicked, setClicked] = useState([false, false, false, false, false]);
    const [evaluation, setevaluation] = useState('')
    const [starcolor, setStarcolor] = useState(0);
    const [reviewcont, setReviewcont] = useState('');
    const Array = [0, 1, 2, 3, 4];



     useEffect(() => {
        axios({
        method: 'get',
        url: `/api/view/reviewUpdateForm/${page}/${id}`,
        params: {
            id: id,
            page: page
        }
    })
    .then((res) => {
        setList(res.data)
        setStarcolor(res.data.star)
        setReviewcont(res.data.cont)

    })
    .catch((err) => {
        console.log('후기 수정 에러', err)
    })
    }, [id, page])
    

    const handleStarClick = index => {
         let clickStates = [...clicked];
         for (let i = 0; i < 5; i++) {
         clickStates[i] = i <= index ? true : false;
         }
         setClicked(clickStates);
        setStarcolor(index+1)

      }; 
    
    
      useEffect(() => {
        const sendReview = () => {
      
          if(starcolor === 1){
              setevaluation('나쁨')
          }
          if(starcolor === 2){
              setevaluation('별로')
          }
          if(starcolor === 3){
              setevaluation('보통')
          }
          if(starcolor === 4){
              setevaluation('좋음')
          }
          if(starcolor === 5){
              setevaluation('최고')
          }
  
        };
  
        sendReview();
      }, [clicked, List, starcolor]);

      const ContChange = (e) => {
        setReviewcont(e.target.value)
        }

      console.log(reviewcont)

    return (
        <div>
            <div className="StarEvaluation">
               <div className="Startitle">별점평가</div>
                <div>
                <Stars>
                            {Array.map((el, idx) => {
                                 return (
                                       
                                        <FaStar
                                            key={idx}
                                            size="30"
                                            onClick={() => handleStarClick(el)}
                                            className={clicked[el] && "yellowStar"}
                                            color={starcolor>el ? "#fcc419" : "gray"}                                            
                                        />
                                   )
                            })}
                            {evaluation}
                            </Stars>
                </div>
            </div>
            <div className="zzz" >
                <div  className="ContEdit" >
                    <div className="ReviewcontTitle" style={{paddingTop:"100px"}}> 상세후기</div>
                </div>
                <textarea className="congBox" value={reviewcont} onChange={e => ContChange(e)}>  </textarea>

            
         
            </div>
           
            
            
        </div>
    )


}

export default ReviewUpdate

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
