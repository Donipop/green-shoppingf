import axios from 'axios';
import {useState, useEffect} from 'react';
import react from 'react';
import "./Notice.css"
import { Link, Navigate } from 'react-router-dom';
import NoticeView from './NoticeView';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';


    const Notice = () => { 
    
    var user_grade = 0;
    let login_information = sessionStorage.getItem("login")
    login_information = JSON.parse(login_information);
    

    
    const[List, setList] = useState([]); 

    useEffect(() => {
        axios({
        method: 'get',
        url: '/api/Notice',
        })
        .then(res => setList(res.data))
        
        if( login_information != null) {
            user_grade = login_information.user_grade
        }

        


        }, [])
    
    function write() {
        if( user_grade == 9){
            Navigate("/write_notice")
        }
        else if( user_grade != 9) {
            alert("공지사항은 관리자만 글쓰기를 할 수 있습니다.")
        }
    }
    


    return(
        <div>
    <h3 id= "TEST" style={{marginBottom:"25px"}}>공지사항</h3>
    <table>
        <tbody>
        <tr>
            <th style={{width:"300px", borderTop:"3px solid gray", borderBottom:"2px solid gray", paddingBottom:"15px", paddingTop:"15px", paddingLeft:"10px"}}>번호</th>
            <th style={{width:"300px", borderTop:"3px solid gray", borderBottom:"2px solid gray"}}>제목</th>
            <th style={{width:"70px", borderTop:"3px solid gray", borderBottom:"2px solid gray"}}>작성자</th>
            <th style={{width:"150px", borderTop:"3px solid gray", borderBottom:"2px solid gray", paddingLeft:"80px"}}>작성일</th>

        </tr>
        </tbody>
    </table>
    <table>
        <tbody>
    {List.map((List => (
    <tr key={List.id}>
            <td style={{width:"100px", paddingLeft:"10px", borderBottom:"1px solid #e9ecef", paddingBottom:"10px", paddingTop:"10px"}} >{List.id}</td>
            <td style={ {width:"500px", borderBottom:"1px solid #e9ecef"}} ><Link to={"/NoticeDetail/"+ List.id}>{List.title}</Link></td>
            <td style={{borderBottom:"1px solid #e9ecef"}} >{List.user_nick}</td>
            <td style={{borderBottom:"1px solid #e9ecef",  paddingLeft:"80px"}} >{List.indate}</td>

        </tr>

        )))} 
        </tbody>
        </table>
        <button id="write_button" onClick={write}>버튼</button>
    </div>
    )

    }

    export default Notice;