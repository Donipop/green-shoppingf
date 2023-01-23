import axios from 'axios';
import {useState, useEffect} from 'react';
import Logininformation from '../Logininformation';
import MypageModal from './Mypagemodal';


    const MypurChaseInquiry = () => { 
        let user_id = Logininformation();
        const [purchaselist, setPurchaseList] = useState([]);
        
        let iu = "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f9808bcff5cd75221317e48e817290c6b7e7900c07b3e649379dc7a57a7653a886e08ae6b2df44d7d347e8c801f2b9f15"
        const [checked, setChecked] = useState({
            id: -1
        });

        const openModal = (e,index) => {
            setChecked({id: index})
        }
       
        useEffect(() => {
            axios({
            method: 'get',
            url: `/api/mypage/MyPurchaseInquiry`,
            params: {
            user_id: user_id
            }
            })
            .then((res) => {
                setPurchaseList(res.data)
            })
            }, [user_id])

        const nullcheck = () => {
            if(purchaselist.length === 0){
                return (
                    <div style={{textAlign:"center",marginTop:"20px",marginBottom:"20px",width:"1270px"}}>
                        <h2 style={{fontWeight:400}}>구매내역이 업읍니다</h2>
                    </div>
                ) 
            }
        }


    return(
    <div >
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
                    
                    <div style={{padding:"10px"}}><img src={iu} width='80' height='80'></img></div>
                     <div style={{width:"355px"}}>
                             아이유가 입을뻔한 후드티 
                     </div>
                     <div style={{color:"#aaa", fontSize:"14px", width:"180px", textAlign:"center"}}>
                       {item.time}
                     </div>
                     <div style={{ fontSize:"14px",width:"180px", textAlign:"center"}}>
                       {item.id}
                     </div>
                     <div style={{fontSize:"14px", width:"180px", textAlign:"center"}}>
                       {(item.totalprice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
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
                        "결제완료"
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
                                        <button role="button" onClick={e => {openModal(e,index)}} className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{border:"1px solid #e5e5e5", fontSize:"14px", fontWeight:"bold",borderRadius:"0px"}}>
                                        배송조회
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
                        "구매취소"
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
