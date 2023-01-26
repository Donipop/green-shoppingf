import { useEffect } from "react";
import { useState } from "react";
import SalesViewDate from "./SalesViewDate";
import SalesViewTable from "./SalesViewTable";

function SalesManageMent({ user }) {
  let user_id = user.user_id;
  let date = new Date(); 
  let year = date.getFullYear(); 
  let month = date.getMonth() + 1;
  if (month === 1) {
    year = year - 1;
    month = 12;
  } else if (2 <= month && month <= 9) {
    month = "0" + month;
  }
  let date2 = new Date(year, month, 0).getDate();
  let lastday = `${year}-${month}-${date2}`; 
  let monthbefore = `${year}-${month}-01`; 

  const [dateInfo, setDateInfo] = useState({
    start: monthbefore,
    end: lastday,
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
