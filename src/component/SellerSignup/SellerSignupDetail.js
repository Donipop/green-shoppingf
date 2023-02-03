import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SellerSignupDetail = ({user}) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [filename, setFilename] = useState("");
  const [filenames, setFilenames] = useState("");
  const fileinput = useRef();
  const [account, setAccount] = useState({
    bank_account: "",
    bank_accountowner: "",
    description: "",

  });
  const onChangeAccount = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };
  const selectList = [
    { value: "0", label: "은행을 선택하세요" },
    { value: "1", label: "신한은행" },
    { value: "2", label: "국민은행" },
    { value: "3", label: "우리은행" },
    { value: "4", label: "기업은행" },
    { value: "5", label: "농협은행" },
    { value: "6", label: "하나은행" },
    { value: "7", label: "SC은행" },
    { value: "8", label: "경남은행" },
    { value: "9", label: "광주은행" },
    { value: "10", label: "대구은행" },
    { value: "11", label: "부산은행" },
    { value: "12", label: "산업은행" },
    { value: "13", label: "새마을금고" },
    { value: "14", label: "수협은행" },
    { value: "15", label: "신협은행" },
    { value: "16", label: "씨티은행" },
    { value: "17", label: "우체국" },
    { value: "18", label: "전북은행" },
    { value: "19", label: "제주은행" },
    { value: "20", label: "카카오뱅크" },
    { value: "21", label: "케이뱅크" },
  ];
  const [selected, setSelected] = useState("");
  const [accountImg, setAccountImg] = useState("");
  const [mainImg, setMainImg] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const handleChangeFile = (e) => {
    if(e.target.id === "BusinessRegistrationImg"){
        let reader = new FileReader();
        reader.onload = (e) => {
          setMainImg(e.target.result);
          document.getElementById('Businesspreview').src = e.target.result;
          document.getElementById('Businesspreview').style.width = "300px";
          document.getElementById('Businesspreview').style.height = "300px";
        }
        reader.readAsDataURL(e.target.files[0]);
      }
  }
  const handleChangeFiles = (e) => {
    if(e.target.id === "AccountImg"){
      let reader = new FileReader();
      reader.onload = (e) => {
        setAccountImg(e.target.result);
        document.getElementById('Accountprview').src = e.target.result;
        document.getElementById('Accountprview').style.width = "300px";
        document.getElementById('Accountprview').style.height = "300px";
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const onSubmitt = (e) => {
    e.preventDefault();
    if (selected === "은행을 선택하세요") {
      alert("은행을 선택해주세요");
      return;
    }
    if (!account.bank_account) {
      alert("계좌번호를 입력해주세요");
      return;
    }
    if (!account.bank_accountowner) {
      alert("예금주를 입력해주세요");
      return;
    }
    if (!account.description) {
      alert("회사소개를 입력해주세요");
      return;
    }
    if(account.bank_account.length < 10 || account.bank_account.length > 14){
      alert("계좌번호를 확인해주세요");
      return;
    }
    if(filename === "" || filenames === ""){
      alert("사진을 업로드해주세요");
      return;
    } 
    axios({
      method: "post",
      url: "/api/login/sellersignup",
      data: {
        user_id: user.user_id,
        ...state,
        ...account,
        bank_name: selected,
        mainImg: mainImg,
        user_role: 1
      },
    })
      .then(alert("신청이 완료되었습니다."))
      // .then(navigate("/mypage"))
      .catch((err) => {
      });
  };

  useEffect(() => {
    setSelected(selectList[0].label);
  }, []);


  return (
    <div className="" style={{marginTop:"40px"}}>
      <div className="row">
        <div className="">
          <form onSubmit={onSubmitt}>
          <h1 className="" style={{fontSize:"30px"}}>판매자 회원가입</h1>
            <div className="form-group">
              입금은행
              <select
                className="form-control"
                onChange={handleChange}
                value={selected}
              >
                {selectList.map((item) => (
                  <option key={item.value} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="tel">계좌번호</label>
              <Input
               onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                }}
                onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                type="number"
                maxLength={15}
                className="form-control"
                placeholder="계좌번호를 입력하세요"
                name="bank_account"
                onChange={onChangeAccount}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tel">예금주</label>
              <input
                type="text"
                className="form-control"
                placeholder="이름을 입력하세요"
                name="bank_accountowner"
                onChange={onChangeAccount}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tel">사업자등록증</label>
              <div>
                <input
                  type="text"
                  value={filename}
                  placeholder="파일을 선택해주세요"
                  readOnly
                />
              </div>
              <div>
                <input
                  id="BusinessRegistrationImg"
                  type="file"
                  name="file"
                  ref={fileinput}
                  onChange={handleChangeFile}
                />
              </div>
              <img id="Businesspreview" src="" alt="" />
            </div>

            <div className="form-group">
              <label htmlFor="tel">통장사본</label>
              <div>
                <input
                  type="text"
                  value={filenames}
                  placeholder="파일을 선택해주세요"
                  readOnly
                />
              </div>
              <div>
                <input
                  id="AccountImg"
                  type="file"
                  name="file"
                  ref={fileinput}
                  onChange={handleChangeFiles}
                />
              </div>
              <img id="Accountprview" src="" alt=""></img>
            </div>
            <div className="form-group">
              <label htmlFor="tel">회사소개</label>
              <input
                type="textarea"
                className="form-control"
                placeholder="회사소개를 적어주세요"
                style={{ height: "300px" }}
                name="description"
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

export default SellerSignupDetail;

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
