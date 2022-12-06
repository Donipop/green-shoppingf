import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Tr,{data2} from './Tr'
import postcss from "postcss";


const Orderlist = () => {
  const [info, setInfo] = useState([]);
  const [checkItems, setCheckItems] = useState([]);

//더미 데이터 호출
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function g(res){
        let ww = [];
        for(let i=0; i<res.data.length; i++){
          let w = {
            name: [],
            id: [],
            email: [],
            phone: [],
            website: [],
            checked: true
          }
          w.id.push(res.data[i].id)
          w.email.push(res.data[i].email)
          w.name.push(res.data[i].name)
          w.phone.push(res.data[i].phone)
          w.website.push(res.data[i].website)
          ww.push(w)
        }

        setInfo(ww)
        
        // console.log(res.data)
        // data.cookie.push(res.data);
        // console.log(data.cookie);
      })
      .catch(err => console.log(err));
  }, []);

  const handleAllCheck = (checked) => {
    if (checked){
      const idArray = [];
      info.id.forEach((el) => idArray.push(el.id))
      setCheckItems(idArray);
    }
    else {
      setCheckItems([]);
    }
  }


  // console.log(data2);
  
  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className='text-xl font-bold mt-5 mb-3 text-center'>고객 정보 리스트</div>
        <thead className=''>
          <tr className=''>
            <th><input type="checkbox" onChange={(e) => handleAllCheck(e.target.checked)}  /></th>
            <th className="">Id.</th>
            <th className="">Name</th>
            <th className="">Email</th>
            <th className="">Phone No.</th>
            <th className="">Website</th>
          </tr>
        </thead>
         <Tr info={info}/> 
            </div>
  );
};

export default Orderlist;