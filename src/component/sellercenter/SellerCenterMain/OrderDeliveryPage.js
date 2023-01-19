import axios from "axios"
import { useEffect,useState } from "react"
import styled from "styled-components"
import "./SellerCenterMaincss.css"


const OrderDeliveryPage = () => {
    const [list, setList] = useState({
        data: [0],
    });
    useEffect(() => {
         axios({
            method: 'get',
            url: '/api/sellercenter/deliverystate',
            params: {
                id: 'admin',
            },
            })
            .then(res => setList({...list,
                data: res.data
                }))
    }, [])
     //list의 값이 0,2,3,4인것만 따로 빼서 배열에 넣기
    const list0 = list.data.filter((item) => item === 0)
    const list2 = list.data.filter((item) => item === 2)
    const list3 = list.data.filter((item) => item === 3)
    const list4 = list.data.filter((item) => item === 4)
    
    console.log(list3.length)
    return(
        <div className="OrderDeliveryPage" style={{width:"1200px"}}>
            <div className="PannelHeader">
                <div style={{padding:"0 25px", borderBottom:"1px solid #e2e6ee"}}>
                    <h3 className="pannel-title">주문/배송</h3>
                </div>
                <div className="ordercontainer">
                    <div style={{paddingLeft:"25px", paddingRight:"25px",width:"49%"}}>
                        <div>
                            <div style={{position:"relative",height:"0px"}}>
                                <Span>
                                    <i className="seller-icon icon-order"></i>
                                </Span> 
                            </div>
                            <Ul>
                                <Li>
                                    <SPan>
                                        주문접수
                                    </SPan>
                                    <span style={{float: "right"}}>
                                     <A>{list0.length}</A>
                                     <span className="spangun">건</span>   
                                    </span>
                                </Li>
                            </Ul>
                                
                        </div>
                    </div>
                    <div className="deliverycontainer">
                        <div style={{position:"relative",height:"0px"}}>
                            <Span style={{backgroundColor:"#d390e6"}}>
                                <i className="seller-icon icon-delivery"></i>
                            </Span> 
                       </div>
                        <Ul>
                            <Li>
                                <SPan>
                                    배송준비
                                </SPan>
                                <span style={{float: "right"}}>
                                    <A style={{color:"#d390e6"}}>{list2.length}</A>
                                    <span className="spangun">건</span>   
                                </span>
                            </Li>
                            <Li>
                            <SPan>
                                    배송중
                                </SPan>
                                <span style={{float: "right"}}>
                                    <A style={{color:"#d390e6"}}>{list3.length}</A>
                                    <span className="spangun">건</span>   
                                </span>
                            </Li>
                            <Li>
                            <SPan>
                                    배송완료
                                </SPan>
                                <span style={{float: "right"}}>
                                    <A style={{color:"#d390e6"}}>{list4.length}</A>
                                    <span className="spangun">건</span>   
                                </span>
                            </Li>
                        </Ul>

                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default OrderDeliveryPage

const Span = styled.span`
background-color: #4dc089;
top: 0;
left: 0;
width: 42px;
height: 42px;
font-size: 24px;
display: inline-block;
line-height: 40px;
vertical-align: middle;
text-align: center;
color: #fff;
`

const Ul = styled.ul`
min-height: 99px;
padding: 3px 0 0 57px;
list-style:none;
`
const Li = styled.li`
margin-bottom: 9px;
line-height:18px;
height:21px;
`

const SPan = styled.span`
float: left;
color: #303236;
vertical-align: middle;
font-size: 15px;
`

const A = styled.a`
position: relative;
top: -1px;
font-size: 20px;
color: #4dc089;
text-decoration: none;

`


