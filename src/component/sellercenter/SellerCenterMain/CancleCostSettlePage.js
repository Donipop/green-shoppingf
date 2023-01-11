import axios from "axios"
import styled from "styled-components"
import "./SellerCenterMaincss.css"
import {useEffect, useState} from "react"

const CancleCostSettlePage = () => {
    const [List, setList] = useState({
        count : 0,
        beforeSettleSum: 0,
        afterSettleSum: 0,
    });

    

    useEffect(() => {
        axios({
            method: 'get',
            url: '/api/sellercenter/canclecostsettle',
            params: {
                id: 'admin'
            },
            })
            .then(res => setList({...List,
                 count: res.data[0].count,
                 beforeSettleSum: res.data[0].beforeSettleSum,
                 afterSettleSum: res.data[0].afterSettleSum
            }))
    }, [])





    return(
        <div className="OrderDeliveryPage" style={{width:"1200px"}}>
            <div className="PannelHeader">
                <div style={{padding:"0 25px", borderBottom:"1px solid #e2e6ee"}}>
                    <h3 className="pannel-title">클레임/정산</h3>
                </div>
                <div className="ordercontainer">
                    <div style={{paddingLeft:"25px", paddingRight:"25px",width:"49%"}}>
                        <div>
                            <div style={{position:"relative",height:"0px"}}>
                                <Span style={{backgroundColor:"#69c6ce"}}>
                                    <i className="seller-icon icon-return"></i>
                                </Span> 
                            </div>
                            <Ul>
                                <Li>
                                    <SPan>
                                        취소요청
                                    </SPan>
                                    <span style={{float: "right"}}>
                                     <A style={{color:"#69c6ce"}}>0</A>
                                     <span className="spangun">건</span>   
                                    </span>
                                </Li>
                            </Ul>
                                
                        </div>
                    </div>
                    <div className="deliverycontainer">
                        <div style={{position:"relative",height:"0px"}}>
                            <Span style={{backgroundColor:"#628ca6"}}>
                                <i className="seller-icon icon-cost"></i>
                            </Span> 
                       </div>
                        <Ul>
                            <Li>
                                <SPan>
                                    구매확정
                                </SPan>
                                <span style={{float: "right"}}>
                                    <A style={{color:"#628ca6"}}>{List.count}</A>
                                    <span className="spangun">건</span>   
                                </span>
                            </Li>
                            <Li>
                            <SPan>
                                    정산예정
                                </SPan>
                                <span style={{float: "right"}}>
                                    <A style={{color:"#628ca6"}}>{(List.beforeSettleSum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</A>
                                    <span className="spangun">원</span>   
                                </span>
                            </Li>
                            <Li>
                            <SPan>
                                    정산금액
                                </SPan>
                                <span style={{float: "right"}}>
                                    <A style={{color:"#628ca6"}}>{(List.afterSettleSum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</A>
                                    <span className="spangun">원</span>   
                                </span>
                            </Li>
                        </Ul>

                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default CancleCostSettlePage

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


