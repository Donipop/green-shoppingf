import styled  from "styled-components"
import { FaStar } from "react-icons/fa";
import Header2 from "../Header2";


const SearchViewData = () => {
    let iu = "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f9808bcff5cd75221317e48e817290c6b7e7900c07b3e649379dc7a57a7653a886e08ae6b2df44d7d347e8c801f2b9f15"
    const Array = [0, 1, 2, 3, 4];
    const Test = [0,1,2,3,4,5,6]


    return (
        
        <div style={{paddingTop:"50px"}} >
            <UL>
            {Test.map((item) => (
                <LI>
                    <A>
                        <dl>
                            <dt>
                                <img src={iu} width='212' height='212'></img>
                            </dt>
                            <DD>
                                <DDdiv></DDdiv>
                                <DDDdiv className="product-title">
                                  아이유가 입을뻔한 후드티
                                </DDDdiv>
                                <div style={{paddingTop:"3px"}}>
                                    <div style={{paddingTop:"5px"}}>
                                        <div>
                                            <span>
                                                <span>1%</span>
                                                <del style={{color:"#888",textDecoration:"line-through"}}>28,030</del>
                                            </span>
                                            <Em>
                                                <strong style={{fontStyle:"normal"}}>
                                                    27,510
                                                </strong>
                                            </Em>
                                        </div>
                                    </div>
                                </div>
                                    <StarDiv>
                                        <div>
                                            <StarSpan>
                                            <Stars>
                                        {Array.map((el, idx) => {
                                            return (             
                                                <FaStar
                                                key={idx}
                                                size="15"
                                                color={"#fcc419"}                                            
                                             />
                                             )
                            })}
                                    </Stars>

                                            </StarSpan>
                                            <span style={{color:"#888"}}>(435)</span>
                                        </div>

                                    </StarDiv>
                            </DD>
                        </dl>
                    </A>
                </LI>
            ))}
            </UL>
        </div>
    )


}

export default SearchViewData

const UL = styled.ul`
 list-style: none;
 width:1150px;
 height:900px;
`
 const LI = styled.li`
   position: relative;
   float : left;
   width: 274px;
   padding: 20px 20px 20px 20px;
   border-bottom: 1px solid #ddd;
`
const A = styled.a`
  height: 454px;
  display: block;
  border: 1px solid transparent;
  box-sizing: border-box;
  text-decoration: none;
  width:232px
   `

const Dl = styled.dl`
   height: 432px;
   display: block;
    overflow: hidden;
    width: 212px;
    padding: 10px;
    font-size: 12px;
    color: #111;
    transition: box-shadow .2s ease;
`
 
const Dt = styled.dt`
 display: block;
 position: relative;
 list-style: none;
`

const DD = styled.dd`
list-style: none;
display: block;
margin-inline-start: 40px;
`

const DDdiv = styled.div`
    display: block;
    padding: 16px 0 5px;
    height: 17px;
    font-size: 12px;
    line-height: 16px;
    color: #555;
    zoom: 1;
    white-space: nowrap;
    width: 212px;
`

const DDDdiv = styled.div`
display: -webkit-box;
    overflow: hidden;
    width: 100%;
    max-height: 48px;
    line-height: 16px;
    font-size: 12px;
    color: #111;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    word-wrap: break-word;
    text-decoration: none;
`

const Stars = styled.div`
display: flex;
padding-top: 5px;


.yellowStar {
  color: #fcc419;
}
`;

const Em = styled.em`
display: block;
    padding-bottom: 2px;
    margin-bottom: -3px;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #ae0000;
`

const StarDiv = styled.div`
clear: both;
    display: block;
    margin-top: 6px;
   height: 17px;
`

const StarSpan = styled.span`
float: left;
    width: 70px;
    height: 17px;
    margin-right: 3px;
`