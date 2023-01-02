
import OrderConfirmTable from './OrderConfirmTable';

import { useEffect, useState } from 'react';
import OrderConfirmDate from './OrderConfirmDate';

function OrderConfirm() {
    const [dateInfo, setDateInfo] = useState({
        start: "",
        end: ""
    });

    return (
        <div className="w-100">
            <div className="alert alert-secondary" role="alert">
                <h1>
                    구매확정 내역
                </h1>
            </div>
            <div className="row">
                <div className='col-12'>
                    <div className="alert alert-secondary" role="alert">
                        <OrderConfirmDate getDate={setDateInfo} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="alert alert-secondary" role="alert">
                        <OrderConfirmTable getDate={dateInfo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirm;