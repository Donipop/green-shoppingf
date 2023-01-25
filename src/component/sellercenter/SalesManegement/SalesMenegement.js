import { useEffect } from "react";
import { useState } from "react";
import SalesViewDate from "./SalesViewDate";
import SalesViewTable from "./SalesViewTable";

function SalesManageMent({ user }) {
  const [user_id, setuser_id] = useState("");
  const [dateInfo, setDateInfo] = useState({
    start: "",
    end: "",
  });
  useEffect(() => {
    if (user === undefined) {
      return;
    }
    setuser_id(user.user_id);
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
