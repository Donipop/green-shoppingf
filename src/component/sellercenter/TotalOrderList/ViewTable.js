import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewDetailProductInfo from "./ViewDetailProductInfo";

function ViewTable(){
    const [allChecked, setAllChecked] = useState(false);
    const [isChecked, setIsChecked] = useState();
    const [list, setList] = useState([]);
    const [modalInfo, setModalInfo] = useState([]);
    const checkHandler = (e) =>{
        const { checked } = e.target;
        let key = e.target.attributes.indexid.value;
        if(checked){
            setIsChecked({...isChecked, [key]: true})
        }else{
            setIsChecked({...isChecked, [key]: false})
        }
    }

    useEffect(() => {
        setIsChecked(new Array(list.length).fill(allChecked));
    }, [list, allChecked])

    useEffect(() => {
        axios.get("/api/sellercenter/getorderlist", {
            params: {
                marketName: "아이유당근마켓"
            }
        }).then((res) => {
            setList(res.data);
            setIsChecked(new Array(res.data.length).fill(false));
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const showProductModal = (e,index) => {
        let data = {
            orderId: list[index]["ID"],
            postAddressId: list[index]["POSTADDRESSID"],
            orderState: list[index]["STATE"]
        }
        setModalInfo(data);
    }

    return (
        <DOV className="row">
            <div className="col-12">
                <span>목록</span>
                <span>(총 </span>
                <COUNTGREEN>2</COUNTGREEN>
                <span> 개)</span>
            </div>

            <LINE />

            <div className="col-12">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" defaultChecked={allChecked} onChange={() => setAllChecked(!allChecked)} />
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
                        {list.map((item,index) => {
                            let Istate = "";
                            switch(String(item["STATE"])){
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
                                        <input type="checkbox" checked={isChecked[index]} indexid={index} onChange={(e) => checkHandler(e)} />
                                    </td>
                                    <CLICKTD data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={(e) => showProductModal(e,index)}>{item["PRODUCTID"]}</CLICKTD>
                                    <td>{item["ID"]}</td>
                                    <td>{item["TIME"]}</td>
                                    <td>{Istate}</td>
                                    <td>{item["product_Title"]}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <ViewDetailProductInfo productInfo={modalInfo}/>
        </DOV>

    )
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

    table{
        width: 100%;
    }

    thead{
        background-color: #f5f5f5;
        width: 100%;
    }
    tbody{
        width: 100%;
        background-color: #fff;
    }
    th{
        text-align: center;
    }
    td{
        padding: 10px;
        border: 1px solid #000;
        text-align: center;
    }
`;

const CLICKTD = styled.td`
    cursor: pointer;
    
    &:hover{
        background-color: #f5f5f5;
        color: #00bfa5;
    }
`;
