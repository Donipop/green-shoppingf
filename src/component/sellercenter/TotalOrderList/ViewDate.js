import styled from "styled-components";

function ViewDate(){

    return (
        <div className="row">
            <div className="col-2">
                <span>조회기간</span>
            </div>

            <div className="col-10">
                <div className="row">
                    <div className="col-12">
                        <div className="dropdown open">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                        결제일
                                    </button>
                            <div className="dropdown-menu" aria-labelledby="triggerId">
                                <button className="dropdown-item">Action</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 d-flex mt-3">
                        <div className="btn-group" aria-label="dateBtnGroup">
                            <button type="button" className="btn btn-secondary">오늘</button>
                            <button type="button" className="btn btn-secondary">일주일</button>
                            <button type="button" className="btn btn-secondary">1개월</button>
                            <button type="button" className="btn btn-secondary">3개월</button>
                        </div>

                        <div className="d-flex">
                            <input type="date" className="form-control d-flex" />
                            <SPAN className="d-flex align-items-center">~</SPAN>
                            <input type="date" className="form-control d-flex" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default ViewDate;
const SPAN = styled.span`
    margin: 0 10px;
    padding: 0 15px;
    border-radius: 5px;
    background-color: #fff;
`;
