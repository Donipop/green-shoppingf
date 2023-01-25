import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
function DeliveryInfo({ user, setPostAddress }) {
  const [userInfo, setUserInfo] = useState({
    user_name: "",
    user_tel: "",
    user_address: "",
    user_cont: "",
    id: "",
  });
  useEffect(() => {
    if (user === undefined) {
      return;
    }
    axios
      .get("/api/payment/getAddress", {
        params: {
          userId: user.user_id,
        },
      })
      .then((res) => {
        setUserInfo((userInfo) => {
          return {
            ...userInfo,
            user_name: res.data.NAME,
            user_tel: res.data.TEL,
            user_address: res.data.ADDRESS,
            user_cont: res.data.CONT,
            id: res.data.ID,
          };
        });
      });
  }, [user]);
  useEffect(() => {
    setPostAddress(userInfo.id);
  }, [userInfo.id, setPostAddress]);
  const divIndex = useRef([]);
  const inputIndex = useRef([]);
  const onClickUpdate = (indexId) => {
    console.log(divIndex.current[indexId]);
  };

  return (
    <div className="col-12">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-4">
              <p className="line">받는사람</p>
              <p className="line">휴대폰번호</p>
              <p className="line">주소</p>
              <p className="line">배송메세지</p>
            </div>
            <div className="col-8">
              <p>
                <input
                  type="text"
                  defaultValue={userInfo.user_name}
                  ref={(e) => (inputIndex.current[0] = e)}
                />
                <button
                  className="btn btn-outline-secondary btn-sm p-0 m-0"
                  onClick={() => {
                    onClickUpdate(0);
                  }}
                  ref={(e) => (divIndex.current[0] = e)}
                >
                  수정
                </button>
              </p>
              <p>
                <input
                  type="text"
                  defaultValue={userInfo.user_tel}
                  ref={(e) => (inputIndex.current[1] = e)}
                />
                <button
                  className="btn btn-outline-secondary btn-sm p-0 m-0"
                  onClick={() => {
                    onClickUpdate(1);
                  }}
                  ref={(e) => (divIndex.current[1] = e)}
                >
                  수정
                </button>
              </p>
              <p>
                <input
                  type="text"
                  defaultValue={userInfo.user_address}
                  ref={(e) => (inputIndex.current[2] = e)}
                />
                <button
                  className="btn btn-outline-secondary btn-sm p-0 m-0"
                  onClick={() => {
                    onClickUpdate(2);
                  }}
                  ref={(e) => (divIndex.current[2] = e)}
                >
                  수정
                </button>
              </p>
              <p>
                <input
                  type="text"
                  defaultValue={userInfo.user_cont}
                  ref={(e) => (inputIndex.current[3] = e)}
                />
                <button
                  className="btn btn-outline-secondary btn-sm p-0 m-0"
                  onClick={() => {
                    onClickUpdate(3);
                  }}
                  ref={(e) => (divIndex.current[3] = e)}
                >
                  수정
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryInfo;
