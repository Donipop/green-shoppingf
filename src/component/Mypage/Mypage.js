import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "../Header2"
import Logininformation from "../Logininformation";
import LoginInterceptor from "../LoginInterceptor";
import MypurChaseInquiry from "./MyPurchaseInquiry";
import Shopping_basket from "./Shopping_basket";
import Coupon from "./Coupon";
import MyReview from "./MyReview";

function Mypage() {
    const Navigate = useNavigate();
    let user_id = Logininformation();

    useEffect(() => {
        
    }, [])

    return(
        <div>
            <LoginInterceptor/>
            <Header2/>
            <MypurChaseInquiry/>
            <Shopping_basket/>
            <Coupon />
            <MyReview />
            <a href="/myinformation">회원정보수정</a><br/>
            <a href="/sellersignup">사업자 등록 ㄱㄱ</a><br/>   
            <a href="/mypage/shopping_basket">장바구니</a><br/>

        </div>
    )
}

export default Mypage