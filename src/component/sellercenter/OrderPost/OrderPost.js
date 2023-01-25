import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

function OrderPost({ marketName }) {
  const [allChecked, setAllChecked] = useState(false);
  const [isChecked, setIsChecked] = useState();
  const [list, setList] = useState([]);
  const [postInfo, setPostInfo] = useState(new Map());

  const checkHandler = (e) => {
    const { checked } = e.target;
    let key = e.target.attributes.indexid.value;
    if (checked) {
      setIsChecked({ ...isChecked, [key]: true });
    } else {
      setIsChecked({ ...isChecked, [key]: false });
    }
  };

  useEffect(() => {
    setIsChecked(new Array(list.length).fill(allChecked));
  }, [list, allChecked]);

  useEffect(() => {
    if (marketName === undefined) {
      return;
    }
    axios
      .get("/api/sellercenter/getorderlist", {
        params: {
          marketName: marketName,
        },
      })
      .then((res) => {
        console.log(res.data);
        setList(res.data);
        setIsChecked(new Array(res.data.length).fill(false));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [marketName]);

  const onClickPost = () => {
    let postList = [];

    for (let i = 0; i < list.length; i++) {
      if (isChecked[i]) {
        //있으면 postInfo에 있는거 넣어주기
        postList.push(postInfo.get(list[i]["ID"]));
      }
    }
    if (postList.length === 0) {
      alert("배송처리할 주문을 선택해주세요.");
      return;
    }
    axios
      .post("/api/sellercenter/insertpostinfo", {
        RepostList: postList,
      })
      .then((res) => {
        alert("배송정보가 등록되었습니다.");
        //window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangePostNum = (e, index) => {
    let data = {
      invoiceNum: "",
      companyName: "0",
      purchaseNum: 0,
    };
    if (postInfo.has(list[index]["ID"])) {
      data.companyName = postInfo.get(list[index]["ID"])["companyName"];
    }
    data.invoiceNum = e.target.value;
    data.purchaseNum = list[index]["ID"];
    setPostInfo(postInfo.set(list[index]["ID"], data));
  };

  const onChangePostCompany = (e, index) => {
    let data = {
      invoiceNum: "",
      companyName: "0",
      purchaseNum: "",
    };
    if (postInfo.has(list[index]["ID"])) {
      data.invoiceNum = postInfo.get(list[index]["ID"])["invoiceNum"];
    }
    data.companyName = e.target.value;
    data.purchaseNum = list[index]["ID"];
    setPostInfo(postInfo.set(list[index]["ID"], data));
  };
  return (
    <DOV className="row">
      <div className="col-12">
        <div className="alert alert-secondary" role="alert">
          <h4 className="alert-heading">배송처리</h4>
          <p>배송처리할 주문을 선택해주세요.</p>
        </div>

        <div className="alert alert-secondary" role="alert">
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    defaultChecked={allChecked}
                    onChange={() => setAllChecked(!allChecked)}
                  />
                  선택
                </th>
                <th>택배사</th>
                <th>송장번호</th>
                <th>주문번호</th>
                <th>주문일시</th>
                <th>주문상태</th>
                <th>상품명</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => {
                let Istate = "";
                switch (String(item["STATE"])) {
                  case "0":
                    Istate = "주문접수";
                    break;
                  case "1":
                    Istate = "결제완료";
                    break;
                  case "2":
                    Istate = "배송준비중";
                    break;
                  case "3":
                    Istate = "배송중";
                    break;
                  case "4":
                    Istate = "배송완료";
                    break;
                  case "5":
                    Istate = "구매확정";
                    break;
                  case "6":
                    Istate = "구매취소";
                    break;
                  default:
                    Istate = "주문접수";
                    break;
                }
                if (Istate === "배송준비중" || Istate === "결제완료") {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          checked={isChecked[index]}
                          indexid={index}
                          onChange={(e) => checkHandler(e)}
                        />
                      </td>
                      <td>
                        <select onChange={(e) => onChangePostCompany(e, index)}>
                          <option value={0}>롯데택배</option>
                          <option value={1}>우체국택배</option>
                          <option value={2}>한진택배</option>
                          <option value={3}>CJ대한통운</option>
                          <option value={4}>KGB택배</option>
                          <option value={5}>로젠택배</option>
                          <option value={6}>천일택배</option>
                          <option value={7}>일양로지스</option>
                          <option value={8}>경동택배</option>
                          <option value={9}>한의사랑택배</option>
                          <option value={10}>합동택배</option>
                          <option value={11}>건영택배</option>
                          <option value={12}>경동인터내셔날</option>
                          <option value={13}>경동택배</option>
                          <option value={14}>고속택배</option>
                          <option value={15}>굿투럭</option>
                          <option value={16}>대신택배</option>
                          <option value={17}>대한통운</option>
                          <option value={18}>동부택배</option>
                        </select>
                      </td>

                      <td>
                        <input
                          type="text"
                          onChange={(e) => onChangePostNum(e, index)}
                        />
                      </td>
                      <td>{item["ID"]}</td>
                      <td>{item["TIME"]}</td>
                      <td>{Istate}</td>
                      <td>{item["product_Title"]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" onClick={onClickPost}>
            선택한 주문 배송처리
          </button>
        </div>
      </div>
    </DOV>
  );
}

export default OrderPost;

const DOV = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  display: block;

  table {
    width: 100%;
  }

  thead {
    background-color: #f5f5f5;
    width: 100%;
  }
  tbody {
    width: 100%;
    background-color: #fff;
  }
  th {
    text-align: center;
  }
  td {
    padding: 10px;
    border: 1px solid #000;
    text-align: center;
  }
`;

const CLICKTD = styled.td`
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    color: #00bfa5;
  }
`;
