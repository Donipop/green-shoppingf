import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import SellerHeader from './SellerHeader';
import SellerSidebar from './SellerSidebar';
import { Container } from 'react-bootstrap';
import Create from './Create';
import TotalOrderList from './TotalOrderList/TotalOrderList';
import OrderPost from './OrderPost/OrderPost';
import OrderConfirm from './OrderConfirm/OrderConfirm';
import ProductUpdate from './Update/ProductUpdate';
import SalesManageMent from './SalesManegement/SalesMenegement';
export default SellerCenter;

function SellerCenter(){
    // const params = useParams();
    return(
        <div>
            <SellerHeader />
            <div className='d-flex'>
                <SellerSidebar />
                <Routes>
                    <Route path = '*' element={<h1>404 Not Found</h1>}></Route>
                    <Route path='/create' element={<Create />}></Route>
                    <Route path='/totalorderlist' element={<TotalOrderList />}></Route>
                    <Route path='/orderpost' element={<OrderPost />}></Route>
                    <Route path='/orderconfirm' element={<OrderConfirm />}></Route>
                    <Route path='/update' element={<ProductUpdate />}></Route>
                    <Route path='/salesmanegement' element={<SalesManageMent />}></Route>
                </Routes>
            </div>
        </div>
    );

}