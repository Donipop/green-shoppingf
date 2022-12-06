import React, { useState, useEffect } from "react";
import axios from 'axios';

function Login() {
    const [user_login, setuser_login] = useState({
        user_name: '',
        user_pw:''
    });

    const user_login_info = (e) => {
        setuser_login({...user_login, [e.target.name]: e.target.value,});
    }
 
    

    const onClickLogin = () => {
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user_login),
        })
        .then( res => res.json())
        .then( res => alert(res))
        
    }

    useEffect(() => {
        
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])

    return(
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='user_name' onChange={user_login_info} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='user_pw' onChange={user_login_info} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
    )
}
 
export default Login;