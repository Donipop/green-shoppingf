import axios from "axios";
import React, { useState, useEffect } from "react";
import { json, Route, useNavigate, Link } from 'react-router-dom';
import { useCookies, Cookies } from 'react-cookie';
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";

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
            <div>
            <form onSubmit={onSubmitHandler}>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">ID: </span>
                </div>
                <input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="basic-addon1" value={user_name} onChange={on_user_nameHandler}/>
            </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">PW: </span>
                    </div>
                    <input type="password" className="form-control" placeholder="password" aria-label="Username" aria-describedby="basic-addon1" value={user_pw} onChange={on_user_pwHandler}/>
                </div>
            <div>
                <label htmlFor="auto_login_check">자동로그인</label>
                <input type="checkbox" onChange={check_the_checkedHandler} checked={checked} /><br />
                
                <button className="btn btn-outline-primary" type="submit">Login</button>
                
                
            </div>
            </form>
            </div>

            

            <Link to="/"> 홈으로 </Link>
        </div>
    )
}
 
export default Login;