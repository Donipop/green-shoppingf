import styled from "styled-components";

function TotalOrderList(){

    return (
        <div className="w-100">
            <div className="row m-2">
                <div className="col-12">
                    <div className="alert alert-secondary">
                        <h6>스마트스토어의 모든 주문건을 조회할 수 있는 통합 주문조회 기능입니다.</h6>
                    </div>

                    <div className="alert alert-secondary">
                        <div className="row">
                            <div className="col-4">
                                <span>조회기간</span>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="btn-group" aria-label="dateBtnGroup">
                                            <button type="button" className="btn btn-secondary">오늘</button>
                                            <button type="button" className="btn btn-secondary">일주일</button>
                                            <button type="button" className="btn btn-secondary">1개월</button>
                                            <button type="button" className="btn btn-secondary">3개월</button>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className="col-3">
                                        <input type="date" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mt-5">
                                <span>상세조건</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalOrderList;


