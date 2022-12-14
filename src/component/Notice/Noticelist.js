import axios from 'axios';
import {useState, useEffect, useLayoutEffect} from 'react';
import react from 'react';

const Notice = () => { 
const[List, setList] = useState([]); 
const Listdf = [];

useEffect(() => {
axios({
method: 'get',
url: '/api/Notice',
})
.then(res => setList(res.data))
}, [])

console.log({List})
return(
<div>
<h3 style={{marginBottom:"25px"}}>공지사항</h3>
<table>
    <tr>
        <th style={{width:"300px", borderTop:"1px solid gray", borderBottom:"1px solid gray", paddingBottom:"15px", paddingTop:"15px", paddingLeft:"10px"}}>번호</th>
        <th style={{width:"300px", borderTop:"1px solid gray", borderBottom:"1px solid gray"}}>제목</th>
        <th style={{width:"70px", borderTop:"1px solid gray", borderBottom:"1px solid gray"}}>작성자</th>
    </tr>
</table>
 {List.map((List => (
   <tr key={List.id}>
        <td style={{width:"100px", paddingLeft:"10px", borderBottom:"1px solid #f7f7f7", paddingBottom:"10px", paddingTop:"10px"}} >{List.id}</td>
        <td style={{width:"500px", borderBottom:"1px solid #f7f7f7"}} >{List.title}</td>
        <td style={{borderBottom:"1px solid #f7f7f7"}} >{List.user_nick}</td>
    </tr>
    )))} 

</div>

)

}

export default Notice;

