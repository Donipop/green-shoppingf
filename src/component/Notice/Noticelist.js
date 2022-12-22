import axios from 'axios';
import {useState, useEffect} from 'react';
import react from 'react';
import "./Notice.css"
import { Link } from 'react-router-dom';
import NoticeView from './NoticeView';
const Notice = () => { 
const[List, setList] = useState([]); 

useEffect(() => {
axios({
method: 'get',
url: '/api/Notice',
})
.then(res => setList(res.data))
}, [])




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

</div>
)

}

export default Notice;