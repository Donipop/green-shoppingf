import axios from "axios";
import { useState, useEffect } from "react";
import Logininformation from "../Login/Logininformation";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const MyReview = () => {
  const [reviewlist, setReviewList] = useState([]);
  let user_id = Logininformation();
  const Array = [0, 1, 2, 3, 4];

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/mypage/myreview`,
      params: {
        user_id: user_id,
      },
    }).then((res) => {
      setReviewList(res.data);
    });
  }, [user_id]);

  return (
    <div style={{ marginTop: "40px" }}>
      <div>
        <h2>구매후기</h2>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "4px solid black",
          borderBottom: "1px solid black",
          width: "1270px",
        }}
      >
        <Div>
          <span style={{ float: "left", width: "309px", lineHeight: "53px" }}>
            상품정보
          </span>
          <span style={{ float: "left", width: "820px", lineHeight: "53px" }}>
            내용
          </span>
        </Div>
      </div>
      {reviewlist.map((item) => (
        <Ul key={item.id}>
          <Li>
            <div style={{ width: "309px", float: "left" }}>
              <div
                style={{
                  maxHeight: "inherit",
                  padding: "21px 10px 0 10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "96px",
                    flex: "0 0 80px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <a style={{ height: "100%", textDecoration: "none" }}>
                    <Img src={item.mainimage}></Img>
                  </a>
                </div>
                <Divv>
                  <a
                    style={{
                      lineHeight: "21px",
                      color: "#000",
                      textDecoration: "none",
                    }}
                  >
                    {item.product_title}
                  </a>
                </Divv>
              </div>
            </div>
            <Divvv>
              <div style={{ paddingTop: "20px" }}>
                <div style={{ paddingLeft: "21px" }}>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "15px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        marginRight: "20px",
                        fontSize: "14px",
                        color: "#aaa",
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "center" }}>
                        {item.regdate}
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ height: "17px", paddingBottom: "10px" }}>
                  <Stars>
                    {Array.map((el, idx) => {
                      return (
                        <FaStar
                          key={idx}
                          size="15"
                          color={item.star > el ? "#fcc419" : "gray"}
                        />
                      );
                    })}
                  </Stars>
                </div>
                <div>
                  <div style={{ paddingLeft: "21px" }}>
                    <span style={{ marginRight: "10px", fontWeight: "700" }}>
                      한줄평
                    </span>
                    {item.title}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      paddingLeft: "21px",
                      marginTop: "5px",
                      width: "900px",
                    }}
                  >
                    <span style={{ marginRight: "10px", fontWeight: "700" }}>
                      상세후기
                    </span>
                    {item.cont}
                  </div>
                </div>
              </div>
            </Divvv>
          </Li>
        </Ul>
      ))}
    </div>
  );
};

export default MyReview;

const Stars = styled.div`
  display: flex;
  padding-left: 21px;

  .yellowStar {
    color: #fcc419;
  }
`;

const Div = styled.div`
  overflow: hidden;
  height: 53px;
  font-size: 16px;
  text-align: center;
`;

const Ul = styled.ul`
  border-bottom: 1px solid #f5f5f5;
  list-style: none;
`;

const Li = styled.li`
  overflow: hidden;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  transform: translate(-50%, -50%);
  -o-object-fit: contain;
  object-fit: contain;
  border: none;
  line-height: 0;
  vertical-align: top;
`;

const Divv = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  margin-left: 10px;
  padding-top: 1px;
`;

const Divvv = styled.div`
  float: left;
  position: relative;
  width: 75.6%;
`;
