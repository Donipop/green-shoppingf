import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const TokTokQnaPage = ({ user }) => {
  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    if (user === undefined) {
      return;
    }
    axios
      .get("/api/chat/getChatList", {
        params: {
          marketOwner: user.user_id,
        },
      })
      .then((res) => {
        console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
          let data = {
            id: res.data[i].chatList.sender,
            lastMessage: res.data[i].chatList.message,
            count: res.data[i].count,
            uuid: res.data[i].uuid,
          };
          // console.log(data);
          setChatList((chatList) => [...chatList, data]);
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [user]);

  return (
    <div
      className="OrderDeliveryPage"
      style={{ width: "400px", height: "340px" }}
    >
      <div
        style={{ border: "1px solid #dbdde2", width: "99%", height: "100%" }}
      >
        <div style={{ padding: "0 25px", borderBottom: "1px solid #e2e6ee" }}>
          <h3
            style={{
              fontSize: "15px",
              lineHeight: "52px",
              color: "#303236",
              fontWeight: "600",
            }}
          >
            톡톡문의
          </h3>
        </div>
        <div style={{ height: "270px", overflow: "auto" }}>
          <ol className="list-group list-group-numbered">
            {chatList.map((item, index) => {
              return (
                <a
                  href={`/ct/${item.uuid}?id=${user.user_id}`}
                  key={index}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                  onClick={() => {
                    window.open(
                      `/ct/${item.uuid}?m=${user.user_id}`,
                      "톡톡문의",
                      "width=400, height=600, left=100, top=100, location=no, status=no, menubar=no, toolbar=no, scrollbars=no, resizable=no"
                    );
                  }}
                >
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{item.id}</div>
                      {item.lastMessage}
                    </div>
                    {item.count === 0 ? (
                      <span
                        className="badge bg-primary rounded-pill"
                        style={{ display: "none" }}
                      >
                        0
                      </span>
                    ) : (
                      <span className="badge bg-primary rounded-pill">
                        {item.count}
                      </span>
                    )}
                  </li>
                </a>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TokTokQnaPage;

const Span = styled.span`
  background-color: #4dc089;
  top: 0;
  left: 0;
  width: 42px;
  height: 42px;
  font-size: 24px;
  display: inline-block;
  line-height: 40px;
  vertical-align: middle;
  text-align: center;
  color: #fff;
`;

const Ul = styled.ul`
  min-height: 99px;
  padding: 3px 0 0 57px;
  list-style: none;
`;
const Li = styled.li`
  margin-bottom: 9px;
  line-height: 18px;
  height: 21px;
`;

const SPan = styled.span`
  float: left;
  color: #303236;
  vertical-align: middle;
  font-size: 15px;
`;

const A = styled.a`
  position: relative;
  top: -1px;
  font-size: 20px;
  color: #4dc089;
  text-decoration: none;
`;
