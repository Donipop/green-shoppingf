import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewDetailProductInfo from "./ViewDetailProductInfo";

function ViewTable({ getDate, marketName }) {
  const [allChecked, setAllChecked] = useState(false);
  const [isChecked, setIsChecked] = useState();
  const [list, setList] = useState([]);
  const [tableList, setTableList] = useState([]);
  const [modalInfo, setModalInfo] = useState([]);
  const [OrderState, setOrderState] = useState("7");
  //render링 방식을 getdate 바뀔때 하는걸로 바꿔야함 확인하고 백엔드 소스도 좀 변경해서 프로덕드 79도 있/는데 옆에 마켓이름 컬럼도 하나 추가해서 DB에서 받아오는 속도를 올려보자.
  const checkHandler = (e) => {
    const { checked } = e.target;
    let key = e.target.attributes.indexid.value;
    if (checked) {
      setIsChecked({ ...isChecked, [key]: true });
    } else {
      setIsChecked({ ...isChecked, [key]: false });
    }
  };

  useEffect(() => {
    setIsChecked(new Array(list.length).fill(allChecked));
  }, [list, allChecked]);
  useEffect(() => {
    setTableList(
      list.filter((item) => {
        if (getDate.start === "" && getDate.end === "") {
          return item;
        } else if (
          item["TIME"] >= getDate.start &&
          item["TIME"] <= (getDate.end + " 23:59:59")
        ) {
          return item;
        } else {
          return null;
        }
      })
    );
  }, [getDate, list]);
  useEffect(() => {
    if (marketName === undefined) {
      return;
    }
    axios
      .get("/api/sellercenter/getorderlist", {
        params: {
          marketName: marketName,
        },
      })
      .then((res) => {
        
        setList(res.data);
        setIsChecked(new Array(res.data.length).fill(false));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [marketName]);

  const showProductModal = (e, ID) => {
    let index = 0;
    list.filter(item => {
        if(item["ID"] === ID){
        index = list.indexOf(item);
        return index;
      }
      return null;
    })
    let data = {
      orderId: list[index]["ID"],
      postAddressId: list[index]["POSTADDRESSID"],
      orderState: list[index]["STATE"],
    };
    setModalInfo(data);
  };
  return (
    <DOV className="row">
      <div className="col-12">
        <span>목록</span>
        <span>(총 </span>
        <COUNTGREEN>{tableList.length}</COUNTGREEN>
        <span> 개)</span>

        <div className="col-12">
          {/* 선택한 상품 상태변경 */}
          <select
            name="orderState"
            id="orderState"
            onChange={(e) => setOrderState(e.target.value)}
          >
            <option value="7">전체</option>
            <option value="0">주문접수</option>
            <option value="1">결제완료</option>
            <option value="2">배송준비중</option>
            <option value="3">배송중</option>
            <option value="4">배송완료</option>
            <option value="5">구매확정</option>
            <option value="6">구매취소</option>
          </select>
        </div>
      </div>

      <LINE />

      <div className="col-12">
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  defaultChecked={allChecked}
                  onChange={() => setAllChecked(!allChecked)}
                />
                선택
              </th>
              <th>상품주문번호</th>
              <th>주문번호</th>
              <th>주문일시</th>
              <th>주문상태</th>
              <th>상품명</th>
            </tr>
          </thead>
          <tbody>
            {tableList.map((item, index) => {
              let Istate = "";
              //주문상태에 따라 목록을 보여줌
              if (
                OrderState === "7" ||
                OrderState === undefined ||
                OrderState === null ||
                OrderState === ""
              ) {
              } else if (OrderState !== String(item["STATE"])) {
                return null;
              }
              switch (String(item["STATE"])) {
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
                  <td>
                    <input
                      type="checkbox"
                      checked={isChecked[index]}
                      indexid={index}
                      onChange={(e) => checkHandler(e)}
                    />
                  </td>
                  <CLICKTD
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={(e) => showProductModal(e, item["ID"])}
                  >
                    {item["PRODUCTID"]}
                  </CLICKTD>
                  <td>{item["ID"]}</td>
                  <td>{item["TIME"]}</td>
                  <td>{Istate}</td>
                  <td>{item["product_Title"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ViewDetailProductInfo productInfo={modalInfo} />
    </DOV>
  );
}

export default ViewTable;

const COUNTGREEN = styled.span`
  color: #00bfa5;
  font-weight: bold;
`;

const LINE = styled.div`
  width: 100%;
  border-bottom: 1px solid #000;
  padding: 0;
  margin: 10px 0;
  display: block;
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

const CLICKTD = styled.td`
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    color: #00bfa5;
  }
`;
