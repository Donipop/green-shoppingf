import { useEffect } from "react"

function OrderConfirmTable({getDate}) {
    useEffect(() => {
        console.log(getDate);
    }, [getDate])

    return (
        <div className="card">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>주문번호</th>
                                <th>주문일시</th>
                                <th>주문상태</th>
                                <th>상품명</th>
                                <th>구매자</th>
                                <th>구매자 연락처</th>
                                <th>구매자 주소</th>
                                <th>구매자 이메일</th>
                                <th>구매자 메모</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>주문번호누르면 모델떠서 택배 상태 보여주기</td>
                                <td>2021-07-01 00:00:00</td>
                                <td>구매확정</td>
                                <td>상품명</td>
                                <td>홍길동</td>
                                <td>010-0000-0000</td>
                                <td>서울시 강남구</td>
                                <td>이메일</td>
                                <td>메모</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmTable