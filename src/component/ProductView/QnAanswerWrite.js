import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const QnAReply = () => {
  const [List, setList] = useState([]);
  const { id } = useParams();
  const { page } = useParams();

  const [account, setAccount] = useState({
    cont: "",
    product_num: page,
    user_id: "admin",
    id: 3,
    product_name: "아이패드",
    child_id: id,
    qnatype: "1",
  });

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/QnA/reply/${page}/${id}`,
      params: { id: id, page: page },
    }).then((res) => setList(res.data));
  }, [id, page]);

  const QnaCont = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
    console.log(account);
  };

  const addadd = (e) => {
    axios({
      method: "post",
      url: "/api/view/AnswerWrite/",
      data: {
        ...account,
      },
    }).then(
      alert("답변이 등록되었습니다."),
      window.close(),
      window.opener.location.reload()
    );
  };

  return (
    <div>
      <div className="">
        <p>아이디: {List.user_id}</p>
      </div>
      <div>
        <p>질문내용: {List.cont}</p>
      </div>
      <div>
        <p>날짜: {List.regdate}</p>
      </div>
      <div>
        <p>답변</p>
      </div>
      <div className="QnAWrite2">
        <form id="Subm">
          <div className="QnAContBox">
            <textarea
              id="asd"
              className="QnAcont"
              placeholder="답변을 입력하세요."
              onChange={QnaCont}
              name="cont"
            ></textarea>
          </div>
          <a href="#!" className="add" role="button" onClick={addadd}>
            등록
          </a>
        </form>
      </div>
    </div>
  );
};

export default QnAReply;
