import Header from "../Header/Header";
import LoginInterceptor from "../Login/LoginInterceptor";
import MypurChaseInquiry from "./MyPurchaseInquiry";
import Shopping_basket from "./Shopping_basket";
import Coupon from "./Coupon";
import MyReview from "./MyReview";

function Mypage({user}) {
  return (
    <div>
      <LoginInterceptor />
      <Header user={user}/>
      <MypurChaseInquiry user={user}/>
      <Shopping_basket />
      <Coupon />
      <MyReview user={user}/>
      <a href="/myinformation">회원정보수정</a>
      <br />
      <a href="/sellersignup">사업자 등록 ㄱㄱ</a>
      <br />
      <a href="/mypage/shopping_basket">장바구니</a>
      <br />
    </div>
  );
}

export default Mypage;
