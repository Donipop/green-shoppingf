import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Pagination from "../SalesManegement/Pagination";

function AlreadySettlement({ getDate }) {
  let getstartdate = getDate[0].start;
  let getenddate = getDate[0].end;
  let getuserid = getDate[1];

  const [AlreadySettlementList, setAlreadySettlementList] = useState([]);
  const [AlreadySettleMoney, setAlreadySettleMoney] = useState();

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    let result = 0;
    axios({
      method: "post",
      url: "/api/sellercenter/getalreadysettlement",
      params: {
        start: getstartdate,
        end: getenddate,
        user_id: getuserid,
      },
    })
      .then((res) => res.data)
      .then((res) => {
        setAlreadySettlementList(res);
        for (let i = 0; i < res.length; i++) {
          result += res[i].totalprice;
        }

        setAlreadySettleMoney(result);
      });
  }, [getDate]);

  return (
    <DOV className="row">
      <span>
        {getstartdate} ~ {getenddate}
      </span>
      <span>총 정산금액 : </span>
      <COUNTGREEN>{AlreadySettleMoney}</COUNTGREEN>
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
              <th>정산신청번호</th>
              <th>마켓명</th>
              <th>정산 금액</th>
              <th>정산시 구매목록번호</th>
              <th>계좌번호</th>
              <th>정산신청날짜</th>
            </tr>
          </thead>
          <tbody>
            {AlreadySettlementList.slice(offset, offset + limit).map(
              (item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.market_name}</td>
                    <td>{item.totalprice}</td>
                    <td>{item.idlist}</td>
                    <td>{item.bank_account}</td>
                    <td>{item.settle_date}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
        <footer>
          <Pagination
            total={AlreadySettlementList.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </footer>
      </div>
    </DOV>
  );
}

export default AlreadySettlement;

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
