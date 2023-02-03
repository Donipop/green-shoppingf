import { useEffect } from "react";
import { useState } from "react";
import SalesViewDate from "./SalesViewDate";
import SalesViewTable from "./SalesViewTable";

function SalesManageMent({ user }) {
  let user_id = user.user_id;
  let date = new Date(); // 현재시간
  let year = date.getFullYear(); // 이번년도
  let month = date.getMonth() + 1; // 이번달
  let day = date.getDate(); // 오늘 날짜
  let alltimeago = new Date(2000, 1, 1);
  

  const [dateInfo, setDateInfo] = useState({
    start: alltimeago.getFullYear() +
    "-" +
    (alltimeago.getMonth() <= 9
      ? "0" + alltimeago.getMonth()
      : alltimeago.getMonth()) +
    "-" +
    (alltimeago.getDate() < 9
      ? "0" + alltimeago.getDate()
      : alltimeago.getDate()),
    end: year +
    "-" +
    (month <= 9 ? "0" + month : month) +
    "-" +
    (day <= 9 ? "0" + day : day),
  });
  useEffect(() => {
    if (user === undefined) {
      return;
    }

    
  }, [user]);
  return (
    <div className="w-100">
      <div className="row m-2">
        <div className="col-12">
          <div className="alert alert-secondary">
            <h6>{user_id}님의 매출현황 및 구매확정 확인</h6>
          </div>
          <div className="alert alert-secondary">
            <SalesViewDate getDate={setDateInfo} />
          </div>
          <div className="alert alert-secondary">
            <SalesViewTable getDate={[dateInfo, user_id]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesManageMent;
