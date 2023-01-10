import axios from "axios"
import { useEffect,useState } from "react"
import styled from "styled-components"



const NoticePage = () => {
const [notice, setNotice] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: `/api/Notice`,
        })
        .then((res) => {
            setNotice(res.data)
        }
        )
    }, [])
   
    // notice.title 길면 ...으로 표시




    return(
        <div className="OrderDeliveryPage" style={{width:"400px",height:"340px"}}>
            <div style={{border:"1px solid #dbdde2",width:"99%",height:"100%"}}>
                <div style={{padding:"0 25px",borderBottom:"1px solid #e2e6ee"}}>
                    <h3 style={{fontSize:"15px",lineHeight:"52px",color:"#303236",fontWeight:"600"}}>공지사항</h3>
                </div>
                <div>
                    <Ul>
                        {notice.map((notice) => (
                            <li style={{display:"block"}}key={notice.id}>
                                <div style={{display:"flex"}}>
                                <A href={notice.link}>{notice.title}
                                </A>
                                <Span style={{float:"right",paddingTop:"4px"}}>{(notice.indate).slice(5)}</Span>
                                </div>

                            </li>
                        ))}
                    </Ul>

                </div>
            </div>
        </div>
    )
}

export default NoticePage

const Ul = styled.ul`
list-style: none;
margin-top: 15px;
padding-left: 25px;
padding-right: 25px;
display: block;


`

const Span = styled.span`
color: #767a83;
font-size: 13px;
text-decoration: none;
`

const A = styled.a`
white-space : nowrap;
overflow : hidden;
text-overflow : ellipsis;
text-decoration: none;
color: #303236;
display: block;
height: 20px;
width: 300px;
`
