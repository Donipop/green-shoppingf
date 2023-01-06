import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header"
import Login from "../Login";
import Logininformation from "../Logininformation";
import LoginInterceptor from "../LoginInterceptor";

function Mypage() {
    const Navigate = useNavigate();
    let user_id = Logininformation();

    useEffect(() => {
        
    }, [])

    return(
        <div>
            <LoginInterceptor/>
            <Header/>
            <h2>{user_id}</h2>
            <h2>ㅎㅇ</h2>
            <a href="/myinformation">회원정보수정</a><br/>
            <a href="/sellersignup">사업자 등록 ㄱㄱ</a><br/>   
            <a href="/mypage/shopping_basket">장바구니</a><br/>

        </div>
    )
}

export default Mypage