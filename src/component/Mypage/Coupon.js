import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link, Navigate } from 'react-router-dom';
import LoginInterceptor from "../LoginInterceptor";


    const Coupon = () => { 
    
    const[couponlist, setCouponlist] = useState([]);
    
    useEffect(() => {
        axios({
        method: 'get',
        url: `/api/mypage/coupon`,
        })
        .then((res) => {
            setCouponlist(res.data)
        })
        }, [])


    


    return(
        <div style={{marginTop:"40px"}}>
            <div style={{display:"flex"}}>
    <h2 id= "TEST" style={{marginBottom:"25px",fontSize:"27px"}}>쿠폰 
    <em style={{marginLeft:"8px",color:"#14aaff",fontStyle:"normal"}}>{couponlist.length}장</em></h2>
    </div>
    <table style={{width:"1270px", height:"60px"}} >
        <tbody >
        <tr> 
            <th style={{width:"13%",fontWeight:"normal",borderTop:"3px solid black", borderBottom:"2px solid black", paddingBottom:"15px", paddingTop:"15px", paddingLeft:"10px",textAlign:"center"}}>쿠폰번호</th>
            <th style={{fontWeight:"normal",borderTop:"3px solid black", borderBottom:"2px solid black", textAlign:"center"}}>쿠폰명</th>
            <th style={{width:"13%", fontWeight:"normal", borderTop:"3px solid black", borderBottom:"2px solid black"}}>할인율</th>
            <th style={{width:"13%", fontWeight:"normal", borderTop:"3px solid black", borderBottom:"2px solid black"}}>적용범위</th>
            <th style={{width:"15%", fontWeight:"normal", borderTop:"3px solid black", borderBottom:"2px solid black"}}>할인금액</th>
        </tr>
        </tbody>
    </table>
    <table style={{width:"1270px"}}>
        <tbody>
        {couponlist.map((couponlist) => (
         <tr  key={couponlist.id}style={{ height:"60px"}}>
            <td style={{width:"13%", paddingLeft:"10px", borderBottom:"1px solid #e9ecef", paddingBottom:"10px", paddingTop:"10px", textAlign:"center"}} >{couponlist.id}</td>
            <td style={{borderBottom:"1px solid #e9ecef"}} >{couponlist.name}</td>
            <td style={{width:"13%",  borderBottom:"1px solid #e9ecef"}} >{couponlist.discountrate}%</td>
            <td style={{width:"13%",  borderBottom:"1px solid #e9ecef"}} >{couponlist.condition}원 ~</td>
            <td style={{width:"15%", borderBottom:"1px solid #e9ecef"}} >{couponlist.discount}</td>
        </tr>
        ))}
        </tbody>
        </table>
    </div>
    )

    }

    export default Coupon;