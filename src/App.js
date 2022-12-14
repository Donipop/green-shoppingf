import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hello from './component/Hello';
import Hello2 from './component/Hello2';
import Header from './component/Header';
import IndexPage from './component/Index'
import SellerCenter from './component/SellerCenter/SellerCenter';
import Login from './component/Login';
import Orderlist from './component/Orderlist/Orderlist';
import Information from './component/Information';
import Logout from './component/Logout';
import Notice from './component/Notice/Noticelist'
import NoticeView from './component/Notice/NoticeView';
import SellerSignup from './component/SellerSignup/Signup';
import SellerSignup2 from './component/SellerSignup/Signup2';
import Myinformation from './component/Mypage/Myinformation';
import Mypage from './component/Mypage/Mypage';
import Writenotice from './component/Notice/Writenotice';
import Review from './component/ProductView/Review';
import QnAList from './component/ProductView/QnAList';
import QnAQuestionWrite from './component/ProductView/QnAQuestionWrite';
import QnAanswerWrite from './component/ProductView/QnAanswerWrite';
import View from './component/ProductView/View';
import QnAQuestionUpdate from './component/ProductView/QnAQuestionUpdate';
import QnAanswerUpdate from './component/ProductView/QnAanswerUpdate';
import Coupon from './component/Mypage/Coupon';
import Shopping_basket from './component/Mypage/Shopping_basket';
import PaymentPage from './component/Payment/PaymentPage';
import MyReview from './component/Mypage/MyReview';
import MyPurchaseInquiry from './component/Mypage/MyPurchaseInquiry';
import SellerReview from './component/SellerCenter/reviewmanagement/SellerReview';
import Header2  from './component/Header2';
// function App() {
//   return (
//     <div className="App">
//       <Hello />
//     </div>
//   );
// }

// export default App;


const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/signup" element={<Hello />} />
        <Route path="/hello2" element={<Hello2 />} />
        <Route path='/header' element={<Header />} />
        <Route path='/Sellercenter/*' element={<SellerCenter />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Orderlist' element={<Orderlist/>} />
        <Route path='/information' element={<Information/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/Notice' element={<Notice/>} />
        <Route path='/NoticeDetail/:id' element={<NoticeView/>} />
        <Route path='/SellerSignup' element={<SellerSignup/>} />
        <Route path='/SellerSignup2' element={<SellerSignup2/>} />
        <Route path='/myinformation' element={<Myinformation/>} />
        <Route path='/mypage' element={<Mypage/>} />
        <Route path='/writenotice' element={<Writenotice/>} />
        <Route path="/view/:page" element={<View/>} />
        <Route path='/view/:page/Review' element={<Review/>} />
        <Route path='/QnA:page' element={<QnAList/>} />
        <Route path='/QnA/write/:page' element={<QnAQuestionWrite/>} />
        <Route path='/QnA/reply/:page/:id' element={<QnAanswerWrite/>} />
        <Route path='/QnA/update/:page/:id' element={<QnAQuestionUpdate/>} />
        <Route path='/QnA/answerUpdate/:page/:id/:child_id/:cont' element={<QnAanswerUpdate/>} />
        <Route path='/Mypage/coupon' element={<Coupon/>} />
        <Route path='/mypage/Shopping_basket' element={<Shopping_basket/>} />
        <Route path='/Payment' element={<PaymentPage/>} />
        <Route path='/Mypage/MyReview' element={<MyReview/>} />
        <Route path='/Mypage/MyPurchaseInquiry' element={<MyPurchaseInquiry/>} />
        <Route path='/Sellercenter/reviewmanagement' element={<SellerReview/>} />
        <Route path='/header2' element={<Header2/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;