import ViewDate from "./ViewDate";
import ViewTable from "./ViewTable";
import { useState } from "react";

function TotalOrderList({ marketName }) {
  const [dateInfo, setDateInfo] = useState({
    start: "",
    end: "",
  });
  return (
    <div className="w-100">
      <div className="row m-2">
        <div className="col-12">
          <div className="alert alert-secondary">
            <h6>
              스마트스토어의 모든 주문건을 조회할 수 있는 통합 주문조회
              기능입니다.
            </h6>
          </div>

          <div className="alert alert-secondary">
            <ViewDate getDate={setDateInfo} />
          </div>

          <div className="alert alert-secondary">
            <ViewTable getDate={dateInfo} marketName={marketName} />
          </div>

          <div className="alert alert-secondary"></div>
        </div>
      </div>
    </div>
  );
}

export default TotalOrderList;
