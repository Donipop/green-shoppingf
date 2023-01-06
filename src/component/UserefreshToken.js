import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie"
import { Navigate } from "react-router-dom";

function UserefreshToken() {
    const [cookies, setCookie, removeCookie] = useCookies(['refreshToken'])
    let refreshToken = cookies.refreshToken;
    const [result, setresult] = useState({});

    axios({
        method:'post',
        url:'/api/login/refreshTokenToAccessToken',
        params: {
            refreshToken : refreshToken
        }
        
    })
    .then(res => res.data)
    .then(res =>{
        if(res == null) {
            alert("다시 로그인 해주시길 바랍니다.")
            Navigate('/')
            
            
        }
        else {
            setresult(res)
            console.log(res)
        }
        
    })
    
    
}

export default UserefreshToken