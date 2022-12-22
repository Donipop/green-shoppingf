import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header"

function Mypage() {
    const Navigate = useNavigate();  


    useEffect(() => {
        if(sessionStorage.getItem("login") == null) {
            alert("로그인이 되어있지 않습니다.")
            Navigate("/login")
        }
        
        
        
        
    },[])

    return(
        <div>
            <Header/>
            <h2>ㅎㅇ</h2>
            <a href="/myinformation">회원정보수정</a><br/>
            <a href="/sellersignup">사업자 등록 ㄱㄱ</a>
        </div>
    )
}

export default Mypage