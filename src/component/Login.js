import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { json, Route, useNavigate, Link } from 'react-router-dom';
import { useCookies, Cookies } from 'react-cookie';
import Header from "./Header";


function Login() {
    
    const Navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies();
    const [user_name, setuser_name] = useState('')
    const [user_pw, setuser_pw] = useState('')
    const [checked, setchecked] = useState(false)


    const on_user_nameHandler = (event) => {

        setuser_name(event.target.value)
    }
    
    const on_user_pwHandler = (event) => {

        setuser_pw(event.target.value)
    }

    const check_the_checkedHandler = () => {
        setchecked(!checked)
        
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();
        

        axios({
            method: "post",
            url: "/api/login/login",
            data: {
                user_name : user_name,
                user_pw : user_pw
            },
        })
        .then(res => res.data)
        .then(res => {
            if(res.returnURL === "/") {
                setCookie('refreshToken', res.refreshToken,{
                    path:'/',
                    
                })
                sessionStorage.setItem("login", res.vo)
                
                alert("홈으로 이동합니다.");
                Navigate(res.returnURL)
            }
            else {
                alert("로그인 정보가 틀렸습니다.");
                Navigate(res.returnURL)
            }
        })
        
    }

    return(
        <div>
            <Header />
            <h2>Login</h2>
            <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' value={user_name} onChange={on_user_nameHandler} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' value={user_pw} onChange={on_user_pwHandler} />
            </div>
            <div>
                <label htmlFor="auto_login_check">자동로그인</label>
                <input type="checkbox" onChange={check_the_checkedHandler} checked={checked} /><br />
                <h2>체크 : {JSON.stringify(checked)}</h2>
                <button type="submit">Login</button>
                
            </div>
            </form>

            

            <Link to="/"> 홈으로 </Link>
        </div>
    )
}
 
export default Login;