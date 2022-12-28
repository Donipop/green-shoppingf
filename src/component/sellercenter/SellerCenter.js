import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import SellerHeader from './SellerHeader';
import SellerSidebar from './SellerSidebar';
import { Container } from 'react-bootstrap';
import Create from './Create';
import TotalOrderList from './TotalOrderList/TotalOrderList';
export default SellerCenter;

function SellerCenter(){
    // const params = useParams();
    return(
        <div>
            <SellerHeader />
            <div className='d-flex'>
                <SellerSidebar />
                <Routes>
                    <Route path='/create' element={<Create />}></Route>
                    <Route path='/totalorderlist' element={<TotalOrderList />}></Route>
                </Routes>
            </div>
        </div>
    );

}