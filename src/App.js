import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hello from './component/Hello';
import Hello2 from './component/Hello2';
import Header from './component/Header';
import IndexPage from './component/Index'
import SellerCenter from './component/sellercenter/SellerCenter';
import Login from './component/Login';
import Orderlist from './component/Orderlist/Orderlist';
import Information from './component/Information';
import Logout from './component/Logout';
import Ordersearch from './component/Orderlist/Ordersearch';
import Myinformation from './component/Mypage/Myinformation';
import Mypage from './component/Mypage/Mypage';

// function App() {
//   return (
//     <div className="App">
//       <Hello />
//     </div>
//   );
// }

// export default App;

const Router = () => {
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
        <Route path='/Ordersearch' element={<Ordersearch/>} />
        <Route path='/myinformation' element={<Myinformation/>} />
        <Route path='/mypage' element={<Mypage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
