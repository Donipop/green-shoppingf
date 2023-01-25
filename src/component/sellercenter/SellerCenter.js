import React, { useEffect, useLayoutEffect, useState } from "react";
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
import axios from "axios";

export default SellerCenter;

function SellerCenter({ user }) {
  const [marketName, setMarketName] = useState();

  useLayoutEffect(() => {
    if (user !== undefined) {
      axios
        .get("/api/sellercenter/getmarketnamelist", {
          params: {
            user_id: user.user_id,
          },
        })
        .then((res) => {
          setMarketName(res.data[0]);
        });
    }
  }, [user]);

  if (user === undefined) {
    return;
  }
  return (
    <div>
      <SellerHeader user={user} />
      <div className="d-flex">
        <SellerSidebar />
        <Routes>
          {/* <Route path = '*' element={<h1>404 Not Found</h1>}></Route> */}
          <Route path="/" element={<SellerCenterMain user={user} />}></Route>
          <Route
            path="/create"
            element={<Create user={user} marketName={marketName} />}
          ></Route>
          <Route
            path="/totalorderlist"
            element={<TotalOrderList marketName={marketName} />}
          ></Route>
          <Route
            path="/orderpost"
            element={<OrderPost marketName={marketName} />}
          ></Route>
          <Route
            path="/orderconfirm"
            element={<OrderConfirm marketName={marketName} />}
          ></Route>
          <Route
            path="/update"
            element={<ProductUpdate user={user} marketName={marketName} />}
          ></Route>
          <Route
            path="/salesmanegement"
            element={<SalesManageMent user={user} />}
          ></Route>
          <Route
            path="/sellersettlement"
            element={<SellerSettlement user={user} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}
