import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DaumPostcode from "react-daum-postcode";

export default function UserSignUp() {
  const [account, setAccount] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    year: "",
    month: "",
    day: "",
    address: "",
    sex: "",
    nick: "",
    tel: "",
  });
  const [check_the_password, setCheck_the_password] =
    useState("비밀번호를 입력하세요.");
  const Navigate = useNavigate();
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  const [DaumAddress, setDaumAddress] = useState(""); // 주소
  const [isOpenPost, setIsOpenPost] = useState(false);
  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  const onCompletePost = (data) => {
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddr +=
          extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }
    setDaumAddress(fullAddr);
    document.getElementById("address").value = fullAddr;
    setCheckCheck({ ...CheckCheck, address: false });
    setIsOpenPost(false);
  };

  const postCodeStyle = {
    display: "block",
    position: "relative",
    top: "0%",
    width: "400px",
    height: "400px",
    padding: "7px",
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  const onChangeAddressDetail = (e) => {
    setAccount({ ...account, address: DaumAddress + " " + e.target.value });
  };

  const [CheckCheck, setCheckCheck] = useState({
    username: true,
    tel: true,
    nick: true,
    sex: true,
    email: true,
    address: true,
  });
  const [finalCheck, setFinalCheck] = useState(true);

  const onChangeAccount = (e) => {
    let reg = /\s/g;
    if (e.target.name === "username" || e.target.name === "name") {
      e.target.value = e.target.value.replace(reg, "");
    }
    setAccount({ ...account, [e.target.name]: e.target.value });
  };
  const onChangeEmail = (e) => {
    let regex = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );
    let reg = /\s/g;
    e.target.value = e.target.value.replace(reg, "");
    let email = e.target.value;
    if (regex.test(email)) {
      setAccount({ ...account, [e.target.name]: e.target.value });
      setCheckCheck({ ...CheckCheck, email: false });
    } else {
      setCheckCheck({ ...CheckCheck, email: true });
    }
  };
  const onChangeTel = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    if (e.target.value.length > 11) {
      e.target.value = e.target.value.substring(0, 11);
    } else {
      setAccount({ ...account, [e.target.name]: e.target.value });
      if (e.target.value.length === 11) {
        setCheckCheck({ ...CheckCheck, tel: false });
      }
    }
  };
  const focusOutTel = (e) => {
    if (e.target.value.length === 11) {
      e.target.value = e.target.value.replace(
        /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
        "$1-$2-$3"
      );
      setAccount({ ...account, tel: e.target.value });
      setCheckCheck({ ...CheckCheck, tel: false });
    } else {
      setCheckCheck({ ...CheckCheck, tel: true });
    }
  };

  const onChangeYear = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    if (e.target.value < 0) {
      e.target.value = 2000;
    } else if (e.target.value.length > 4) {
      e.target.value = e.target.value.substring(0, 4);
    } else {
      setAccount({ ...account, [e.target.name]: e.target.value });
    }
  };

  const onChangeMonth = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    if (e.target.value < 0) {
      e.target.value = 1;
    } else if (e.target.value > 12) {
      e.target.value = 12;
    } else if (e.target.value.length > 2) {
      e.target.value = e.target.value.substring(0, 2);
    } else {
      setAccount({ ...account, [e.target.name]: e.target.value });
    }
  };

  const onChangeDay = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    let month = account.month;
    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12
    ) {
      if (e.target.value < 0) {
        e.target.value = 1;
      } else if (e.target.value > 31) {
        e.target.value = 31;
      } else if (e.target.value.length > 2) {
        e.target.value = e.target.value.substring(0, 2);
      } else {
        setAccount({ ...account, [e.target.name]: e.target.value });
      }
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
      if (e.target.value < 0) {
        e.target.value = 1;
      } else if (e.target.value > 30) {
        e.target.value = 30;
      } else if (e.target.value.length > 2) {
        e.target.value = e.target.value.substring(0, 2);
      } else {
        setAccount({ ...account, [e.target.name]: e.target.value });
      }
    } else if (month == 2) {
      if (e.target.value < 0) {
        e.target.value = 1;
      } else if (e.target.value > 28) {
        e.target.value = 28;
      } else if (e.target.value.length > 2) {
        e.target.value = e.target.value.substring(0, 2);
      } else {
        setAccount({ ...account, [e.target.name]: e.target.value });
      }
    }
  };

  const onChangeNick = (e) => {
    let reg = /\s/g;
    e.target.value = e.target.value.replace(reg, "");
    // 입력된 값의 바이트를 계산 후 20바이트 이상이면 입력을 막고 20바이트 이하면 입력을 허용
    let byte = 0;
    let str = e.target.value;
    for (let i = 0; i < str.length; i++) {
      if (escape(str.charAt(i)).length === 6) {
        byte++;
      }
      byte++;
    }
    if (byte > 20) {
      alert("닉네임이 너무 깁니다.");
      e.target.value = e.target.value.substring(0, e.target.value.length - 1);
    } else {
      setAccount({ ...account, [e.target.name]: e.target.value });
    }
  };
  const onChangeSex = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
    setCheckCheck({ ...CheckCheck, sex: false });
  };
  function CheckPassword() {
    var password2 = document.getElementById("password2").value;

    if (account.password === password2) {
      setCheck_the_password("비밀번호가 동일합니다.");
    } else {
      setCheck_the_password("비밀번호가 동일하지 않습니다.");
    }
  }
  function userSignUp() {
    axios({
      method: "post",
      url: "/api/login/checkDuplicateNameAndTel",
      params: {
        user_name: account.name,
        user_tel: account.tel,
      }
    }).then((res) => {
      if (res.data > 0) {
        alert("이미 가입된 회원입니다.");
        Navigate("/login");
        return;
      } else {
        if (window.confirm("회원가입 하시겠습니까?")) {
          axios({
            method: "post",
            url: "/api/login/userSignUp",
            data: account,
          }).then((res) => {
            if (res.data === 1) {
              alert("회원가입에 성공하셨습니다.");
              Navigate("/login");
            } else {
              alert("죄송합니다. 나중에 다시 시도해주십시오.");
            }
          });
        }
  }})
  }
  const CheckDuplicateId = () => {
    if (account.username.length < 4) {
      alert("아이디는 4자 이상 입력해주세요.");
      return;
    } else {
      axios({
        method: "post",
        url: "/api/login/checkDuplicateId",
        params: {
          user_id: account.username,
        },
      }).then((res) => {
        if (res.data > 0) {
          alert("중복된 아이디입니다.");
        } else {
          alert("사용 가능한 아이디입니다.");
          setCheckCheck({ ...CheckCheck, username: false });
        }
      });
    }
  };
  const CheckDuplicateNick = () => {
    if (account.nick.length < 3) {
      alert("닉네임은 3자 이상 입력해주세요.");
      return;
    } else {
      axios({
        method: "post",
        url: "/api/login/checkDuplicateNick",
        params: {
          user_nick: account.nick,
        },
      }).then((res) => {
        if (res.data > 0) {
          alert("중복된 닉네임입니다.");
        } else {
          alert("사용 가능한 닉네임입니다.");
          setCheckCheck({ ...CheckCheck, nick: false });
        }
      });
    }
  };
  useEffect(() => {
    if (
      CheckCheck.username === false &&
      CheckCheck.tel === false &&
      CheckCheck.nick === false &&
      CheckCheck.sex === false &&
      CheckCheck.email === false &&
      CheckCheck.address === false
    ) {
      setFinalCheck(false);
    }
  }, [CheckCheck]);

  return (
    <div className="container">
      <h1>회원가입</h1>
      <h4>모든칸을 채워야 회원가입 버튼이 활성화 됩니다.</h4>
      <div className="list-group w-auto">
        <div className="list-group-item d-flex gap-3 py-3">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div className="w-100">
              <span className="mb-0 d-block text-start">아이디</span>
              <input
                id="username"
                name="username"
                onChange={onChangeAccount}
                className="mb-0 d-block w-100 form-control"
                disabled={CheckCheck.username === false ? true : false}
              ></input>
              <button className="btn btn-primary" onClick={CheckDuplicateId}>
                아이디중복체크
              </button>
            </div>
          </div>
        </div>

        <div className="list-group-item d-flex gap-3 py-3">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div className="w-100">
              <span className="mb-0 d-block text-start">전화번호</span>
              <input
                id="tel"
                name="tel"
                onChange={onChangeTel}
                className="mb-0 d-block w-100 form-control"
                onBlur={focusOutTel}
              ></input>
            </div>
          </div>
        </div>

        <div className="list-group-item d-flex gap-3 py-3">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div className="w-100">
              <span className="mb-0 d-block text-start">이메일</span>
              <input
                id="email"
                name="email"
                onChange={onChangeEmail}
                className="mb-0 d-block w-100 form-control"
              ></input>
            </div>
          </div>
        </div>

        <div className="list-group-item d-flex gap-3 py-3">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div className="w-100">
              <span className="mb-0 d-block text-start">비밀번호</span>
              <input
                id="password"
                name="password"
                type="password"
                onChange={onChangeAccount}
                className="mb-0 d-block w-100 form-control"
              ></input>
            </div>
            <div className="w-100">
              <span className="mb-0 d-block text-start">비밀번호 재확인</span>
              <input
                id="password2"
                name="password2"
                type="password"
                onChange={CheckPassword}
                className="mb-0 d-block w-100 form-control"
              ></input>
            </div>
          </div>
        </div>

        <div className="list-group-item d-flex gap-3 py-3">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div className="w-100">
              <span
                className="mb-0 d-block text-start"
                name="check_the_password"
              >
                비밀번호체크: {check_the_password}
              </span>
            </div>
          </div>
        </div>

        <div></div>

        <div className="list-group-item d-flex gap-3 py-3">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div className="w-100">
              <span className="mb-0 d-block text-start">이름</span>
              <input
                id="name"
                name="name"
                onChange={onChangeAccount}
                className="mb-0 d-block w-100 form-control"
              ></input>
            </div>
          </div>
        </div>

        <div className="list-group-item d-flex gap-3 py-3">
          <div className="col-12">
            <span className="mb-1 text-start d-block">생년월일</span>
            <div className="d-flex gap-2 w-100 justify-content-between col-12">
              <div className="w-100">
                <span className="mb-0 d-block text-start">년</span>
                <input
                  id="year"
                  name="year"
                  onChange={onChangeYear}
                  className="mb-0 d-block w-100 form-control"
                ></input>
              </div>
              <div className="w-100">
                <span className="mb-0 d-block text-start">월</span>
                <input
                  id="month"
                  name="month"
                  onChange={onChangeMonth}
                  className="mb-0 d-block w-100 form-control"
                ></input>
              </div>
              <div className="w-100">
                <span className="mb-0 d-block text-start">일</span>
                <input
                  id="day"
                  name="day"
                  onChange={onChangeDay}
                  className="mb-0 d-block w-100 form-control"
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div className="list-group-item d-flex gap-3 py-3">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div className="w-100">
              <span className="mb-0 d-block text-start">주소</span>
              <button onClick={onChangeOpenPost}>주소 찾기</button>
              {isOpenPost ? (
                <DaumPostcode
                  style={postCodeStyle}
                  autoClose={false}
                  onComplete={onCompletePost}
                />
              ) : null}
              <input
                id="address"
                name="address"
                value={DaumAddress}
                className="mb-0 d-block w-100 form-control"
                disabled={true}
              ></input>
            </div>
          </div>
        </div>

        <div className="list-group-item d-flex gap-3 py-3">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div className="w-100">
              <span className="mb-0 d-block text-start">상세 주소</span>
              <input
                id="detailAddress"
                name="detailAddress"
                onChange={onChangeAddressDetail}
                className="mb-0 d-block w-100 form-control"
              ></input>
            </div>
          </div>
        </div>

        <div className="list-group-item d-flex gap-3 py-3">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div className="w-100">
              <span className="mb-0 d-block text-start">성별</span>
              {/* <input
                id="sex"
                name="sex"
                type="radio"
                onChange={onChangeAccount}
                value="0"
                className="mb-0 d-block w-100 form-control"
              ></input> */}

              <input
                type="radio"
                id="male"
                name="sex"
                value="1"
                onClick={onChangeSex}
              ></input>
              <label htmlFor="male">남성</label>
              <br />
              <input
                type="radio"
                id="female"
                name="sex"
                value="0"
                onClick={onChangeSex}
              ></input>
              <label htmlFor="male">여성</label>
              <br />
            </div>
          </div>
        </div>

        <div className="list-group-item d-flex gap-3 py-3">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div className="w-100">
              <span className="mb-0 d-block text-start">닉네임</span>
              <input
                id="nick"
                name="nick"
                onChange={onChangeNick}
                className="mb-0 d-block w-100 form-control"
                disabled={CheckCheck.nick === false ? true : false}
              ></input>
              <button onClick={CheckDuplicateNick}>닉네임 중복확인</button>
            </div>
          </div>
        </div>

        <Button className="mt-3" onClick={userSignUp} disabled={finalCheck}>
          회원가입
        </Button>
        <br />
        <div></div>
      </div>
    </div>
  );
}
