import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "../Header/Header";
import LoginInterceptor from "../Login/LoginInterceptor";
import styled from "styled-components";

function Myinformation({ user }) {
  const [myinfo, setmyinfo] = useState([]);
  const [beforeNick, setbeforeNick] = useState("");
  const [beforePassword, setbeforePassword] = useState("");
  const [changedPassword, setchangedPassword] = useState("");
  const [changedNick, setchangedNick] = useState("");

  useLayoutEffect(() => {
    if (user === undefined) {
      return;
    }
    setbeforeNick(user.user_nick);
    setbeforePassword(user.user_password);
    setchangedNick(user.user_nick);
    setmyinfo(user);
  }, [user]);

  const [finalCheck, setfinalCheck] = useState(true);

  const [CheckNick, setCheckNick] = useState({
    check: true,
    message: "닉네임이 기존 닉네임과 같습니다.",
    buttonVisible: "hidden",
  });

  const [CheckPassword, setCheckpassword] = useState({
    check: true,
    message: "변경하실 비밀번호를 입력해주세요",
  });

  const onChangeMyinfo = (e) => {
    const { id, value } = e.target;
    setmyinfo({
      ...myinfo,
      [id]: value,
    });
  };

  function myinfoUpdate() {
    console.log(myinfo);
    axios({
      method: "post",
      url: "/api/mypage/checkDuplicateNick",
      params: {
        user_nick: myinfo.user_nick,
      },
    });
    // axios({
    //   method: "post",
    //   url: "/api/mypage/myinfoUpdate",
    //   data: {
    //     myinfo: myinfo,

    //   },
    // })
    //   .then((res) => res.data)
    //   .then((res) => {
    //     if (res === 1) {
    //       alert("회원정보가 수정되었습니다.");
    //       window.location.reload();
    //     } else {
    //       alert("회원정보 수정에 실패하였습니다.");
    //     }
    //   });
  }

  function onChangePassword(e) {
    setchangedPassword(e.target.value);
    if (e.target.value === beforePassword) {
      setCheckpassword({
        ...CheckPassword,
        check: true,
        message: "현재 비밀번호랑 일치합니다.",
      });
    } else {
      setCheckpassword({
        ...CheckPassword,
        check: false,
        message: "사용가능한 비밀번호 입니다.",
      });
    }
  }

  function onChangeNick(e) {
    setchangedNick(e.target.value);
    if (e.target.value === beforeNick) {
      setCheckNick({
        ...CheckNick,
        message: "현재 닉네임과 같습니다.",
      });
    } else {
      setCheckNick({
        ...CheckNick,
        buttonVisible: true,
        message: "중복여부 체크바랍니다.",
      });
    }
  }

  function checkDuplicateNick(e) {
    e.preventDefault();
    console.log(changedNick);
    axios({
      method: "post",
      url: "/api/mypage/checkDuplicateNick",
      params: {
        user_nick: changedNick,
      },
    })
      .then((res) => res.data)
      .then((res) => {
        if (res === false) {
          setCheckNick({
            ...CheckNick,
            check: false,
            message: "중복된 닉네임입니다.",
          });
        } else {
          setCheckNick({
            ...CheckNick,
            check: true,
            message: "사용가능한 닉네임입니다.",
          });
        }
      });
  }

  useEffect(() => {
    if (CheckPassword.check === false) {
      setfinalCheck(false);
    } else {
      setfinalCheck(true);
    }
  }, [CheckPassword.check]);

  return (
    <div>
      <Header />
      <LoginInterceptor />
      <div className="row m-2">
        <div className="col-12">
          <div className="alert alert-secondary">
            <h6>{myinfo.user_id}님의 회원정보수정 페이지 </h6>
            <button
              onClick={() => {
                console.log(myinfo);
              }}
            >
              확인
            </button>
            <button
              onClick={() => {
                console.log(CheckPassword.message);
              }}
            >
              비번확인
            </button>

            <form>
              <div className="form-group">
                <label htmlFor="user_id">아이디</label>
                <input
                  type="text"
                  className="form-control"
                  id="user_id"
                  value={myinfo.user_id}
                  onChange={onChangeMyinfo}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_password">비밀번호 확인</label>
                <input
                  type="password"
                  className="form-control"
                  id="user_password2"
                  value={changedPassword}
                  onChange={(e) => onChangePassword(e)}
                />
              </div>
              <div className="form-group">
                <COUNTBLACK>{CheckPassword.message}</COUNTBLACK>
              </div>
              <div className="form-group">
                <label htmlFor="user_name">이름</label>
                <input
                  type="text"
                  className="form-control"
                  id="user_name"
                  value={myinfo.user_name}
                  onChange={onChangeMyinfo}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_nick">닉네임</label>
                <input
                  type="text"
                  className="form-control"
                  id="user_nick"
                  value={changedNick}
                  onChange={(e) => onChangeNick(e)}
                />
              </div>
              <div className="form-group">
                <COUNTBLACK>{CheckNick.message}</COUNTBLACK>
                <button
                  className="btn btn-primary"
                  style={{ visibility: CheckNick.buttonVisible }}
                  onClick={checkDuplicateNick}
                >
                  중복체크
                </button>
              </div>
              <div className="form-group">
                <label htmlFor="user_email">이메일</label>
                <input
                  type="text"
                  className="form-control"
                  id="user_email"
                  value={myinfo.user_email}
                  onChange={onChangeMyinfo}
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_tel">전화번호</label>
                <input
                  type="text"
                  className="form-control"
                  id="user_tel"
                  value={myinfo.user_tel}
                  onChange={onChangeMyinfo}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_brith">생년월일</label>
                <input
                  type="text"
                  className="form-control"
                  id="user_brith"
                  value={myinfo.user_brith}
                  onChange={onChangeMyinfo}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_address">주소</label>
                <input
                  type="text"
                  className="form-control"
                  id="user_address"
                  value={myinfo.user_address}
                  onChange={onChangeMyinfo}
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_money">보유금액</label>
                <input
                  type="text"
                  className="form-control"
                  id="user_money"
                  value={myinfo.user_money}
                  onChange={onChangeMyinfo}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_signdate">가입일</label>
                <input
                  type="text"
                  className="form-control"
                  id="user_signdate"
                  value={myinfo.user_signdate}
                  onChange={onChangeMyinfo}
                  readOnly
                />
              </div>
            </form>
            <button
              className="btn btn-primary"
              onClick={myinfoUpdate}
              disabled={finalCheck}
            >
              수정하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myinformation;

const COUNTBLACK = styled.span`
  color: #2e362c;
  font-weight: bold;
`;
