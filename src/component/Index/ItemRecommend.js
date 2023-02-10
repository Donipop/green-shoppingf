import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRef } from "react";
import { getCookie } from "../DataCollection/Cookie";
const ItemRecommend = () => {
  const Array = [0, 1, 2, 3, 4];
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [recommendItemList, setRecommendItemList] = useState([[],[],[]])
  const preventRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    
    // axios.get("/api/recommenditemlist").then((res) => {
    //   // setList(res.data);
    //   console.log(res.data);
    // });
    let viewCategory = getCookie("viewCategory");
    let searchCategory = getCookie("searchCategory");
    
    if (viewCategory === undefined && searchCategory === undefined) {
      axios.get("/api/recommenditemlist").then((res) => {
        setList(res.data);
      });
      return;
    }
    let categorySet = new Set();
    categorySet.add(viewCategory === undefined ? "" : viewCategory);
    searchCategory.forEach(item => {
      categorySet.add(item === undefined ? "" : item);
    });
    let categoryArry = [];
    categorySet.forEach((item)=>{
      categoryArry.push(item.slice(0,6));
    }) 
     axios.get('/api/categoryItemList', {
      params:{
        category: categoryArry
      }
     })
    .then((res)=>{
      setList(res.data);
    })

  }, []);

  const next = () => {
    if (page === 1) {
      setPage(2);

    } else if (page === 2) {
      setPage(3);
    }

  };
 
  const prevent = () => {
    if (page === 3) {
      setPage(2);
    } else if (page === 2) {
      setPage(1);
    }
  };  
  useEffect(() => {
    if(list.length === 0){
      return;
    }
    let arr = list;
    setRecommendItemList(division(arr, 5));
  }, [list]);

  const division = (arr, n) => {
    const length = arr.length;
    const divide = Math.floor(length / n) + (Math.floor( length % n ) > 0 ? 1 : 0);
    const newArray = [];
  
    for (let i = 0; i <= divide; i++) {
      // 배열 0부터 n개씩 잘라 새 배열에 넣기
      newArray.push(arr.splice(0, n)); 
    }
  
    return newArray;
  }

  const opacity = () => {
    if(preventRef.current === undefined && nextRef.current === undefined){
      return;
    }
    if (page === 1) {
      preventRef.current.style.opacity = "0";
      nextRef.current.style.opacity = "1";
    } else if (page === 2) {
      preventRef.current.style.opacity = "1";
      nextRef.current.style.opacity = "1";
    } else if (page === 3) {
      preventRef.current.style.opacity = "1";
      nextRef.current.style.opacity = "0";
    }
  };

  
 
  
  return (
    <Div>
       <DDiv>
        <div style={{ borderBottom: "1px solid #EEE" }}>
          <HeaderDiv>
            <div style={{float:"right"}}>
            <span style={{fontSize:"14px"}}>
              <em style={{fontStyle:"normal",fontWeight:"700",color:"#111"}}>{page}</em>
              /3
            </span>
            </div>
            <Span>최근 본 상품과 관련된 제품</Span>
          </HeaderDiv>
          <BodyDiv>
            <BodyscrollerDiv>
              <Divv>
                <Ul>
                  {recommendItemList[page-1].map((item, idx) => {
                    return(
                  <Li key={item.ID}>
                    <div>
                      <A href={`/view/${item.ID}`}>
                        <div style={{ position: "relative" }}>
                          <img
                            src={item.MAINIMAGE}
                            width={194} 
                          ></img>
                        </div>
                      </A>
                    </div>
                    <TitleDiv>
                      <Divvv>
                        <span
                          style={{
                            fontWeight: "normal",
                            color: "#111",
                            fontStyle: "normal",
                            fontStretch: "normal",
                            textAlign: "left",
                            lineHeight: "17px",
                            letterSpacing: "normal",
                          }}
                        >
                          {item.TITLE}
                        </span>
                      </Divvv>
                      <StarDiv>
                        <Stars>
                          {Array.map((el, idx) => {
                            return (
                              <FaStar key={idx} size="15" color={item.starCount / 5 > el ? "#fcc419" : "gray"} />
                            );
                          })}
                          <Spann>({item.star})</Spann>
                        </Stars>
                      </StarDiv>
                    </TitleDiv>
                  </Li>              
             )})}
                </Ul>
              </Divv>
            </BodyscrollerDiv>
          </BodyDiv>
        </div>
      </DDiv>
      {opacity()}
      <AButtontwo ref={preventRef} onClick={prevent}></AButtontwo>
      <AButton ref={nextRef} onClick={next}></AButton>
    </Div>
  );
};

export default ItemRecommend;

const Div = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 25px 40px 0 0;
`;
const DDiv = styled.div`
  padding: 26px 0 0;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const HeaderDiv = styled.div`
  width: 100%;
  height: 29px;
  padding: 0;
  margin-bottom: 18px;
`;

const Span = styled.span`
  background: url(//static.coupangcdn.com/image/coupang/gateway/ad-carousel/pc/icon-shopping-bag@3x.png)
    no-repeat;
  background-size: contain;
  float: left;
  font-size: 24px;
  font-weight: 600;
  color: #111;
  padding-left: 40px;
`;

const BodyDiv = styled.div`
  width: 900px;
  margin: 0 0 35px;
  position: relative;
`;
const BodyscrollerDiv = styled.div`
  width: 980px;
  margin: 0 auto;
  overflow: hidden;
`;

const Divv = styled.div`
  transition: transform 0.6s ease-in-out;
`;

const Ul = styled.ul`
  width: 9999px;
  overflow: hidden;
  list-style: none;
  padding-left: 0px;
`;

const Li = styled.li`
  height: 300px;
  margin: 12px 0;
  width: 196px;
  float: left;
  position: relative;
  text-align: center;
`;

const A = styled.a`
  width: 194px;
  height: auto;
  margin: 0 1px;
  border: 0;
  border-radius: 0;
  padding: 0;
  display: inline-block;
  cursor: pointer;
`;

const TitleDiv = styled.div`
  width: auto;
  margin: 12px 12px 4px;
  height: auto;
  overflow: hidden;
`;

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
`;

const StarDiv = styled.div`
  width: 100%;
  height: 15px;
  overflow: hidden;
  clear: both;
`;

const Stars = styled.div`
  display: flex;
  .yellowStar {
    color: #fcc419;
  }
`;

const Spann = styled.span`
  float: left;
  margin-left: 4px;
  font-weight: 600;
  font-size: 12px;
  color: #878787;
`;

const AButton = styled.a`
opacity: 1;
right: 0;
display: block;
background: url(https://static.coupangcdn.com/image/fodium/desktop/widget-sdp-alsoviewedproducts-20160622.png) no-repeat;
background-position: -78px -2px;
position: absolute;
top: 200px;
width: 36px;
height: 39px;
text-indent: -9999em;
text-decoration: none;
cursor: pointer;
`

const AButtontwo = styled.a`
opacity: 1;
left: 0;
display: block;
background: url(https://static.coupangcdn.com/image/fodium/desktop/widget-sdp-alsoviewedproducts-20160622.png) no-repeat;
background-position:-2px -43px;
position: absolute;
top: 200px;
width: 36px;
height: 39px;
text-indent: -9999em;
text-decoration: none;
cursor: pointer;
`