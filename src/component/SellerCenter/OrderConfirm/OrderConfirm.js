import OrderConfirmTable from "./OrderConfirmTable";

import { useState } from "react";
import OrderConfirmDate from "./OrderConfirmDate";
import OrderConfirmModal from "./OrderConfirmModal";

function OrderConfirm({marketName}) {
  const [dateInfo, setDateInfo] = useState({
    start: "",
    end: "",
  });
  const [ModalInfo, setModalInfo] = useState([]);

  return (
    <div className="w-100">
      <div className="w-100">
        <div className="alert alert-secondary" role="alert">
          <h1>구매확정 내역</h1>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="alert alert-secondary" role="alert">
              <OrderConfirmDate getDate={setDateInfo} />
            </div>
          </div>
          <div className="col-12">
            <div className="alert alert-secondary" role="alert">
              <OrderConfirmTable
                getDate={dateInfo}
                setModalInfo={setModalInfo}
                marketName={marketName}
              />
            </div>
          </div>
        </div>
      </div>
      <OrderConfirmModal ModalInfo={ModalInfo} />
    </div>
  );
}

export default OrderConfirm;
