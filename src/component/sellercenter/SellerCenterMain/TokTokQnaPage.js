import styled  from "styled-components"
import axios from "axios"
import { useEffect,useState } from "react"
import ReactApexChart from "react-apexcharts"; 


const TokTokQnaPage = () => {
    const [chatList, setChatList] = useState([])
    useEffect(() => {
        axios.get("/api/chat/getChatList",
        {
            params: {
                marketOwner: "admin2"
            }
        })
        .then(res => {
            console.log(res.data)
            for(let i = 0; i < res.data.length; i++){
                let leng = res.data[i].chatList.length;
                let data = {
                    id: res.data[i].chatList[leng-1].sender,
                    lastMessage: res.data[i].chatList[leng-1].message,
                    uuid: res.data[i].uuid
                }
                setChatList((chatList) => [...chatList, data]);
            }
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <div className="OrderDeliveryPage" style={{width:"400px",height:"340px"}}>
            <div style={{border:"1px solid #dbdde2",width:"99%",height:"100%"}}>
                <div style={{padding:"0 25px",borderBottom:"1px solid #e2e6ee"}}>
                    <h3 style={{fontSize:"15px",lineHeight:"52px",color:"#303236",fontWeight:"600"}}>톡톡문의</h3>
                </div>
                <div style={{height:"270px",overflow: "auto"}}>
                <ol className="list-group list-group-numbered">
                    {chatList.map((item,index) =>{
                        return (
                            <a href={`/ct/${item.uuid}?id=admin2`} key={index} style={{textDecoration: "none"}} target="_blank">
                                <li className="list-group-item d-flex justify-content-between align-items-start" >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{item.id}</div>
                                        {item.lastMessage}
                                    </div>
                                    <span className="badge bg-primary rounded-pill">999</span>
                                </li>
                            </a>
                        )
                    })}
                    
                </ol>
                </div>
                
            </div>
        </div>
    )

}

export default TokTokQnaPage


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
text-decoration: none;`
