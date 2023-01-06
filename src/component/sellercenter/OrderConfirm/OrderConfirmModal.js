import axios from "axios"
import { Modal } from "bootstrap";
import { useEffect, useState } from "react"
import styled from "styled-components"

function OrderConfirmModal({ModalInfo}) {
    const [ModalData, setModalData] = useState([]);
    const [TOTALPRICE, setTOTALPRICE] = useState(0);
    
    useEffect(() => {
        if(ModalInfo.ID === undefined) return;
        axios.get('/api/sellercenter/getorderconfirmmodal',{
            params: {
                purchaseId: parseInt(ModalInfo.ID)
            }
        })
        .then(res => {
            //console.log(res.data);
            setModalData(res.data);
            let total = 0;
            res.data.map((data) => {
                return total += (parseInt(data.PRICE) - parseInt(data.SALE)) * parseInt(data.COUNT);
            })
            setTOTALPRICE(total);
        })
        .catch(err => {
            console.log(err);
        })

        
    }, [ModalInfo.ID])
    return(
        <DOV className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true" tabIndex={"-1"}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">주문번호({ModalInfo.ID}) 상세내역</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <table>
                            <thead>
                                <tr>
                                    <th>제품명</th>
                                    <th>가격</th>
                                    <th>개수</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ModalData.map((data, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{data.PRODUCTNAME}</td>
                                            <td>{(parseInt(data.PRICE) - parseInt(data.SALE)) * parseInt(data.COUNT)}</td>
                                            <td>{data.COUNT}</td>
                                        </tr>
                                    )
                                })}
                                {/* total가격 */}
                                <tr>
                                    <td colSpan={2}>총 가격</td>
                                    <td>{TOTALPRICE}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">확인</button>
                    </div>
                </div>
            </div>
        </DOV>
    )
    
}

export default OrderConfirmModal

const DOV = styled.div`
    z-index: 9999999999999;

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
`