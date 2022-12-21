import axios from "axios";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";


const NoticeView = () => {

    const {id} = useParams();
    const [List, setList] = useState([]);
    console.log(id);
    //게시글 불러오기
    useEffect(() => {
        axios({
            method: 'get',
            url: '/api/NoticeDetail/'+id,
            data: {id:id}
        })
        .then(res => setList(res.data))
    }, [])

    


    return (
        <div>
            <div style={{textAlign:"center",fontSize:"30px", fontWeight:"700"}}>공지사항</div>
            <div style={{textAlign:"center", marginBottom:"80px"}}>
                <p style={{fontSize:"15px", fontWeight:"400",color:"#999999"}}>짭팡의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요</p></div>
            <div style={{width:"1000px",borderTop:"2px solid black",borderBottom:"1px solid #ececec", marginLeft:"300px",display:"flex"}}>
            <div style={{width:"130px", height:"50px",padding:"13px 0px 13px 20px",background:"#F7F5F8",fontSize:"14px",fontWeight:"500"}}>제목</div>
            <div style={{boxSizing:"border-box",paddingLeft:"25px",marginTop:"10px" ,textAlign:"center"}}>{List.title}</div>
        </div>
        <div style={{width:"1000px",borderBottom:"1px solid #ececec", marginLeft:"300px",display:"flex"}}>
            <div style={{width:"130px", height:"50px",padding:"13px 0px 13px 20px",background:"#F7F5F8",fontWeight:"500"}}>작성자</div>
            <div style={{boxSizing:"border-box",paddingLeft:"25px",marginTop:"10px" ,textAlign:"center"}}>{List.user_nick}</div>
        </div>
        <div style={{width:"1000px",borderBottom:"1px solid #ececec", marginLeft:"300px",display:"flex"}}>
            <div style={{width:"130px", height:"50px",padding:"13px 0px 13px 20px",background:"#F7F5F8",fontWeight:"500"}}>작성일</div>
            <div style={{boxSizing:"border-box",paddingLeft:"25px",marginTop:"10px" ,textAlign:"center"}}>{List.indate}</div>
        </div>
        <div style={{marginLeft:"300px", marginTop:"30px"}}>
         
         {List.cont}

        </div>

        </div>
    );
    }

export default NoticeView;