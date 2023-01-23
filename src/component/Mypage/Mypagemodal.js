import axios from 'axios';
import { useEffect,useState } from 'react';
import './mypagemodalcss.css';







const MypageModal = (props) => {
   const [invoicenumberr, setInvoiceNumber] = useState([]);
   const {purchaselist,num} = props
   const [postlist, setPostlist] = useState([]);
   


   useEffect(() => {
    if(num === -1 ) return;
        axios({
           method: 'get',
           url: `/api/mypage/MyPurchaseInquiry/deliverytracking`,
              params: {
                invoicenumber: purchaselist[num].id
                }
        })
        .then((res) => {
        setInvoiceNumber(res.data)
        })

        }, [num])

    useEffect(() => {
        if(invoicenumberr.length !== 0 ){
            let a = invoicenumberr.content;
            let b = a.split('-')///-|\//
            setPostlist(b);
            
        }
    }, [invoicenumberr])

    useEffect(() => {
    }, [postlist])


    return (
        <div style={{all:"initial",width:"160px",marginTop:"15px"}}>
           

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalLabel" style={{fontSize:"15px",color:"#000",padding:"5px"}}>배송조회</h2>
                    <button type="button" className="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">    
                        <table style={{width:"100%"}}>
                            <thead>
                               <tr>
                                    <th className="th1">현재상태</th>
                                    <th className='th2'>구매확정</th>
                               </tr>
                               <tr>
                                    <th className='th3'>송장번호</th>
                                    <th className='th4' >{invoicenumberr.invoicenumber}</th>
                               </tr>
                            </thead>
                        </table>
                        <table className='table1'>
                            <tbody>
                                <tr>
                                    <th style={{borderBottom:"1px solid #ddd"}}>배송시간</th>
                                    <th style={{borderBottom:"1px solid #ddd"}}>현재위치</th>
                                    <th style={{borderBottom:"1px solid #ddd"}}>배송내용</th>
                                    <th style={{borderBottom:"1px solid #ddd"}}>배송업체</th>
                                </tr>
                                {postlist.map((postlist) => {
                                    return (
                                        <tr style={{borderBottom:"1px solid #ddd"}}>
                                            <td>{postlist.split(/-|\//)[0]}</td>
                                            <td>{postlist.split(/-|\//)[1]}</td>
                                            <td>{postlist.split(/-|\//)[2]}</td>
                                            <td>cj대한통운</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              
                </div>
            </div>
            </div>
        </div>   
       
    )
}

export default MypageModal