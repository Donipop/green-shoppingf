import axios from "axios";
import React, { useEffect } from "react";
import "./Salesmodalcss.css";
import { useState } from "react";

function SalesViewDetailInfo(DetailInfo) {
  const [purchaseDetailInfo, setpurchaseDetailInfo] = useState([]);

  useEffect(() => {
    if (DetailInfo.DetailInfo.buyerid === undefined) {
      return;
    }
    axios({
      method: "post",
      url: "/api/sellercenter/getpurchasedetailinfo",
      params: {
        buyerid: DetailInfo.DetailInfo.buyerid,
        id: DetailInfo.DetailInfo.id,
      },
    })
      .then((res) => res.data)
      .then((res) => {
        setpurchaseDetailInfo(res);
      });
  }, [DetailInfo.DetailInfo.buyerid, DetailInfo.DetailInfo.id]);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              구매자 : {DetailInfo.DetailInfo.buyerid}
            </h5>
          </div>

          <div className="modal-body">
            <table>
              <thead>
                <tr>
                  <th>상품명</th>
                  <th>상품가격</th>
                  <th>수량</th>
                  <th>총액</th>
                </tr>
              </thead>
              <tbody>
                {purchaseDetailInfo.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.product_name}</td>
                      <td>{item.price}</td>
                      <td>{item.count}</td>
                      <td>{item.price * item.count}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default SalesViewDetailInfo;
