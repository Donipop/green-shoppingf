import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hello from './component/Hello';
import Hello2 from './component/Hello2';
import Header from './component/Header';
import IndexPage from './component/Index'
import SellerCenter from './component/sellercenter/SellerCenter';
<<<<<<< HEAD
import Login from './component/Login';
import Orderlist from './component/Orderlist/Orderlist';
import Information from './component/Information';
import Logout from './component/Logout';


=======
import Login from './component/Login'
import Orderlist from './component/Orderlist/Orderlist'
import Ordersearch from './component/Orderlist/Ordersearch'
>>>>>>> 7e925fd3c019aadf52ed05acfcfbfb9041edf966

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
<<<<<<< HEAD
        <Route path='/information' element={<Information/>} />
        <Route path='/logout' element={<Logout/>} />
=======
        <Route path='/Ordersearch' element={<Ordersearch/>} />
>>>>>>> 7e925fd3c019aadf52ed05acfcfbfb9041edf966

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
