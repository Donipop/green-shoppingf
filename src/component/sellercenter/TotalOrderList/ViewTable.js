import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewTable(){
    const [allChecked, setAllChecked] = useState(false);
    const [isChecked, setIsChecked] = useState();
    const [list, setList] = useState([]);

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
                            return (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox" checked={isChecked[index]} indexid={index} onChange={(e) => checkHandler(e)} />
                                    </td>
                                    <td>{item["PRODUCTID"]}</td>
                                    <td>{item["ID"]}</td>
                                    <td>{item["TIME"]}</td>
                                    <td>{item["STATE"]}</td>
                                    <td>{item["product_Title"]}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
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
