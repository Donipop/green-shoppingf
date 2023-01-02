import axios from "axios";
import { useEffect, useState } from "react";

function ViewDetailProductInfo({ productInfo }) {
    const [detailInfo, setDetailInfo] = useState({
        postInfo: [],
        productInfo: []
    });
    const [orderState, setOrderState] = useState();
    const [orderStateNum, setOrderStateNum] = useState();
    useEffect(() => {
        if(productInfo.postAddressId === undefined) return;

        let data = {
            postInfo: [],
            productInfo: []
        }
        let Istate = "";
        switch(String(productInfo.orderState)){
            case "0":
                Istate = "주문접수";
                break;
            case "1":
                Istate = "결제완료";
                break;
            case "2":
                Istate = "배송준비중";
                break;
            case "3":
                Istate = "배송중";
                break;
            case "4":
                Istate = "배송완료";
                break;
            case "5":
                Istate = "구매확정";
                break;
            case "6":
                Istate = "구매취소";
                break;
            default:
                Istate = "주문접수";
                break;
        }
        setOrderStateNum(productInfo.orderState);
        setOrderState(Istate);
        

        //상세상품 받아오기
        axios.get("/api/sellercenter/getorderdetail", {
            params: {
                Id: productInfo.orderId
                }
                }).then((res) => {
                    data.productInfo = res.data;
                    //유저정보 받아오기
                    axios.get("/api/sellercenter/getpostaddress", {
                        params: {
                            Id: productInfo.postAddressId
                            }
                            }).then((res) => {
                                data.postInfo = res.data;
                                setDetailInfo(data);
                            }).catch((err) => {
                                console.log(err);
                            })

                }).catch((err) => {
                    console.log(err);
                })
    }, [productInfo])

    const onClickOrderState = (e,num) => {
        let Istate = "";
        switch(String(num)){
            case "0":
                Istate = "주문접수";
                break;
            case "1":
                Istate = "결제완료";
                break;
            case "2":
                Istate = "배송준비중";
                break;
            case "3":
                Istate = "배송중";
                break;
            case "4":
                Istate = "배송완료";
                break;
            case "5":
                Istate = "구매확정";
                break;
            case "6":
                Istate = "구매취소";
                break;
            default:
                Istate = "주문접수";
                break;
        }
        setOrderStateNum(num);
        setOrderState(Istate + '로 변경');
    }

    const onClickConfirm = () => {
        console.log(productInfo.orderId);
        console.log(orderStateNum);

        axios.post("/api/sellercenter/updateorderstatus", {
            Id: parseInt(productInfo.orderId),
            status: parseInt(orderStateNum)
        }).then((res) => {
            alert("주문상태가 변경되었습니다.");
        }).catch((err) => { 
            console.log(err);
        }
        )
    }
    return(
        
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">상세주문 (주문번호 : {productInfo.orderId} )</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                
                <table>
                    <thead>
                        <tr>
                            <th>상품코드</th>
                            <th>상품이름</th>
                            <th>수량</th>
                        </tr>
                    </thead>
                    <tbody>
                        {detailInfo.productInfo.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.PRODUCTDETAILID}</td>
                                    <td>{item.PRODUCT_NAME}</td>
                                    <td>{item.COUNT}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                
                <table className="mt-5">
                    <thead>
                        <tr>
                            <th>주문자</th>
                            <th>주문자 주소</th>
                            <th>주문자 연락처</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{detailInfo.postInfo["NAME"]}</td>
                            <td>{detailInfo.postInfo["ADDRESS"]}</td>
                            <td>{detailInfo.postInfo["TEL"]}</td>
                        </tr>
                    </tbody>
                </table>



            </div>
            <div className="modal-footer">
                <span className="position-absolute start-0">주문상태 : {orderState}</span>

                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        주문상태 변경
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><span className="dropdown-item" onClick={(e) => onClickOrderState(e,0)}>주문접수</span></li>
                        <li><span className="dropdown-item" onClick={(e) => onClickOrderState(e,1)}>결제완료</span></li>
                        <li><span className="dropdown-item" onClick={(e) => onClickOrderState(e,2)}>배송준비중</span></li>
                        <li><span className="dropdown-item" onClick={(e) => onClickOrderState(e,3)}>배송중</span></li>
                        <li><span className="dropdown-item" onClick={(e) => onClickOrderState(e,4)}>배송완료</span></li>
                        <li><span className="dropdown-item" onClick={(e) => onClickOrderState(e,5)}>구매확정</span></li>
                        <li><span className="dropdown-item" onClick={(e) => onClickOrderState(e,6)}>주문취소</span></li>
                    </ul>
                </div>
                
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                <button type="button" className="btn btn-primary" onClick={onClickConfirm}>확인</button>
            </div>
          </div>
        </div>
    </div>
        
    );
}
export default ViewDetailProductInfo