import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import styled from "styled-components";
import Ordersearch from "./Ordersearch";


const Orderlist = () => {
  const [info, setInfo] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [ischecked, setIschecked] = useState([]);
  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res => setInfo(res.data))
     .catch(err => console.log(err))
        
        
  }, []);
  const checkHandler = (e) => {
    if(e.target.checked){
      setCheckedItems({...checkedItems, [e.target.value]: Number(e.target.value)})
      setIschecked({...ischecked, [Number(e.target.value)+(-1)]: true});
    }else{
      console.log(e.target.value);
      setCheckedItems({...checkedItems, [e.target.value]: ''})
      setIschecked({...ischecked, [Number(e.target.value)+(-1)]: false});
    }
    
  }
  const handleSelectAll = (checked) => {
    if(checked){
      const newCheckedItems = info.map((user) => user.id);
      setCheckedItems({...checkedItems, ...newCheckedItems});
      setIschecked({...ischecked, ...newCheckedItems.map((user) => true)});
      console.log(ischecked);
    }else{
      console.log(ischecked);
      setCheckedItems([]);
      setIschecked([]);
    }
  }

  //table css


 
  return (
    <div className="container  mx-auto">
      <Ordersearch value={info}/>
      <div className='text-xl font-bold mt-5 mb-3 text-center'>고객 정보 리스트</div>
      <Table className="table-auto"  >
        
          <tr  >
            <TTTd  ><input type="checkbox" onChange={(e) => handleSelectAll(e.target.checked)} /></TTTd>
            <TTTd >Id.</TTTd>
            <TTd  >Name</TTd>
            <TTd  >Email</TTd>
            <TTTTd  >Phone No.</TTTTd>
            <TTd  >Website</TTd>
          </tr>

          {info.map((user) => ( 
          <tr key ={user.id}>
            <Td><input type="checkbox" value={user.id} checked={ischecked[user.id-1]} onChange={(e) => checkHandler(e)}/></Td>
            <Td >{user.id}</Td>  
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.phone}</Td>
            <Td>{user.website}</Td>
            
          </tr>
          
          ))}

         
</Table>

         </div>
  );
  
};

export default Orderlist;

const Td = styled.td`
    
      padding-left: 10px;
      padding-right: 10px;
      
`
const TTd = styled.td`
   padding-left: 10px;
   padding-right: 150px;
   border: 1px solid gray;
   background-color: #eaeaea;


  
`
const TTTd= styled.td`
padding-left: 8px;
      padding-right: 10px;
      border: 1px solid gray;
      background-color: #eaeaea;
      

`

const TTTTd = styled.td`
padding-right: 120px;
padding-left: 10px;
border: 1px solid gray;
background-color: #eaeaea;


`

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid gray;
  width: 100%;
  
  
    `
