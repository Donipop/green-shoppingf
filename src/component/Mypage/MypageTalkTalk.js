import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
function MypageTalkTalk({ user }) {
  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    if (user === undefined) {
      return;
    }

    axios
      .get("/api/chat/ChatListByUserId", {
        params: {
          userId: user.user_id,
        },
      })
      .then((res) => {
        setChatList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [user]);

  return (
    <div className="w-100 mt-5">
      <div className="row">
        <div className="col-8">
          <ol className="list-group">
            
            {chatList.length === 0  ? <div>톡톡 리스트 없음</div> : chatList.map((item, index) => {
              return (
                <LI className="list-group-item d-flex justify-content-between align-items-start" key={index} onClick={() => {
                    window.open(
                        `/ct/${item.uuid}?m=${item.marketOwner}`,
                        "_blank",
                        "width=400, height=600, left=100, top=100, location=no, status=no, menubar=no, toolbar=no, scrollbars=no, resizable=no"
                      );
                }}>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.marketName}</div>
                    {item.lastMessage}
                  </div>
                  {item.count > 0 ? (<span className="badge bg-primary rounded-pill">{item.count}</span>) : null}
                </LI>
              );
            })}
          </ol>
        </div>

      </div>
    </div>
  );
}
export default MypageTalkTalk;

const LI = styled.li`
  list-style: none;
  border-bottom: 1px solid #dee2e6;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 10px #c9d6ff;
    z-index: 999;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.99);
  }
`;
