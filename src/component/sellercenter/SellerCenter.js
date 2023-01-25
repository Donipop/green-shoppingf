import React from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import SellerHeader from "./SellerHeader";
import SellerSidebar from "./SellerSidebar";
import Create from "./Create";
import TotalOrderList from "./TotalOrderList/TotalOrderList";
import OrderPost from "./OrderPost/OrderPost";
import OrderConfirm from "./OrderConfirm/OrderConfirm";
import ProductUpdate from "./Update/ProductUpdate";
import SalesManageMent from "./SalesManegement/SalesMenegement";
import SellerCenterMain from "./SellerCenterMain/SellerCenterMain";
import SellerSettlement from "./SellerSettlement/SellerSettlement";
import { useEffect } from "react";

export default SellerCenter;

function SellerCenter({user}) {
  // const params = useParams();
  const Navigate = useNavigate()
  useEffect(()=>{
    if(user === undefined) {return ;}
    if(user === '') {
      Navigate('/')
      return;
    }
  },[user])
  return (
    <div>
      <SellerHeader />
      <div className="d-flex">
        <SellerSidebar />
        <Routes>
          {/* <Route path = '*' element={<h1>404 Not Found</h1>}></Route> */}
          <Route path="/" element={<SellerCenterMain user={user} />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/totalorderlist" element={<TotalOrderList />}></Route>
          <Route path="/orderpost" element={<OrderPost />}></Route>
          <Route path="/orderconfirm" element={<OrderConfirm />}></Route>
          <Route path="/update" element={<ProductUpdate />}></Route>
          <Route path="/salesmanegement" element={<SalesManageMent user={user}/>}></Route>
          <Route
            path="/sellersettlement"
            element={<SellerSettlement user={user}/>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}
