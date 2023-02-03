import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



const SellerSignup = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    business_number: "",
    market_name: "",
  });

  const onChangeAccount = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value })
  }
  const onChangeMarketName = (e) => {
    if(e.target.value.length > 15){
      alert("15자리 이하로 입력해주세요")
      return;
  }

  setAccount({ ...account, [e.target.name]: e.target.value });    
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (account.business_number === "") {
      alert("사업자등록번호를 입력하세요");
      return;
    }
    if (account.market_name === "") {
      alert("마켓이름을 입력하세요");
      return;
    }

    if(account.business_number.length !== 10){
      alert("사업자등록번호를 정확히 입력하세요");
      return;
    }
    navigate("/mypage/SellerSignupDetail", { state: account });
  };

  return (
    //signup form
    <div className="" style={{marginTop:"40px"}}>
      <div className="row">
        <div className="">
          <form noValidate onSubmit={onSubmit}>
            <h1 className="" style={{fontSize:"30px"}}>판매자 회원가입</h1>
            <div className="form-group">
              <label htmlFor="username">사업자등록번호</label>
              <Input
                onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                }}
                onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                type="number"
                className="form-control"
                name="business_number"
                placeholder="사업자등록번호를 입력하세요"
                onChange={onChangeAccount}
                style={{ width: "300px"}}
                maxLength={10}
                min={0}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tel">마켓이름</label>
              <input
                type="text"
                className="form-control"
                name="market_name"
                placeholder="마켓이름을 입력하세요"
                onChange={onChangeMarketName}
                maxLength={15}
              />
            </div>
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              다음
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerSignup;

const Input = styled.input`
  ::-webkit-inner-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
  }
  ::-webkit-outer-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
  }  
`;
