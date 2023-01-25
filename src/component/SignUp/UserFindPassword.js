import axios from "axios";
import { useState } from "react";

export default function UserFindPassword() {
  const [user_id, setuser_id] = useState("");
  const [user_email, setuser_email] = useState("");

  function FindUserPassword(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: "/api/login/findPassword",
      params: {
        user_id: user_id,
        user_email: user_email,
      },
    }).then((res) => {
      if (res.data === "") {
        alert("아이디와 이메일을 확인해주세요.");
      } else {
        alert("비밀번호는 " + res.data + " 입니다.");
        window.close();
      }
    });
  }

  return (
    <div>
      <h1>비밀번호 찾기</h1>
      <form>
        <label>아이디</label>
        <input
          type="text"
          name="id"
          placeholder="아이디를 입력해주세요."
          value={user_id}
          onChange={(e) => setuser_id(e.target.value)}
        />
        <br />
        <label>이메일</label>
        <input
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요."
          value={user_email}
          onChange={(e) => setuser_email(e.target.value)}
        />
        <br />
        <button onClick={(e) => FindUserPassword(e)}>비밀번호 찾기</button>
      </form>
    </div>
  );
}
