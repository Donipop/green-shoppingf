import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { setCookie } from "../DataCollection/Cookie";

const SearchViewData = () => {
  const Array = [0, 1, 2, 3, 4];
  const [loading, setLoading] = useState(false);
  const [searchviewList, setSearchviewList] = useState([]);
  const [categoryList, setCategoryList] = useState();
  const searchcont = new URLSearchParams(window.location.search).get(
    "searchcont"
  );
  const name = new URLSearchParams(window.location.search).get("name");
  const category = new URLSearchParams(window.location.search).get("category");
  useEffect(() => {
    axios({
      method: "get",
      url: `/api/searchview?searchcont=${searchcont}&name=${name}&category=${category}`,
    }).then((res) => {
      setSearchviewList(res.data);
      setCategoryList(res.data.slice(-1))
      setLoading(true);
      
    });
  }, [searchcont, name]);

  useEffect(() => {
    if(categoryList === undefined){return}
    console.log(categoryList[0].categoryList)
    setCookie("searchCategory", categoryList[0].categoryList, { path: "/" });
  }, [searchviewList]);

  const searchviewListzero = () => {
    if (searchviewList.length === 1) {
      return (
        <div style={{ margin: "20px 20px 20px 20px",textAlign:"center" }}>
          검색된 결과가 없습니다.
        </div>
      );
    }
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <UL>
        {searchviewList.slice(0, -1).map((item,index) => (
          <LI key={item.id}>
            <A href={`view/${item.id}`}>
              <Dl>
                <Dt>
                  {item.FILE_NAME === undefined ? (
                    <img src={item.mainimage} width="212" height="212"></img>
                  ) : (
                    <img
                      src={`http://donipop.com/img/${item.FILE_NAME}`}
                      width="212"
                      height="212"
                    ></img>
                  )}
                </Dt>
                <DD>
                  <DDdiv></DDdiv>
                  <DDDdiv className="product-title">{item.title}</DDDdiv>
                  <div style={{ paddingTop: "3px" }}>
                    <div style={{ paddingTop: "5px" }}>
                      <div>
                        <span>
                          <span>
                            {Math.round(
                              (item.product_discount / item.product_price) * 100
                            )
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            %
                          </span>
                          <del
                            style={{
                              color: "#888",
                              textDecoration: "line-through",
                            }}
                          >
                            {item.product_price
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </del>
                        </span>
                        <Em>
                          <strong style={{ fontStyle: "normal" }}>
                            {(item.product_price - item.product_discount)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            원
                          </strong>
                        </Em>
                      </div>
                    </div>
                  </div>
                  <StarDiv>
                    <div style={{ display: "flex" }}>
                      <StarSpan>
                        <Stars>
                          {Array.map((el, idx) => {
                            return (
                              <FaStar
                                key={idx}
                                size="15"
                                color={item.star / 5 > el ? "#fcc419" : "gray"}
                              />
                            );
                          })}
                        </Stars>
                      </StarSpan>
                      <span style={{ color: "#888" }}>({item.starcount})</span>
                    </div>
                  </StarDiv>
                </DD>
              </Dl>
            </A>
          </LI>
        ))}
        {loading === false ? (
          <div style={{textAlign:"center"}}>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
              ) : (
    searchviewListzero()
  )}
      </UL>
    </div>
  );
};

export default SearchViewData;

const UL = styled.ul`
  list-style: none;
  width: 1150px;
  height: 900px;
`;
const LI = styled.li`
  position: relative;
  float: left;
  width: 274px;
  padding: 20px 20px 20px 20px;
  border-bottom: 1px solid #ddd;
`;
const A = styled.a`
  height: 454px;
  display: block;
  border: 1px solid transparent;
  box-sizing: border-box;
  text-decoration: none;
  width: 232px;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const Dl = styled.dl`
  height: 432px;
  display: block;
  overflow: hidden;
  width: 212px;
  padding: 10px;
  font-size: 12px;
  color: #111;
  transition: box-shadow 0.2s ease;
`;

const Dt = styled.dt`
  display: block;
  position: relative;
  list-style: none;
`;

const DD = styled.dd`
  list-style: none;
  display: block;
  margin-inline-start: 40px;
`;

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
`;

const DDDdiv = styled.div`
  display: -webkit-box;
  overflow: hidden;
  width: 100%;
  max-height: 48px;
  line-height: 16px;
  font-size: 13px;
  color: #111;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  word-wrap: break-word;
  text-decoration: none;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 2px;

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
`;

const StarDiv = styled.div`
  clear: both;
  display: block;
  margin-top: 6px;
  height: 17px;
`;

const StarSpan = styled.span`
  float: left;
  width: 70px;
  height: 17px;
  margin-right: 3px;
`;
