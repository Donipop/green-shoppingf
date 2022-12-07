import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Tr,{data2} from './Tr'
import postcss from "postcss";
import { render } from "@testing-library/react";


const Orderlist = () => {
  const [info, setInfo] = useState([]);
  const [checkItems, setCheckItems] = useState([]);

  function User({user}){
   return (
     <div>
      <td><input type='checkbox'></input></td>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      
     </div>

   )

  }
//더미 데이터 호출
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res => setInfo(res.data))
     .catch(err => console.log(err))
        
        
  }, []);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const checkHandler = ({target}) => {
         setIsChecked(!isChecked)
         checkedItemHandler(target.parentNode, target.value, target.checked)
         console.log(target.parentNode)

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
    <div className="container  mx-auto">
      <div className='text-xl font-bold mt-5 mb-3 text-center'>고객 정보 리스트</div>
        <thead className=''>
            <td >Id.</td>
            <td className="">Name</td>
            <td className="">Email</td>
            <td className="">Phone No.</td>
            <td className="">Website</td>
         <tr className="bg-white border-2 border-gray-20"> 
         <div>

          {info.map((user) => (<label key = {user.id}>
            <td><input type="checkbox" value={user.id} onChange={(e) => checkHandler(e)}/></td>
            <tr>
              <td >{user.id}</td>  
              <td >{user.name}</td>
              <td >{user.email}</td>
              <td  >{user.phone}</td>
              <td >{user.website}</td>
            </tr>
            
             </label>
            
             
          ))}
             </div>

         </tr>
         </thead>
         
         </div>
  );
};

export default Orderlist;
