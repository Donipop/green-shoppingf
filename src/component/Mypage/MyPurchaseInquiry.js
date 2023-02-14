import axios from 'axios';
import {useState, useEffect} from 'react';
import MypageModal from './Mypagemodal';


    const MypurChaseInquiry = ({user}) => { 
        const [purchaselist, setPurchaseList] = useState([]);
        const [checked, setChecked] = useState({
            id: -1
        });

        const openModal = (e,index) => {
            setChecked({id: index})
        }
       
        useEffect(() => {
            if(user === undefined){
                return;
            }
            axios({
            method: 'get',
            url: `/api/mypage/MyPurchaseInquiry`,
            params: {
            user_id: user.user_id
            }
            })
            .then((res) => {
                setPurchaseList(res.data)
            })
            }, [user])
            
        const nullcheck = () => {
            if(purchaselist.length === 0){
                return (
                    <div style={{textAlign:"center",marginTop:"20px",marginBottom:"20px",width:"1270px"}}>
                        <h2 style={{fontWeight:400}}>구매내역이 없습니다</h2>
                    </div>
                ) 
            }
        }

        const purchaseConfirm = (index) => {
            if (window.confirm("구매확정 하시겠습니까?")) {
            axios({
                method: 'get',
                url: `/api/mypage/MyPurchaseConfirm`,
                params: {
                purchaseid: purchaselist[index].purchaseid
                }
                })
                .then(() => {alert("구매확정이 완료되었습니다.");
                             window.location.reload()}) 
            }
        }
    return(
    <div className='MyPurchaseInquiry' style={{marginTop:"40px"}}>
        <div>
      <h2>구매내역 조회</h2>
        </div>
        <div style={{display:"flex", borderTop:"4px solid black",borderBottom:"1px solid black", width:"1270px"}}>
            <div style={{width:"457px",textAlign:"center",lineHeight:"53px"}}>
                상품정보
            </div>
            <div style={{width:"180px",textAlign:"center",lineHeight:"53px"}}>
                주문일자
            </div>
            <div style={{width:"180px",textAlign:"center",lineHeight:"53px"}}>
                주문번호
            </div>
            <div style={{width:"180px",textAlign:"center",lineHeight:"53px"}}> 
                주문금액(수량)
            </div>
            <div style={{width:"180px",textAlign:"center",lineHeight:"53px"}}>
                주문상태
            </div>
        </div>
            <div>      
                {purchaselist.map((item,index) => (
                    
                <div key ={item.id} style={{display:"flex",borderBottom:"1px solid #f5f5f5",width:"1270px",lineHeight:"100px",fontWeight:"700"}}>
                    
                    <div style={{padding:"10px"}}>
                        {item.mainimage === null ? (
                            <a href={`/view/${item.productid}`}>
                            <img  src={`http://donipop.com/img/${item.productimage}`} width='80' height='80'></img>
                            </a>
                        ) : (
                            <img  src={item.mainimage} width='80' height='80'></img>
                        )}
                        </div>
                     <div style={{width:"355px"}}>
                        <a style={{textDecoration:"none",color:"black"}}href={`/view/${item.productid}`}>
                             {item.title}
                        </a>
                     </div>
                     <div style={{color:"#aaa", fontSize:"14px", width:"180px", textAlign:"center"}}>
                       {item.time}
                     </div>
                     <div style={{ fontSize:"14px",width:"180px", textAlign:"center"}}>
                       {item.id}
                     </div>
                     <div style={{fontSize:"14px", width:"180px", textAlign:"center"}}>
                       {((item.price * item.count) - (item.sale * item.count)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원({item.count})
                     </div>
                     {item.state === 0 ? (
                         <div>
                         <table style={{fontSize:"14px",textAlign:"center", height:"50px",all:"initial",marginLeft:"45px"}}>
                             <thead>
                                 <tr>
                                     <th style={{paddingLeft:"19px"}} >주문접수</th>
                                 </tr>
                             </thead>
                         </table>
                       </div>       
                        ):(item.state === 1 ? (
                            <div>
                            <table style={{fontSize:"14px",textAlign:"center", height:"50px",all:"initial",marginLeft:"45px"}}>
                                <thead>
                                    <tr>
                                        <th style={{paddingLeft:"19px"}} >결제완료</th>
                                    </tr>
                                </thead>
                            </table>
                          </div>       
                        ):(item.state === 2 ? (
                            <div>
                            <table style={{fontSize:"14px",textAlign:"center", height:"50px",all:"initial",marginLeft:"45px"}}>
                                <thead>
                                    <tr>
                                        <th style={{paddingLeft:"19px"}} >배송준비중</th>
                                    </tr>
                                </thead>
                            </table>
                          </div>       
                        ):(item.state === 3 ? (                        
                            <div>
                            <table style={{fontSize:"14px",textAlign:"center", height:"50px",all:"initial",marginLeft:"45px"}}>
                                <thead>
                                    <tr>
                                        <th style={{paddingLeft:"19px"}} >배송중</th>
                                    </tr>
                                    <tr>
                                        <td>
                                        <button type="button" onClick={e => {openModal(e,index)}} className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{border:"1px solid #e5e5e5", fontSize:"14px", fontWeight:"bold",borderRadius:"0px"}}>
                                        배송조회
                                      </button>
                                        </td>
                                        <td>
                                        <button type="button" onClick={()=>purchaseConfirm(index)} className="btn"  style={{border:"1px solid #e5e5e5", fontSize:"14px", fontWeight:"bold",borderRadius:"0px"}}>
                                        구매확정
                                      </button>
                                        </td>
                                    
                                    </tr> 
                                </thead>
                            </table>
                          </div>        
                        ):(item.state === 4 ? (
                            <div>
                            <table style={{fontSize:"14px",textAlign:"center", height:"50px",all:"initial",marginLeft:"45px"}}>
                                <thead>
                                    <tr>
                                        <th style={{paddingLeft:"19px"}} >배송완료</th>
                                    </tr>
                                    <tr>
                                        <td>
                                    
                                        <button type="button" onClick={()=>purchaseConfirm(index)} className="btn"  style={{border:"1px solid #e5e5e5", fontSize:"14px", fontWeight:"bold",borderRadius:"0px"}}>
                                        구매확정
                                      </button>
                                      </td>
                                    </tr>
                                    
                                </thead>
                            </table>
                          </div>       
                        ):(item.state === 5 ? (
                            <div>
                            <table style={{fontSize:"14px",textAlign:"center", height:"50px",all:"initial",marginLeft:"45px"}}>
                                <thead>
                                    <tr>
                                        <th style={{paddingLeft:"19px"}} >구매확정</th>
                                    </tr>
                                </thead>
                            </table>
                          </div>       
                        ):(item.state === 6 ? (
                            <div>
                            <table style={{fontSize:"14px",textAlign:"center", height:"50px",all:"initial",marginLeft:"45px"}}>
                                <thead>
                                    <tr>
                                        <th style={{paddingLeft:"19px"}} >구매취소</th>
                                    </tr>
                                </thead>
                            </table>
                          </div>       
                        ):(null)))))))}
                </div>

                ))}    
            {nullcheck()}
            </div>   
            <MypageModal  purchaselist={purchaselist} num={checked.id}/>
    </div>
    )

    }

    export default MypurChaseInquiry;
