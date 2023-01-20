import { useEffect, useState } from "react";
import styled from "styled-components";

function ViewDate({getDate}){
    
    const [dateInfo, setDateInfo] = useState({
            start: "",
            end: ""
        });
    const onClickOneClickDate = (index) => {
        let today = new Date();   

        
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜
        // 일주일전 1개월전 3개월전 구하기
        let week = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        let month1 = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
        let month3 = new Date(today.getFullYear(), today.getMonth() - 3, today.getDate());
        switch(index){
            case 0:
                // console.log("오늘");
                setDateInfo({
                    ...dateInfo,
                    start: year + '-' + (month <= 9 ? "0" + month : month) + '-' + (date <= 9 ? "0" + date : date),
                    end: year + '-' + (month <= 9 ? "0" + month : month) + '-' + (date <= 9 ? "0" + date : date)
                })
                break;
            case 1:
                // console.log("일주일");
                setDateInfo({
                    ...dateInfo,
                    start: week.getFullYear() + '-' + ((week.getMonth() + 1) <= 9 ? "0" + (week.getMonth() + 1) : (week.getMonth() + 1)) + '-' + (week.getDate() <= 9 ? "0" + week.getDate() : week.getDate()),
                    end: year + '-' + (month <= 9 ? "0" + month : month) + '-' + (date <= 9 ? "0" + date : date)
                })
                break;
            case 2:
                // console.log("1개월");
                setDateInfo({
                    ...dateInfo,
                    start: month1.getFullYear() + '-' + ((month1.getMonth() + 1) <= 9 ? "0" + (month1.getMonth() + 1) : (month1.getMonth() + 1)) + '-' + (month1.getDate() <= 9 ? "0" + month1.getDate() : month1.getDate()),
                    end: year + '-' + (month <= 9 ? "0" + month : month) + '-' + (date <= 9 ? "0" + date : date)
                })

                break;
            case 3:
                // console.log("3개월");
                setDateInfo({
                    ...dateInfo,
                    start: month3.getFullYear() + '-' + ( (month3.getMonth()+1) <= 9 ? "0" + (month3.getMonth()+1) : (month3.getMonth()+1) ) +
                    '-' + ( (month3.getDate()) < 9 ? "0" + (month3.getDate()) : (month3.getDate()) ),
                    end: year + '-' + (month <= 9 ? "0" + month : month) + '-' + (date <= 9 ? "0" + date : date)
                })
                break;
            default:
                // console.log("오늘");
                setDateInfo({
                    ...dateInfo,
                    start: year + '-' + (month <= 9 ? "0" + month : month) + '-' + (date <= 9 ? "0" + date : date),
                    end: year + '-' + (month <= 9 ? "0" + month : month) + '-' + (date <= 9 ? "0" + date : date)
                })
                break;
        }
    }

    const onChangeDate = (e) => {
        setDateInfo({
            ...dateInfo,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        getDate(dateInfo);
    }, [dateInfo])
    
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
                            <button type="button" className="btn btn-secondary" onClick={() => onClickOneClickDate(0)} >오늘</button>
                            <button type="button" className="btn btn-secondary" onClick={() => onClickOneClickDate(1)} >일주일</button>
                            <button type="button" className="btn btn-secondary" onClick={() => onClickOneClickDate(2)} >1개월</button>
                            <button type="button" className="btn btn-secondary" onClick={() => onClickOneClickDate(3)} >3개월</button>
                        </div>

                        <div className="d-flex">
                            <input name="start" type="date" className="form-control d-flex" onChange={onChangeDate} value={dateInfo.start} />
                            <SPAN className="d-flex align-items-center">~</SPAN>
                            <input name="end" type="date" className="form-control d-flex" onChange={onChangeDate} value={dateInfo.end} />
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
