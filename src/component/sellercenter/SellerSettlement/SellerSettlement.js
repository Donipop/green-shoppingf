import { useEffect, useState } from "react";
import axios from "axios";
import SellerSettleup from "./SellerSettleup";
import AlreadySettlement from "./AlreadySettlement";
import SellerSettleDate from "./SellerSettleDate";

function SellerSettlement({ user }) {
  const [user_id, setuser_id] = useState("");
  const [market_namelist, setmarket_namelist] = useState([]); // 마켓 이름 리스트
  const [before_settlement, setbefore_settlement] = useState([]); // 정산전 정보
  const [totalpricemap, settotalpricemap] = useState([]); // 마켓별 가격총합
  const [modalInfo, setModalInfo] = useState([]); // 모달창 정보
  const [seller_info, setseller_info] = useState([]);
  const [before_settlement_id, setbefore_settlement_id] = useState([]); // 정산전 정보 id

  const [dateInfo, setDateInfo] = useState({
    start: "",
    end: "",
  });

  let today = new Date();
  today.setHours(today.getHours() + 9);
  let format_today = today.toISOString().replace("T", " ").substring(0, 19); // 날짜 yyyy-mm-dd hh:mm:ss

  useEffect(() => {
    if (user === undefined) {
      return;
    }
    setuser_id(user.user_id);
  }, [user]);

  useEffect(() => {
    axios({
      method: "post",
      url: "/api/sellercenter/getmarketnamelist",
      params: {
        user_id: user_id,
      },
    })
      .then((res) => res.data)
      .then((res) => {
        setmarket_namelist(res);

        for (let i = 0; i < res.length; i++) {
          axios({
            method: "post",
            url: "/api/sellercenter/getbeforesettlement",
            params: {
              user_id: user_id,
              market_name: res[i],
            },
          })
            .then((res) => res.data)
            .then((res) => {
              setbefore_settlement(res);
              for (let i = 0; i < res.length; i++) {
                before_settlement_id.push(res[i].ID);
              }
            });
        }
      });
  }, [user_id]);

  useEffect(() => {
    for (let i = 0; i < market_namelist.length; i++) {
      let totalprice = 0;
      for (let j = 0; j < before_settlement.length; j++) {
        if (market_namelist[i] === before_settlement[j].NAME) {
          totalprice += before_settlement[j].TOTALPRICE;
        }
      }
      settotalpricemap([
        { market_name: market_namelist[i], totalprice: totalprice },
      ]);
    }
  }, [before_settlement]);

  useEffect(() => {
    axios({
      method: "post",
      url: "/api/sellercenter/getsellerinfo",
      params: {
        user_id: user_id,
      },
    })
      .then((res) => res.data)
      .then((res) => {
        setseller_info(res);
      });
  }, [user_id]);

  const showProductModal = (index) => {
    let data = {
      id: before_settlement_id.toString(),
      market_name: totalpricemap[index].market_name,
      totalprice: totalpricemap[index].totalprice,
      user_id: user_id,
      allmoney: seller_info[0].ALLMONEY,
      bank_account: seller_info[0].BANK_ACCOUNT,
      bank_accountowner: seller_info[0].BANK_ACCOUNTOWNER,
      bank_name: seller_info[0].BANK_NAME,
      business_number: seller_info[0].BUSINESS_NUMBER,
      format_today: format_today,
    };
    setModalInfo(data);
  };

  return (
    <div className="w-100">
      <div className="row m-2">
        <div className="col-12">
          <div className="alert alert-secondary">
            <h6>{user_id}님의 정산신청페이지</h6>
          </div>

          <div className="alert alert-secondary">
            <h6>정산전 정보</h6>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>마켓이름</th>
                  <th>정산 전 판매금액</th>
                </tr>
              </thead>
              <tbody>
                {totalpricemap.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.market_name}</td>
                      <td>{item.totalprice}</td>
                      <td>
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={(e) => showProductModal(index)}
                        >
                          정산신청하기
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="alert alert-secondary">
            <SellerSettleDate getDate={setDateInfo} />
          </div>
          <div className="alert alert-secondary">
            <h6>이미정산된 정보</h6>
            <AlreadySettlement getDate={[dateInfo, user_id]} />
          </div>
        </div>
      </div>
      <SellerSettleup DetailInfo={modalInfo} />
    </div>
  );
}

export default SellerSettlement;
