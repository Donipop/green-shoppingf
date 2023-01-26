import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SalesViewDetailInfo from "./SalesViewDetailInfo";
import Pagination from "./Pagination";

function SalesViewTable({ getDate }) {
  let getStartDate = getDate[0].start;
  let getEndDate = getDate[0].end;
  let user_id = getDate[1];
  const [purchaseconfirm, setpurchaseconfirm] = useState([]);
  const [month_of_sales, setmonth_of_sales] = useState(0);
  const [modalInfo, setModalInfo] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const showProductModal = (index) => {
    let data = {
      buyerid: purchaseconfirm[index].buyerid,
      id: purchaseconfirm[index].id,
      title: purchaseconfirm[index].title,
    };
    setModalInfo(data);
  };

  useEffect(() => {
    if (getStartDate === "" || getEndDate === "" || user_id === "") {
      return;
    }
    let result = 0;
    axios({
      method: "post",
      url: "/api/sellercenter/getpurchaseconfirm",
      params: {
        start: getDate[0].start,
        end: getDate[0].end,
        user_id: getDate[1],
      },
    })
      .then((res) => res.data) 
      .then((res) => {
        setpurchaseconfirm(res);
        for (let i = 0; i < res.length; i++) {
          result += res[i].totalprice;
        }
        setmonth_of_sales(result);
      });
  }, []);

  return (
    <DOV className="row">
      <span>
        {getStartDate} ~ {getEndDate}
      </span>
      <span>총 매출액 : </span>
      <COUNTGREEN>{month_of_sales}</COUNTGREEN>
      <span>원</span>
      <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>

      <div className="col-12">
        <table>
          <thead>
            <tr>
              <th>구매자</th>
              <th>결제시간</th>
              <th>주문확정시간</th>
              <th>배송비</th>
              <th>총주문금액</th>
              <th>타이틀</th>
            </tr>
          </thead>
          <tbody>
            {purchaseconfirm
              .slice(offset, offset + limit)
              .map((item, index) => {
                return (
                  <tr
                    key={index}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={(e) => showProductModal(index)}
                  >
                    <td style={{ display: "none" }}>{item.id}</td>
                    <td>{item.buyerid}</td>
                    <td>{item.purchasetime}</td>
                    <td>{item.purchaseconfirmtime}</td>
                    <td>{item.delivery}</td>
                    <td>{item.totalprice}</td>
                    <td>{item.title}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <footer>
          <Pagination
            total={purchaseconfirm.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </footer>
      </div>
      <SalesViewDetailInfo DetailInfo={modalInfo} />
    </DOV>
  );
}

export default SalesViewTable;

const COUNTGREEN = styled.span`
  color: #00bfa5;
  font-weight: bold;
`;
const DOV = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  display: block;

  table {
    width: 100%;
  }

  thead {
    background-color: #f5f5f5;
    width: 100%;
  }
  tbody {
    width: 100%;
    background-color: #fff;
  }
  th {
    text-align: center;
  }
  td {
    padding: 10px;
    border: 1px solid #000;
    text-align: center;
  }
`;
