import styled from "styled-components";
import { FaStar } from 'react-icons/fa'



const ItemRecommend = () => {

    const Array = [0, 1, 2, 3, 4];


    return(
        <Div>
            <DDiv>
                <div style={{borderBottom:"1px solid #EEE"}}>
                    <HeaderDiv>
                        <Span>이런 아이템 어떠세요?</Span>
                    </HeaderDiv>
                    <BodyDiv>
                        <BodyscrollerDiv>
                            <Divv>
                                <Ul>
                                    <Li>
                                        <div>
                                            <A>
                                                <div style={{position:"relative"}}>
                                                    <img src="https://thumbnail10.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/14b7/bd63e858fcb5be18450891631edd73fdddc16190c3af36002d94825c6d4a.jpg" 
                                                    width={194}>
                                                    </img>
                                                </div>
                                            </A>
                                        </div>
                                        <TitleDiv>
                                            <Divvv>
                                                <span style={{fontWeight:"normal",color:"#111",fontStyle:"normal",fontStretch:"normal",textAlign:"left",lineHeight:"17px",letterSpacing:"normal"}}>
                                                비버리힐즈 폴로클럽 NEW 플리스 기모 후드 집업 후리스
                                                </span>
                                            </Divvv>
                                            <StarDiv>
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
                                                    <Spann>
                                                        (154)
                                                    </Spann>       
                                                </Stars>
                                                
                                            </StarDiv>
                                        </TitleDiv>    
                                    </Li>
                                </Ul>
                            </Divv>
                        </BodyscrollerDiv>
                        
                    </BodyDiv>
                </div>
            </DDiv>
        </Div>
    )
}

export default ItemRecommend;

const Div = styled.div`
margin: 0 auto;
width: 100%;
position: relative;
padding: 25px 40px 0 0;
`
const DDiv = styled.div`
padding: 26px 0 0;
margin-top: 16px;
margin-bottom: 16px;

`

const HeaderDiv = styled.div`
width: 100%;
height: 29px;
padding: 0;
margin-bottom: 18px;
    
`

const Span = styled.span`
background: url(//static.coupangcdn.com/image/coupang/gateway/ad-carousel/pc/icon-shopping-bag@3x.png) no-repeat;
background-size: contain;
float: left;
font-size: 24px;
font-weight: 600;
color: #111;
padding-left: 40px;
`

const BodyDiv = styled.div`
width: auto;
margin: 0 0 35px;
position: relative;
`
const BodyscrollerDiv = styled.div`
width: 980px;
margin: 0 auto;
overflow: hidden;
`

const Divv = styled.div`
transition: transform .6s ease-in-out;
`

const Ul = styled.ul`
width: 9999px;
overflow: hidden;
list-style: none;
padding-left:0px;
`

const Li = styled.li`
height: 300px;
margin: 12px 0;
width: 196px;
float: left;
position: relative;
text-align: center;
`

const A = styled.a`
width: 194px;
height: auto;
margin: 0 1px;
border: 0;
border-radius: 0;
padding: 0;
display: inline-block;
cursor: pointer;
`

const TitleDiv = styled.div`
width: auto;
margin: 12px 12px 4px;
height: auto;
overflow: hidden;
`

const Divvv = styled.div`
padding: 0;
margin: 0 0 4px;
width: auto;
display: block;
white-space: nowrap;
font-weight: normal;
color: #111;
overflow: hidden;
text-overflow: ellipsis;
-webkit-box-orient: vertical;
height: auto;
max-height: 34px;
font-size: 14px;
-webkit-line-clamp: 2;

`

const StarDiv = styled.div`
width: 100%;
height: 15px;
overflow: hidden;
clear: both;
`

const Stars = styled.div`
display: flex;
.yellowStar {
  color: #fcc419;
}
`

const Spann = styled.span`
float: left;
margin-left: 4px;
font-weight: 600;
font-size: 12px;
color: #878787;
`
