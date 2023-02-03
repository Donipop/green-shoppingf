import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { FaAlignCenter } from "react-icons/fa";

const QnA = ({ page, user }) => {
  const [limit, setLimit] = useState(10);
  const [paging, setPaging] = useState(1);
  const offset = (paging - 1) * limit;
  const [test, setTest] = useState([]);
  const [reply, setReply] = useState([]);
  const [marketNamecheck, setmarketNamecheck] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/view/QnA/${page}`,
    }).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        let products = {
          id: "",
          cont: "",
          qnatype: "",
          user_id: "",
          regdate: "",
          product_name: "",
          product_num: "",
        };
        if (res.data[i].qnatype === "0") {
          products.cont = res.data[i].cont;
          products.id = res.data[i].id;
          products.qnatype = res.data[i].qnatype;
          products.user_id = res.data[i].user_id;
          products.regdate = res.data[i].regdate;
          products.product_name = res.data[i].product_name;
          products.product_num = res.data[i].product_num;
          products.child_id = res.data[i].child_id;
          setTest((item) => {
            return [...item, products];
          });
        } else {
          products.cont = res.data[i].cont;
          products.id = res.data[i].id;
          products.qnatype = res.data[i].qnatype;
          products.user_id = res.data[i].user_id;
          products.regdate = res.data[i].regdate;
          products.product_name = res.data[i].product_name;
          products.product_num = res.data[i].product_num;
          products.child_id = res.data[i].child_id;
          setReply((item) => {
            return [...item, products];
          });
        }
      }
    });
  }, [page]);

  useEffect(() => {
    if (user === undefined) {
      return;
    }

    axios({
      method: "get",
      url: `/api/view/marketcheck`,
      params: {
        page: page,
        user_id: user.user_id,
      },
    }).then((res) => {
      setmarketNamecheck(res.data);
    });
  }, [user]);

  // 질문하기
  const QnASite = () => {
    if(user === undefined) {
      alert("로그인이 필요한 서비스입니다.");
      return;
    }
    window.open(
      `http://localhost:3000/QnA/write/${page}/${user.user_id}`,
      "_blank",
      "width=650, height=730"
    );
  };

  //답변하기
  const onsubmit = (e) => {
    e.preventDefault();
    let key = e.target.attributes.id.value;
    window.open(
      `http://localhost:3000/QnA/reply/${page}/${key}/${user.user_id}`,
      "_blank",
      "width=650, height=730"
    );
  };

  const Noexsits = () => {
    if (test.length === 0) {
      return (
        <div style={{ padding: "30px", textAlign: "center" }}>
          등록된 문의가 없습니다.
        </div>
      );
    }
  };
  const roqnfkf = (props) => {
    for (let i = 0; i < reply.length; i++) {
      if (props === reply[i].child_id) {
        return (
          <div className="reply">
            <i className="icon-reply"></i>
            <em className="replyicon">답변</em>
            <div className="reply_wrap">
              <strong className="Strong">[{reply[i].user_id}]</strong>
              <a
                href="#!"
                role="button"
                onClick={AnswerUpdate}
                indexid={i}
                id={reply[i].id}
                style={{
                  paddingLeft: "2px",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                {marketNamecheck === true && "수정"}
              </a>
              <span
                style={{
                  fontSize: "14px",
                  marginLeft: "2px",
                  marginRight: "2px",
                }}
              >
                {marketNamecheck === true && "|"}
              </span>
              <a
                href="#!"
                role="button"
                id={reply[i].id}
                onClick={answerDelete}
                style={{ fontSize: "12px", textDecoration: "none" }}
              >
                {marketNamecheck === true && "삭제"}
              </a>
              <div className="replycont">{reply[i].cont}</div>
              <div className="replydate">{reply[i].regdate}</div>
            </div>
          </div>
        );
      }
    }
  };

  const QuestionDelete = (e, index) => {
    if(user === undefined){
        alert("권한이 없습니다.")
        return;
    }
    if (user.user_id !== test[index].user_id) {
      alert("본인이 작성한 글만 삭제가 가능합니다.");
      return;
    }
    //답변이 있는지 없는지 확인
    let check = false;
    for (let i = 0; i < reply.length; i++) {
      if (Number(e.target.id) === reply[i].child_id) {
        check = true;
      }
    }
    //답변 있을 때 Delete시 "삭제된 문의입니다." 로 Update됨.
    if (check === true) {
      if (window.confirm("삭제하시겠습니까?")) {
        axios({
          method: "post",
          url: `/api/view/QnA/QuestionDelete/${page}/${e.target.id}`,
          data: {
            id: e.target.id,
            product_num: page,
          },
        }).then(() => {
          alert("삭제되었습니다.");
          window.location.reload();
        });
      } else {
        return;
      }
      //답변 없을 때 Delete시 바로 삭제 됨.
    } else {
      if (window.confirm("삭제하시겠습니까?")) {
        axios({
          method: "post",
          url: `/api/view/QnA/QuestionHardDelete/${page}/${e.target.id}`,
          data: {
            id: e.target.id,
            product_num: page,
          },
        }).then(() => {
          alert("삭제되었습니다.");
          window.location.reload();
        });
      } else {
        return;
      }
    }
  };

  const answerDelete = (e) => {
    {
      reply.map((item) => {
        if (item.id === Number(e.target.id)) {
          if (window.confirm("정말 삭제하시겠습니까?")) {
            axios({
              method: "post",
              url: `/api/view/QnA/answerDelete/${page}/${e.target.id}`,
              data: {
                id: e.target.id,
                product_num: page,
              },
            }).then(() => {
              alert("삭제되었습니다.");
              window.location.reload();
            });
          }
        }
      });
    }
  };

  const QuestionUpdate = (e, index) => {
    if(user === undefined){
        alert("권한이 없습니다")
        return;
    }
    if (user.user_id !== test[index].user_id) {
      alert("본인이 작성한 글만 수정 가능합니다.");
      return;
    }
    window.open(
      `http://localhost:3000/QnA/update/${page}/${e.target.id}`,
      "_blank",
      "width=650, height=730"
    );
  };

  const AnswerUpdate = (e) => {
    let cont = reply[e.target.attributes.indexid.value].cont;
    let child_id = reply[e.target.attributes.indexid.value].child_id;
    window.open(
      `http://localhost:3000/QnA/answerUpdate/${page}/${e.target.id}/${child_id}/${cont}`,
      "_blank",
      "width=650, height=730"
    );
  };

  //마지막 3개 ***로 바꿈.
  const SecretUser_id = (props) => {
    let str = props;
    let first = str.substr(0, str.length - 3);
    let result = first + "***";
    return result;
  };

  return (
    <div>
      <div>
        <h3>QnA</h3>
        <p className="QnAtext">
          구매하시려는 상품에 대해 궁금한 점이 있으신 경우 문의해주세요.
        </p>
      </div>
      <div>
        <div className="QnABox">
          <button className="btn btn-dark" onClick={QnASite}>
            상품 Q&A 작성하기
          </button>
          <select
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="10">10개</option>
            <option value="12">12개</option>
            <option value="20">20개</option>
            <option value="50">50개</option>
            <option value="100">100개</option>
          </select>
          <div className="answer">
            {test.slice(offset, offset + limit).map((item, index) => (
              <div key={item.id}>
                {item.qnatype === "0" && (
                  <div>
                    <form id={item.id} onSubmit={onsubmit} name="rr" value="rr">
                      <div className="answerM">
                        <div
                          className="answerList"
                          style={{ position: "relative" }}
                        >
                          <em className="answerState">질문</em>
                          <div className="answerCont">
                            {item.cont !== "삭제된 문의입니다." ? (
                              <div>
                                <strong className="author">
                                  {SecretUser_id(item.user_id)}
                                </strong>
                                <a
                                  href="#!"
                                  role="button"
                                  id={item.id}
                                  onClick={(e) => QuestionUpdate(e, index)}
                                  style={{
                                    paddingLeft: "2px",
                                    fontSize: "12px",
                                    textDecoration: "none",
                                  }}
                                >
                                  수정
                                </a>
                                <span
                                  style={{
                                    fontSize: "14px",
                                    marginLeft: "2px",
                                    marginRight: "2px",
                                  }}
                                >
                                  |
                                </span>
                                <a
                                  href="#!"
                                  role="button"
                                  id={item.id}
                                  onClick={(e) => QuestionDelete(e, index)}
                                  style={{
                                    fontSize: "12px",
                                    textDecoration: "none",
                                  }}
                                >
                                  삭제
                                </a>
                              </div>
                            ) : null}
                            <div className="Productname">
                              {item.product_name}
                            </div>
                            <div className="answercont">{item.cont}</div>
                            <div className="regdate">{item.regdate}</div>
                            <div className="Do_answer">
                              <input type="hidden" id="id" value={item.id} />
                              {marketNamecheck === true ? (
                                <button
                                  type="sumbit"
                                  className="btn btn-success btn-sm"
                                  value={item.user_id}
                                  onChange={onchange}
                                >
                                  답변하기
                                </button>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        {roqnfkf(item.id)}
                      </div>
                    </form>
                  </div>
                )}
              </div>
            ))}
            <div>
              <Pagination
                total={test.length}
                limit={limit}
                page={paging}
                setPage={setPaging}
              />
            </div>
            {Noexsits()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnA;
