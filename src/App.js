import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./component/Index/Index";
import SellerCenter from "./component/SellerCenter/SellerCenter";
import Login from "./component/Login/Login";
import Logout from "./component/Login/Logout";
import Notice from "./component/Notice/Noticelist";
import NoticeView from "./component/Notice/NoticeView";
import SellerSignup from "./component/SellerSignup/Signup";
import SellerSignup2 from "./component/SellerSignup/Signup2";
import Myinformation from "./component/Mypage/Myinformation";
import Mypage from "./component/Mypage/Mypage";
import Writenotice from "./component/Notice/Writenotice";
import Review from "./component/ProductView/Review";
import QnAList from "./component/ProductView/QnAList";
import QnAQuestionWrite from "./component/ProductView/QnAQuestionWrite";
import QnAanswerWrite from "./component/ProductView/QnAanswerWrite";
import View from "./component/ProductView/View";
import QnAQuestionUpdate from "./component/ProductView/QnAQuestionUpdate";
import QnAanswerUpdate from "./component/ProductView/QnAanswerUpdate";
import Coupon from "./component/Mypage/Coupon";
import Shopping_basket from "./component/Mypage/Shopping_basket";
import PaymentPage from "./component/Payment/PaymentPage";
import MyReview from "./component/Mypage/MyReview";
import MyPurchaseInquiry from "./component/Mypage/MyPurchaseInquiry";
import SellerReview from "./component/SellerCenter/reviewmanagement/SellerReview";
import Header from "./component/Header/Header";
import TalkTalk from "./component/TalkTalk/TalkTalk";
import UserSignUp from './component/SignUp/UserSignUp';
import UserFindId from './component/SignUp/UserFindId';
import UserFindPassword from './component/SignUp/UserFindPassword';

import SearchView from "./component/SearchView/SearchView";
import SellerCenterMain from "./component/SellerCenter/SellerCenterMain/SellerCenterMain";
import Signup from "./component/SellerSignup/Signup";
import { useCookies } from "react-cookie";
import GetUserData from "./component/Login/GetUserData";
import { useState, useLayoutEffect } from "react";

const Router = (props) => {
  
  const [cookie, setCookie, removeCookie] = useCookies(["refreshToken"]);
  let refreshToken = cookie.refreshToken;
  const [data, setData] = useState();
  useLayoutEffect(() => {
    if(refreshToken === undefined){
      // console.log("refreshToken이 없습니다.")
    }else{
      // console.log("refreshToken이 있습니다.")
      GetUserData(refreshToken).then((res) => {
        setData(res);
      });
    }
  }, [refreshToken]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage user={data}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/Sellercenter/*' element={<SellerCenter user={data}/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/Notice' element={<Notice/>} />
        <Route path='/NoticeDetail/:id' element={<NoticeView/>} />
        <Route path='/SellerSignup' element={<SellerSignup/>} />
        <Route path='/SellerSignup2' element={<SellerSignup2/>} />
        <Route path='/myinformation' element={<Myinformation/>} />
        <Route path='/mypage' element={<Mypage user={data}/>} />
        <Route path='/writenotice' element={<Writenotice/>} />
        <Route path="/view/:page" element={<View user={data}/>} />
        <Route path='/view/:page/Review' element={<Review/>} />
        <Route path='/QnA:page' element={<QnAList/>} />
        <Route path='/QnA/write/:page/:user_id' element={<QnAQuestionWrite/>} />
        <Route path='/QnA/reply/:page/:id/:user_id' element={<QnAanswerWrite/>} />
        <Route path='/QnA/update/:page/:id' element={<QnAQuestionUpdate/>} />
        <Route path='/QnA/answerUpdate/:page/:id/:child_id/:cont' element={<QnAanswerUpdate/>} />
        <Route path='/Mypage/coupon' element={<Coupon/>} />
        <Route path='/mypage/Shopping_basket' element={<Shopping_basket/>} />
        <Route path='/Payment' element={<PaymentPage/>} />
        <Route path='/Mypage/MyReview' element={<MyReview/>} />
        <Route path='/Mypage/MyPurchaseInquiry' element={<MyPurchaseInquiry/>} />
        <Route path='/Sellercenter/reviewmanagement' element={<SellerReview/>} />
        {/* <Route path='/header' element={<Header user={data}/>} /> */}
        <Route path='/ct/:uuid' element={<TalkTalk />} />
        <Route path='/searchview' element={<SearchView/>} />
        <Route path='/SellercenterMainpage' element={<SellerCenterMain/>} />
        <Route path='/UserSignUp' element={<UserSignUp />} />
        <Route path='/UserFindId' element={<UserFindId/>} />
        <Route path='/UserFindPassword' element={<UserFindPassword/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
