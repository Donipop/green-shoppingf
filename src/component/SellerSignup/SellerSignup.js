import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SellerSignup = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    business_number: "",
    market_name: "",
  });

  const onChangeAccount = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

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
    navigate("/SellerSignup2", { state: account });
  };

  return (
    //signup form
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={onSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">회원가입</h1>
            <div className="form-group">
              <label htmlFor="username">사업자등록번호</label>
              <input
                type="text"
                className="form-control"
                name="business_number"
                placeholder="사업자등록번호를 입력하세요"
                onChange={onChangeAccount}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tel">마켓이름</label>
              <input
                type="text"
                className="form-control"
                name="market_name"
                placeholder="마켓이름을 입력하세요"
                onChange={onChangeAccount}
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
