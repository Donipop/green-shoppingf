import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link, Navigate } from 'react-router-dom';
import LoginInterceptor from "../LoginInterceptor";


    const Coupon = () => { 
    
    const[couponlist, setCouponlist] = useState([]);
    
    useEffect(() => {
        axios({
        method: 'get',
        url: `/api/Mypage/coupon`,
        })
        .then((res) => {
            setCouponlist(res.data)
            console.log(res.data)
        })
        }, [])


    


    return(
        <div >
            <div style={{display:"flex"}}>
    <h2 id= "TEST" style={{marginBottom:"25px",fontSize:"27px"}}>쿠폰 
    <em style={{marginLeft:"8px",color:"#14aaff",fontStyle:"normal"}}>{couponlist.length}장</em></h2>
    </div>
    <table>
        <tbody>
        <tr>
            <th style={{width:"300px", fontWeight:"normal",borderTop:"3px solid black", borderBottom:"2px solid black", paddingBottom:"15px", paddingTop:"15px", paddingLeft:"10px"}}>쿠폰번호</th>
            <th style={{width:"300px", fontWeight:"normal",borderTop:"3px solid black", borderBottom:"2px solid black"}}>쿠폰명</th>
            <th style={{width:"70px", fontWeight:"normal", borderTop:"3px solid black", borderBottom:"2px solid black"}}>할인율</th>
            <th style={{width:"100px", fontWeight:"normal", borderTop:"3px solid black", borderBottom:"2px solid black",paddingLeft:"40px"}}>적용범위</th>
            <th style={{width:"150px", fontWeight:"normal", borderTop:"3px solid black", borderBottom:"2px solid black", paddingLeft:"70px"}}>할인금액</th>
        </tr>
        </tbody>
    </table>
    <table>
        <tbody>
        {couponlist.map((couponlist) => (
         <tr key={couponlist.id}>
            <td style={{width:"100px", paddingLeft:"10px", borderBottom:"1px solid #e9ecef", paddingBottom:"10px", paddingTop:"10px"}} >{couponlist.id}</td>
            <td style={{width:"500px", borderBottom:"1px solid #e9ecef"}} >{couponlist.name}</td>
            <td style={{width:"70px",  borderBottom:"1px solid #e9ecef"}} >{couponlist.discountrate}%</td>
            <td style={{width:"130px",  borderBottom:"1px solid #e9ecef", paddingLeft:"40px"}} >{couponlist.condition}원 ~</td>
            <td style={{width:"150px", borderBottom:"1px solid #e9ecef",paddingLeft:"40px"}} >{couponlist.discount}</td>
        </tr>
        ))}
        </tbody>
        </table>
    </div>
    )

    }

    export default Coupon;