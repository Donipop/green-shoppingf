import React from "react";
import axios from "axios";
import { useState } from "react";

export default function UserFindId() {
  const [user_name, setuser_name] = useState("");
  const [user_tel, setuser_tel] = useState("");

  function onChangeUser_tel(e) {
    let value = e.target.value;
    let tel = value.replace(/[^0-9]/g, "");
    setuser_tel(tel);
  }

  function FindUserId(e) {
    e.preventDefault();
    let tel = user_tel.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    axios({
      method: "post",
      url: "/api/login/findId",
      params: {
        user_name: user_name,
        user_tel: tel,
      },
    }).then((res) => {
      if (res.data === "") {
        alert("이름과 전화번호를 확인해주세요.");
      } else {
        alert("아이디는 " + res.data + "입니다.");
        window.close();
      }
    });
  }

  return (
    <div>
      <h1>아이디 찾기</h1>
      <form>
        <label>이름 :</label>
        <input
          type="text"
          name="name"
          placeholder="성함을 입력해주세요."
          value={user_name}
          onChange={(e) => setuser_name(e.target.value)}
        />
        <br />
        <label>전화번호 :</label>
        <input
          type="text"
          name="tel"
          placeholder="전화번호를 입력해주세요."
          value={user_tel}
          onChange={(e) => onChangeUser_tel(e)}
          maxLength="11"
        />
        <br />
        <button onClick={(e) => FindUserId(e)}>아이디 찾기</button>
      </form>
    </div>
  );
}
