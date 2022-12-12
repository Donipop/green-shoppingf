import {useState, useEffect, useLayoutEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Dropdown} from "react-bootstrap";
import axios from 'axios';




const Ordersearch = (props) => {
    const [btnClicked, setBtnClicked] = useState("3일");
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [List, setList] = useState([]);
    const DateFilterData = [
        {
          id: 1,
          value: "오늘",
        },
        {
          id: 2,
          value: "3일",
        },
        {
          id: 3,
          value: "1주일",
        },
        {
          id: 4,
          value: "1개월",
        },
        {
          id: 5,
          value: "3개월",
        },
      ];
      
    // 날짜 버튼 클릭, 기간 변경 기능
  const handleBtnClicked = (e) => {
    const { value } = e.target;
    setBtnClicked(value);
    const currentDate = new Date();
   
    // 오늘 날짜
    if (value === "오늘") {
      setStartDate(new Date());
      setEndDate(new Date());
    }
    // 3일 전부터 오늘까지의 기간
    if (value === "3일") {
      let threeDaysAgo = new Date(
        currentDate.getTime() - 3 * 24 * 60 * 60 * 1000
      );
      setStartDate(threeDaysAgo);
      setEndDate(new Date());
    }
    // 1주일 전부터 오늘까지의 기간
    if (value === "1주일") {
      let weekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      setStartDate(weekAgo);
      setEndDate(new Date());
    }
    // 1개월 전부터 오늘까지의 기간
    if (value === "1개월") {
      let oneMonthAgo = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        new Date().getDate()
      );
      setStartDate(oneMonthAgo);
      setEndDate(new Date());
    }
    // 3개월 전부터 오늘까지의 기간
    if (value === "3개월") {
      let threeMonthAgo = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 3,
        new Date().getDate()
      );
      setStartDate(threeMonthAgo);
      setEndDate(new Date());
    }
  };

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search)
  };

  const onSearch = (e) => {
    e.preventDefault(); 
    if(search === null || search === ""){
    e.preventDefault(); 
      alert("검색어를 입력해주세요.")
  } {
    const data = List.filter((row) => row.includes(search));
    setList(data)
    
}
    
}



useEffect(() => {
  if (props.value.length === 0) {
    return;
  }
  {props.value.map((user) => ( 
     List.push(user.name) ,
     setList(List)
    ))}
},[props])

console.log({List})

const items = props.value.map(data => {
return (
<div>
  <ul>
  <li>
  <span>{data.id}</span>
  <span>{data.name}</span>
  <span>{data.website}</span>
  </li>

  </ul>
</div>

)

})


 
    
  return (
    <div>  
        <Table>
          조회기간
      
  <select className="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">결제일</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
            
  {DateFilterData.map((el, idx) => (
  <input 
      className="btn btn-outline-secondary"
      onClick={handleBtnClicked}
      key={idx}
      type="button" 
      value={el.value}/>
    ))}
  <td><StartDate
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      selectsStart
      startDate={startDate}
      dateFormat="yyyy-MM-dd"
      endDate={endDate} /></td>
  <span>~</span>
  <td><EndDate
      selected={endDate}
      onChange={(date) => setEndDate(date)}
      selectsEnd
      startDate={startDate}
      dateFormat="yyyy-MM-dd"
      endDate={endDate}
      minDate={startDate}/></td>
  <select className="custom-select"  >
      <option selected>전체</option>
      <option value="1">수취인명</option>
      <option value="Name">구매자명</option>
      <option value="3">구매자연락처</option>
      <option value="4">구매자ID</option>
      <option value="5">주문번호</option>
      <option value="6">상품주문번호</option>
      <option value="7">상품번호</option>
      <option value="8">송장번호</option>
  </select>
  

  <Div>
  <form onSubmit={e => onSearch(e)}>
      

      <td><input className="form-control" type="text" value={search} onChange={onChangeSearch}  /></td>
      
      <button type="submit" class="btn btn-success" style={{display:"inline-block"}}>검색</button>
  </form>

  </Div> 
  
  <p id="dd">{items}</p>

  </Table>
      
  </div>
    
    

  )
}
export default Ordersearch;

  
 // styled.component 부분
 const SimpleDateBtn = styled.div`
 `;
 

const StartDate = styled(DatePicker)`
  border: 1px solid #e5e5e5;
  border-radius: 3px 0 0 3px;
  text-align: center;
  line-height: 1.42857143;
  font-size: 14px;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #999999;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  }
`;

const EndDate = styled(StartDate)`
  border-radius: 0 3px 3px 0;
`;

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid gray;
  width: 100%;
  `;

  const Div = styled.div`
  text-align: center;
  `