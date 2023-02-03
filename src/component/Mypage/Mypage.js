import Header from "../Header/Header";
import LoginInterceptor from "../Login/LoginInterceptor";
import React, { useEffect, useLayoutEffect, useState } from "react";
import MypageSidebar from "./MypageSidebar";
import { useNavigate, Route, Routes } from "react-router-dom";
import MypurChaseInquiry from "./MyPurchaseInquiry";
import Shopping_basket from "./Shopping_basket";
import Coupon from "./Coupon";
import MyReview from "./MyReview";
import Myinformation from "./Myinformation";
import SellerSignup from "../SellerSignup/SellerSignup";
import SellerSignupDetail from "../SellerSignup/SellerSignupDetail";
import MypageTalkTalk from "./MypageTalkTalk";

function Mypage({ user }) {
  if(user === undefined) {
    return;
  }
  return (
    <div>
      <LoginInterceptor/>
      <Header user={user} />
      <div className="d-flex">
        <MypageSidebar user={user}/>
        <Routes>
          <Route path="/" element={<Shopping_basket user={user} />}></Route>
          <Route
            path="/mypurchaseinquiry"
            element={<MypurChaseInquiry user={user} />}
          ></Route>
          <Route path="/coupon" element={<Coupon user={user} />}></Route>
          <Route path="/myreview" element={<MyReview user={user} />}></Route>
          <Route path="/myinformation" element={<Myinformation user={user} />}></Route>
          <Route path="/sellersignup" element={<SellerSignup user={user} />}></Route>
          <Route path="/sellersignupdetail" element={<SellerSignupDetail user={user} />}></Route>
          <Route path="/talktalk" element={<MypageTalkTalk user={user} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Mypage;
