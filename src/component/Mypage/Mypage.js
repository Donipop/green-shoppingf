import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header"
import Login from "../Login";
import LoginInterceptor from "../LoginInterceptor";

function Mypage() {
    const Navigate = useNavigate();  
    const login = LoginInterceptor();

    

    
    

    useEffect(() => {
        if (login === null) {
            alert("로그인이 필요합니다.");
            Navigate("/login");
            }

    }, [])

    return(
        <div>
            <LoginInterceptor>
            <Header/>
            <h2>ㅎㅇ</h2>
            <a href="/myinformation">회원정보수정</a><br/>
            <a href="/sellersignup">사업자 등록 ㄱㄱ</a>
            </LoginInterceptor>
        </div>
    )
}

export default Mypage