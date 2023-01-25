import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function OrderConfirmTable({ getDate, setModalInfo, marketName }) {
  const [orderConfirm, setOrderConfirm] = useState([]);

  useEffect(() => {
    if (marketName === undefined) {
      return;
    }
    axios
      .get("/api/sellercenter/getorderconfirm", {
        params: {
          marketName: marketName,
        },
      })
      .then((res) => {
        //console.log(res.data);
        setOrderConfirm(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [marketName]);

  const showProductModal = (e, index) => {
    setModalInfo(orderConfirm[index]);
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>주문번호</th>
                  <th>주문일시</th>
                  <th>주문상태</th>
                  <th>상품명</th>
                  <th>구매자</th>
                  <th>구매자 연락처</th>
                  <th>구매자 주소</th>
                  <th>구매자 이메일</th>
                </tr>
              </thead>
              <tbody>
                {orderConfirm.map((order, index) => {
                  if (
                    order["TIME"] >= getDate.start &&
                    order["TIME"] <= getDate.end
                  ) {
                    let Istate = "";
                    switch (String(order.STATE)) {
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
                    return (
                      <tr key={index}>
                        <CLICKTD
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop2"
                          onClick={(e) => showProductModal(e, index)}
                        >
                          {order.ID}
                        </CLICKTD>
                        <td>{order.TIME}</td>
                        <td>{Istate}</td>
                        <td>{order.TITLE}</td>
                        <td>{order.USER_NAME}</td>
                        <td>{order.USER_TEL}</td>
                        <td>{order.USER_ADDRESS}</td>
                        <td>{order.USER_EMAIL}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmTable;

const CLICKTD = styled.td`
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    color: #00bfa5;
  }
`;
