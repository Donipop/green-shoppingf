import React from "react";
import axios from "axios";

function SellerSettleup(DetailInfo) {
  function DoSettleUp() {
    if (DetailInfo.DetailInfo.totalprice === 0) {
      alert("정산할 금액이 없습니다.");
      return;
    }

    axios({
      method: "post",
      url: "/api/sellercenter/settleup",
      data: {
        DetailInfo: DetailInfo.DetailInfo,
      },
    })
      .then((res) => res.data)
      .then((res) => {
        if (res === 1) {
          alert("정산신청이 완료되었습니다.");
          window.location.reload();
        } else {
          alert("정산신청에 실패하였습니다.");
        }
      });
  }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              신청계정주 : {DetailInfo.DetailInfo.user_id}
            </h5>
          </div>

          <div className="modal-body">
            <table>
              <tbody>
                <tr>
                  <th>은행명</th>
                  <td>{DetailInfo.DetailInfo.bank_name}</td>
                </tr>
                <tr>
                  <th>예금주</th>
                  <td>{DetailInfo.DetailInfo.bank_accountowner}</td>
                </tr>
                <tr>
                  <th>계좌번호</th>
                  <td>{DetailInfo.DetailInfo.bank_account}</td>
                </tr>
                <tr>
                  <th>사업자번호</th>
                  <td>{DetailInfo.DetailInfo.business_number}</td>
                </tr>
                <tr>
                  <th>총액</th>
                  <td>{DetailInfo.DetailInfo.totalprice}</td>
                </tr>
                <tr>
                  <th>마켓명</th>
                  <td>{DetailInfo.DetailInfo.market_name}</td>
                </tr>
                <tr>
                  <th>지금까지 정산 금액 </th>
                  <td>{DetailInfo.DetailInfo.allmoney}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="modal-footer">
            <button onClick={DoSettleUp}>정산신청하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerSettleup;
