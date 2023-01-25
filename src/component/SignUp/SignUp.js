import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Hello() {
  const [name, setName] = useState("");
  const [ptest, setPtest] = useState("");
  const [check_the_password, setCheck_the_password] =
    useState("비밀번호를 입력하세요.");
  const Navigate = useNavigate();

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
  const onChangeAccount = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  useEffect(() => {});

  function CheckPassword() {
    var password2 = document.getElementById("password2").value;

    if (account.password === password2) {
      setCheck_the_password("비밀번호가 동일합니다.");
    } else {
      setCheck_the_password("비밀번호가 동일하지 않습니다.");
    }
  }

  function posttest() {
    fetch("/api/login/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    })
      .then((response) => response.text(), console.log(account))
      .then((name) => setPtest(name))
      .then(alert("로그인 화면으로 이동합니다."))
      .then(Navigate("/"));
  }

  return (
    <div className="container">
      <h1>회원가입</h1>
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
              ></input>
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
                onChange={onChangeAccount}
                className="mb-0 d-block w-100 form-control"
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
                onChange={onChangeAccount}
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
                  onChange={onChangeAccount}
                  className="mb-0 d-block w-100 form-control"
                ></input>
              </div>
              <div className="w-100">
                <span className="mb-0 d-block text-start">월</span>
                <input
                  id="month"
                  name="month"
                  onChange={onChangeAccount}
                  className="mb-0 d-block w-100 form-control"
                ></input>
              </div>
              <div className="w-100">
                <span className="mb-0 d-block text-start">일</span>
                <input
                  id="day"
                  name="day"
                  onChange={onChangeAccount}
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
              <input
                id="address"
                name="address"
                onChange={onChangeAccount}
                className="mb-0 d-block w-100 form-control"
              ></input>
            </div>
          </div>
        </div>

        <div className="list-group-item d-flex gap-3 py-3">
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div className="w-100">
              <span className="mb-0 d-block text-start">성별</span>
              <input
                id="sex"
                name="sex"
                onChange={onChangeAccount}
                className="mb-0 d-block w-100 form-control"
              ></input>
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
                onChange={onChangeAccount}
                className="mb-0 d-block w-100 form-control"
              ></input>
            </div>
          </div>
        </div>

        <Button className="mt-3" onClick={posttest}>
          회원가입
        </Button>
        <div>
          <h1>{name}</h1>
          <h2>{ptest}</h2>
        </div>
      </div>
    </div>
  );
}
