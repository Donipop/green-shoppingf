import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hello from './component/Hello';
import Hello2 from './component/Hello2';
import Header from './component/Header';
import IndexPage from './component/Index'
import SellerCenter from './component/Sellercenter/SellerCenter';
import Login from './component/Login';
import Orderlist from './component/Orderlist/Orderlist';
import Information from './component/Information';
import Logout from './component/Logout';
import Notice from './component/Notice/Noticelist'
import NoticeView from './component/Notice/NoticeView';
import SellerSignup from './component/SellerSignup/Signup';
import SellerSignup2 from './component/SellerSignup/Signup2';
import Ordersearch from './component/Orderlist/Ordersearch';
import Myinformation from './component/Mypage/Myinformation';
import Mypage from './component/Mypage/Mypage';
import Writenotice from './component/Notice/Writenotice';
import Review from './component/ProductView/Review';
import QnA from './component/ProductView/QnA';
import QnApopup from './component/ProductView/QnApopup';
import QnAReply from './component/ProductView/QnAReply';

import View from './component/ProductView/View';
import PaymentPage from './component/Payment/PaymentPage';
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
        <Route path='/sellercenter/*' element={<SellerCenter />} />
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
        <Route path='/QnA' element={<QnA/>} />
        <Route path='/QnA/123' element={<QnApopup/>} />
        <Route path='/QnA/reply/:id' element={<QnAReply/>} />
        <Route path='/Payment' element={<PaymentPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;