import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { FaStar } from "react-icons/fa";
import Pagination from "./Pagination";
import Modal from "./Modal";
import ReviewUpdate from "./ReviewUpdate";

const ReviewList = ({ page, user }) => {
  const [List, setList] = useState([]);
  const array = [0, 1, 2, 3, 4];
  const [limit, setLimit] = useState(10);
  const [paging, setPaging] = useState(1);
  const offset = (paging - 1) * limit;
  const refref = useRef();
  const [ischecked, setIschecked] = useState([]);
  const [checked, setChecked] = useState({
    Select: Array(List.length).fill(false),
  });

  const openModal = (e, index) => {
    const newArr = Array(List.length).fill(false);
    newArr[index] = true;
    setChecked({
      Select: newArr,
    });
  };
  const closeModal = () => {
    setChecked({ Select: false });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/view/review/${page}`,
    }).then((res) => {
      setList(res.data);
      setIschecked(new Array(res.data.length).fill(false));
    });
  }, [page]);

  const StarList = (star) => {
    return (
      <div>
        {array.map((item) => (
          <FaStar
            key={item}
            size={15}
            color={star > item ? "#fcc419" : "gray"}
          />
        ))}
      </div>
    );
  };

  const truecheck = (e) => {
    const { checked } = e.target;
    let key = e.target.attributes.indexid.value;
    console.log(checked);
    if (!checked) {
      setIschecked({ ...ischecked, [key]: true });
      document.getElementById(`collapseExample${e.target.id}`).style =
        "display:block";
    } else {
      setIschecked({ ...ischecked, [key]: false });
      document.getElementById(`collapseExample${e.target.id}`).style =
        "display:none";
    }
  };
  const Delete = (e, index) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios({
        method: "post",
        url: `/api/view/review/delete/${e.target.id}/${page}`,
        data: { id: e.target.id, product_num: page },
      }).then(() => {
        alert("삭제되었습니다.");
        window.location.reload();
      });
    } else {
      return false;
    }
  };

  const Noexsits = () => {
    if (List.length === 0) {
      return (
        <div style={{ padding: "30px", textAlign: "center" }}>
          등록된 리뷰가 없습니다.
        </div>
      );
    }
  };

  const SecretUser_id = (props) => {
    let str = props;
    let first = str.substr(0, str.length - 3);
    let result = first + "***";
    return result;
  };

  return (
    <div>
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
      {List.slice(offset, offset + limit).map((item, index) => {
        return (
          <div
            key={item.id}
            className="review_wrap"
            style={{ borderBottom: "1px solid #ccc" }}
          >
            <div className="review_wrap_title">
              <div>
                <strong className="Strong">
                  {SecretUser_id(item.user_id)}
                </strong>
              </div>
              <div style={{ display: "flex" }}>
                {StarList(item.star)}
                <div style={{ fontSize: "12px", paddingTop: "3px" }}>
                  {item.regdate}
                </div>
                <a
                  href="#!"
                  role="button"
                  onClick={(e) => openModal(e, index)}
                  style={{
                    paddingLeft: "4px",
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                >
                  수정
                </a>
                <Modal
                  close={closeModal}
                  header="상품평 수정하기"
                  check={checked.Select[index]}
                >
                  <ReviewUpdate id={item.id} page={item.product_num} />
                </Modal>
                <a
                  href="#!"
                  role="button"
                  id={item.id}
                  onClick={(e) => Delete(e, index)}
                  style={{
                    fontSize: "14px",
                    paddingLeft: "4px",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  삭제
                </a>
              </div>
              <div>
                <strong style={{ paddingRight: "10px" }}>한줄평</strong>
                <span className="review_wrap_title_date">{item.title}</span>
              </div>

              <div className="review_wrap_cont">
                <p>
                  <a
                    ref={refref}
                    href="#collapseExample"
                    indexid={index}
                    checked={ischecked[index]}
                    onClick={truecheck}
                    className="btn btn-light"
                    id={item.id}
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    상세후기
                  </a>
                </p>
                <div
                  className="collapse"
                  id={`collapseExample${item.id}`}
                  style={{ display: "none" }}
                >
                  <div className="card card-body">
                    <div>{item.cont}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {Noexsits()}
      <Pagination
        total={List.length}
        limit={limit}
        page={paging}
        setPage={setPaging}
      />
    </div>
  );
};

export default ReviewList;
