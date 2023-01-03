import axios from 'axios';
import {useState, useEffect} from 'react';
import Logininformation from '../Logininformation';
import LoginInterceptor from "../LoginInterceptor";
import MypageModal from './Mypagemodal';


    const MypurChaseInquiry = () => { 
        let user_id = Logininformation();
        const [purchaselist, setPurchaseList] = useState([]);
        let iu = "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f9808bcff5cd75221317e48e817290c6b7e7900c07b3e649379dc7a57a7653a886e08ae6b2df44d7d347e8c801f2b9f15"
       
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

            const state = (item,id) => {
                if(item=== 0){
                   return "주문접수"
                }
                else if(item === 1){
                    return "결제완료"
                }
                else if(item === 2){
                    return "배송준비중"
                }
                else if(item=== 3){
                    return(   
                      <div>
                        <table style={{fontSize:"14px",textAlign:"center", height:"50px",all:"initial",marginLeft:"45px"}}>
                            <thead>
                                <tr>
                                    <th style={{paddingLeft:"19px"}} >배송중</th>
                                </tr>
                                <tr>
                                    <th><MypageModal props={id}/></th>
                                </tr> 
                            </thead>
                        </table>
                      </div>                  
                    )
                }
                else if(item=== 4){
                    return "배송완료"
                }
                else if(item=== 5){
                    return "구매확정"
                }
                else if(item === 6){
                    return "구매취소"
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
                {purchaselist.map((item) => (     
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
                       {item.totalprice}원
                     </div>   
                       {state(item.state, item.id)}                    
                </div>    
                ))}    
            </div>   
    </div>
    )

    }

    export default MypurChaseInquiry;
