import {useState, useEffect, useLayoutEffect} from 'react';
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';


        


const Ordersearch = (props) => {
    const [btnClicked, setBtnClicked] = useState("3일");
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [List, setList] = useState([]);
    const [values, setValues] = useState();
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
  };

  const onSearch = (e) => {
    e.preventDefault(); 
    if(search === null || search === ""){
    e.preventDefault(); 
      alert("검색어를 입력해주세요.")
  } else if(List.includes(search)){
    e.preventDefault();

    const a = (props.value.filter((row) => row.name === search))
    setValues(a);
     
    
}
    
}



useEffect(() => {
  if (props.value.length === 0) {
    return;
  }
  //props.value.name 리스트에 저장
    const data = props.value.map((row) => row.name);
    setList(data);
},[props])
     
  return (
    <div> 
      <table>
        <tbody>
          <tr>
        <th>조회기간</th>
   <div>
  <select className="custom-select" id="inputGroupSelect01">
    <option value="0">Choose...</option>
    <option value="1">결제일</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  </div>
  <div style={{width:"300px"}}>
  {DateFilterData.map((el, idx) => ( // 오늘, 3일, 1주일, 1개월, 3개월 버튼
  <input  
      className="btn btn-outline-secondary"
      onClick={handleBtnClicked}
      key={idx}
      type="button" 
      value={el.value}/>
    ))}
      </div>
      <div style={{width:"450px"}}>
  <StartDate
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      selectsStart
      startDate={startDate}
      dateFormat="yyyy-MM-dd"
      endDate={endDate}
      />
  <em style={{marginLeft:"10px", marginRight:"10px"}}>~</em>
  <EndDate
      selected={endDate}
      onChange={(date) => setEndDate(date)}
      selectsEnd
      startDate={startDate}
      dateFormat="yyyy-MM-dd"
      endDate={endDate}
      minDate={startDate}
      style={{float:"left", width:"200px"}}
      />
      </div>
      </tr>
      <tr>
      <th style={{width:"200px"}}>상세조건</th>
  <td style={{width:"50px"}}><select className="custom-select">
      <option value="0">전체</option>
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
      <input className="form-control" type="text" value={search} onChange={onChangeSearch} style={{width:"300px"}} />
      <button type="submit" className="btn btn-success" style={{display:"inline-block"}}>검색</button>
  </form>
  
  </Div>
  </td>
  </tr>
   {JSON.stringify(values)}
   </tbody>
   </table>
  </div>

  )
}
export default Ordersearch;

  
 // styled.component 부분
 const SimpleDateBtn = styled.div`
 `;
 

const StartDate = styled(DatePicker)`
  float:left;
  width: 200px;

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
  float: left;
  `