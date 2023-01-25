import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Header from "../Header/Header";
import styled from "styled-components";
import { Button } from "react-bootstrap";



function Login() {
  const Navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies();
  const [user_name, setuser_name] = useState("");
  const [user_pw, setuser_pw] = useState("");
  
  const on_user_nameHandler = (event) => {
      setuser_name(event.target.value);
    };
    
    const on_user_pwHandler = (event) => {
        setuser_pw(event.target.value);
    };
    
    // const [checked, setchecked] = useState(false);
//   const check_the_checkedHandler = () => {
//     setchecked(!checked);
//   };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: "/api/login/login",
      data: {
        user_name: user_name,
        user_pw: user_pw,
      },
    })
      .then((res) => res.data)
      .then((res) => {
        if (res.returnURL === "/") {
          setCookie("refreshToken", res.refreshToken, {
            path: "/",
          });
          alert("홈으로 이동합니다.");
          Navigate(res.returnURL);
        } else {
          alert("로그인 정보가 틀렸습니다.");
          Navigate(res.returnURL);
        }
      });
  };

  function UserFindId(e){
    e.preventDefault();
    window.open("/UserFindId", "아이디 찾기", "width=400, height=300, top=50, left=50")
  }
  function UserFindPassword(e){
    e.preventDefault();
    window.open("/UserFindPassword", "비밀번호 찾기", "width=400, height=300, top=50, left=50")
  }

  return (
    <Outerdiv>
      <Header />
      <h2>Login</h2>
      <div style={{margin:"auto"}}>
        <form onSubmit={onSubmitHandler}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                ID:{" "}
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="id"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={user_name}
              onChange={on_user_nameHandler}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                PW:{" "}
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={user_pw}
              onChange={on_user_pwHandler}
            />
          </div>
          <Innerdiv>
            
            <button className="btn btn-outline-primary" type="submit">
              Login
            </button><br/>
            
            {/* <label htmlFor="auto_login_check">자동로그인</label>
            <input
              type="checkbox"
              onChange={check_the_checkedHandler}
              checked={checked}
              style={{ width: "20px", height: "20px", margin: "0 10px", verticalAlign: "middle", cursor: "pointer" }}
            />
            <br/> */}
            </Innerdiv>
            <div style={{display:"flex"}}>
            <HrefA style={{marginLeft:"0px"}}href="/UserSignUp">회원가입</HrefA>
              <div style={{marginLeft:"70px"}}>
                <HrefA onClick={(e) => UserFindId(e)}>아이디 찾기</HrefA>
                <span style={{margin:"0 10px"}}>|</span>
                <HrefA onClick={(e) => UserFindPassword(e)}>비밀번호 찾기</HrefA>
                </div>
            </div>
          
        </form>
      </div>

      
    </Outerdiv>
  );
}

export default Login;

const Outerdiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
`;

const Innerdiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
`;

const HrefA = styled.a`
    background: transparent;
    text-decoration: none;
    color: #0073e9;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    `




