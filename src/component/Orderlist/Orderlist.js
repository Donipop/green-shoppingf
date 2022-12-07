import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import styled from "styled-components";


const Orderlist = () => {
  const [info, setInfo] = useState([]);
  

//더미 데이터 호출
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res => setInfo(res.data))
     .catch(err => console.log(err))
        
        
  }, []);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkHandler = (target) => {
         setIsChecked(!isChecked)
         checkedItemHandler(target.parentNode, target.value, target.checked)
         console.log(target.target.parentElement);
         console.log(info[target.target.value-1].name)

  }
  const checkedItemHandler = (box,id, isChecked) => {
    if(isChecked){
checkedItems.add(id)
setCheckedItems(checkedItems);
box.style.backgroundColor = "#F6CB44";
    } else if(!isChecked && checkedItems.has(id)){
checkedItems.delete(id)
setCheckedItems(checkedItems)
box.style.backgroundColor='#fff';

    }
    return checkedItems

  }
  

  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className='text-xl font-bold mt-5 mb-3 text-center'>고객 정보 리스트</div>
        
          
         
         <div>
          <tr>
            <Td><input type="checkbox"></input></Td>
            <Td>Id.</Td>
            <Td>Name</Td>
            <Td>Email</Td>
            <Td>Phone No.</Td>
            <Td>Website</Td>
          </tr>
          {info.map((user) => (
          <tr>
            <Td><input type="checkbox" value={user.id} onChange={(e) => checkHandler(e)}/></Td>
            <Td>{user.id}</Td>  
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.phone}</Td>
            <Td>{user.website}</Td>
          </tr>
          ))}

          </div>
         
         
         
         </div>
  );
  
};

export default Orderlist;

const Td = styled.td`
    
      padding-left: 10px;
      padding-right: 10px;
    
`