import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const LoginInterceptor= () => {
    var loginInformation = sessionStorage.getItem("login");
    loginInformation = JSON.parse(loginInformation);
    
    const Navigate = useNavigate();

    useEffect(() => {
        result();
    }, []);

    function result() {
        if (loginInformation === null) {
            nologin();
        }

        else if (loginInformation !== null) {
            return loginInformation;
        }
    }
    function nologin() {
        alert("로그인이 필요한 서비스입니다.");
        Navigate("/login");
    }
}  
  
export default LoginInterceptor;