import axios from "axios";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ClientInfo from "./ClientInfo";
import DeliveryInfo from "./DeliveryInfo";
function PaymentPage({user}){
    useLayoutEffect(() => {
       if(user === undefined){
        return ;
       }
    }, [user])
    const {state} = useLocation();
    const [productList, setProductList] = useState([]);
    const [isChecked, setIsChecked] = useState([true,false,false]);
    const [payType, setPayType] = useState('신용카드');
    const [purchase, setPurchase] = useState([]);
    const [payInfo, setPayInfo] = useState({
        totalProductPrice: 0, //상품금액
        totalCuponPrice: 0, //쿠폰금액
        totalDiscountPrice: 0, //할인금액
        totalDeliveryPrice: 0, //배송비
        totalPaymentPrice: 0, //총결제금액
    });
    const [postAddress, setPostAddress] = useState();
    useEffect(() => {
        console.log(state)
        for(let i=0; i<state.length; i++){
            for(let j=0; j<state[i].listItem.length; j++){
                let products = {
                    name: '', //상품명
                    marketName: '', //마켓이름
                    count: 0, //상품수량
                    price: 0, //상품가격
                    sale: 0, //할인금액
                    delivery: 0, //배송비
                    totalPrice: 0, //총결제금액
                    productDetailId: 0, //상품상세아이디
                    productId: 0, //상품아이디
                }
                products.name = state[i].listItem[j].name;
                products.marketName = state[i].marketName;
                products.count = state[i].listItem[j].count;
                products.price = state[i].listItem[j].price;
                products.sale = state[i].listItem[j].discount * state[i].listItem[j].count;
                if(j===0){
                    products.delivery = state[i].delivery;
                }else{
                    products.delivery = 0;
                }
                products.totalPrice = parseInt(state[i].listItem[j].totalPrice) + parseInt(products.delivery);
                products.productDetailId = state[i].listItem[j].productDetailId;
                products.productId = state[i].productId;
                
                setProductList((productList) => {
                    return [...productList, products];
                });

                setPayInfo((payInfo) => {
                    return {
                        ...payInfo,
                        totalProductPrice: payInfo.totalProductPrice + parseInt(products.price),
                        totalDiscountPrice: payInfo.totalDiscountPrice + parseInt(products.sale),
                        totalDeliveryPrice: payInfo.totalDeliveryPrice + parseInt(products.delivery),
                        totalPaymentPrice: payInfo.totalPaymentPrice + parseInt(products.totalPrice),
                    }
                });
            }

            let data = {
                delivery: state[i].delivery,
                marketName: state[i].marketName,
                productId: state[i].productId,
                listItem: state[i].listItem,
            }
            setPurchase((purchase) => {
                return [...purchase, data]
            })
        }
    }, [state])

    const onChangeCheck = (e) => {
        let arr = [false, false, false];
        let key = parseInt(e.target.id.split('flexRadioDefault')[1]) - 1;
        arr[key] = true;
        let payTypeInfo = ['신용카드', '실시간계좌이체', '휴대폰결제'];
        setPayType(payTypeInfo[key]);
        setIsChecked(arr);
    }

    const onClickBuy = () => {
        for(let i=0; i<purchase.length; i++){
            let data = {
                paymentVo: purchase[i],
                userId: user.user_id,
                postAddress: postAddress,
            }
            axios.post('/api/payment/purchase',data)
            .then((res) => {
                if(i === purchase.length-1){
                    if(res.data === 'success'){
                        alert('구매가 완료되었습니다.');
                        window.location.href = '/';
                    }else{
                        alert('구매에 실패하였습니다.');
                        window.location.href = '/';
                    }
                }
            }).catch((err) => {
                console.log(err);
            })
        }
        

    }
    return (
        <DOV className="container">
            <div className="row">
                <div className="col-12">
                    <h1>주문/결제</h1>
                </div>
                <LINE />

                <div className="col-12">
                    <h3>구매자정보</h3>
                </div>
                <ClientInfo user={user}/>
                
                <div className="col-12 mt-5">
                    <h3>배송지 정보</h3>
                </div>
                <DeliveryInfo user={user} setPostAddress={setPostAddress}/>

                <div className="col-12 mt-5">
                    <h3>상품정보</h3>
                </div>
                
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>상품정보</th>
                                <th>마켓이름</th>
                                <th>수량</th>
                                <th>상품금액</th>
                                <th>할인</th>
                                <th>배송비</th>
                                <th>총 결제금액(배송비 포함)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.marketName}</td>
                                        <td>{item.count}</td>
                                        <td>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                                        <td>{item.sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                                        <td>{item.delivery.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                                        <td>{item.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
                </div>        

                <div className="col-12 mt-5">
                    <h3>결제수단</h3>
                </div>

                <div className="col-12">
                    <PAYTABLE>
                        <tbody>
                            <tr>
                                <th>총상품가격</th>
                                <td>{payInfo.totalProductPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                            </tr>
                            <tr>
                                <th>할인쿠폰</th>
                                <td>{payInfo.totalCuponPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                            </tr>
                            <tr>
                                <th>총할인가격</th>
                                <td>{payInfo.totalDiscountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                            </tr>
                            <tr>
                                <th>배송비</th>
                                <td>{payInfo.totalDeliveryPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                            </tr>
                            <tr>
                                <th>총결제금액</th>
                                <td>{payInfo.totalPaymentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                            </tr>
                            <tr>
                                <th>결제방법</th>
                                <td>
                                    <div className="row">
                                        <div className="col-12 d-flex">

                                            <div className="form-check m-1">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={isChecked[0]} onChange={onChangeCheck} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    신용카드
                                                </label>
                                            </div>

                                            <div className="form-check m-1">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={isChecked[1]} onChange={onChangeCheck} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    실시간 계좌이체
                                                </label>
                                            </div>

                                            <div className="form-check m-1">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked={isChecked[2]} onChange={onChangeCheck} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                    휴대폰 결제
                                                </label>
                                            </div>  

                                        </div>

                                        <div className="col-12 d-flex">
                                            <h1>{payType}</h1>
                                        </div>

                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </PAYTABLE>
                </div>
                
                <div className="col-12 mt-5 mb-5">
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={onClickBuy}>결제하기</button>
                    </div>
                </div>
                
            </div>   
        </DOV>
    );
}

export default PaymentPage;

const LINE = styled.div`
    width: 100%;
    border-bottom: 1px solid #000;
    margin: 10px 0;
    display: block;
`;

const DOV = styled.div`
    .line{
        width: 100vh;
        border-bottom: 1px solid #000;
    }
    thead{
        border-bottom: 1px solid #000;
    }
    
`;

const PAYTABLE = styled.table`
    width: 100%;
    border: 1px solid #000;
    border-collapse: collapse;

    th, td{
        border: 1px solid #000;
        padding: 10px;
    }
    th{
        width: 144px;
    }
`;
