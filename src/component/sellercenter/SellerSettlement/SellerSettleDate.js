import { useEffect, useState } from "react";
import styled from "styled-components";

function SellerSettleDate({ getDate }) {
  let newdate = new Date();
  let monthbefore = newdate.getMonth() + 1;

  if (monthbefore === 1) {
    monthbefore = 12;
  }
  const [dateInfo, setDateInfo] = useState({
    start: "",
    end: "",
  });

  useEffect(() => {
    let date = new Date(); // Create a new Date object with the current date and time
    let year = date.getFullYear(); // Get the 4-digit year
    let month = date.getMonth() + 1;
    // if (month === 1) {
    //     year = year - 1;
    //     month = 12;
    // }
    // else if( 2 <= month && month <= 9) {
    //     month = "0" + month;
    // }

    let day = date.getDate() + 1; // 오늘 날짜 + 1 (+1 안하면 오늘 날짜가 검색이 안됨)
    let alltimeago = new Date(2000, 1, 1);

    setDateInfo({
      start:
        alltimeago.getFullYear() +
        "-" +
        (alltimeago.getMonth() <= 9
          ? "0" + alltimeago.getMonth()
          : alltimeago.getMonth()) +
        "-" +
        (alltimeago.getDate() < 9
          ? "0" + alltimeago.getDate()
          : alltimeago.getDate()),
      end:
        year +
        "-" +
        (month <= 9 ? "0" + month : month) +
        "-" +
        (day <= 9 ? "0" + day : day),
    });
  }, []);

  const onClickOneClickDate = (index) => {
    let date = new Date(); // 현재시간
    let year = date.getFullYear(); // 이번년도
    let month = date.getMonth() + 1; // 이번달
    let day = date.getDate() + 1; // 오늘 날짜 + 1
    let daybefore = date.getDate(); // 오늘 날짜 
    let date2 = new Date(year, month, 0).getDate(); // 달의 마지막 날짜 구하기
    let month3 = new Date(
      date.getFullYear(),
      date.getMonth() - 3,
      date.getDate()
    );
    let month6 = new Date(
      date.getFullYear(),
      date.getMonth() - 6,
      date.getDate()
    );
    let month12 = new Date(
      date.getFullYear() - 1,
      date.getMonth(),
      date.getDate()
    );
    let alltimeago = new Date(2000, 1, 1);

    switch (index) {
      case 0:
        // console.log("오늘");
        setDateInfo({
          ...dateInfo,
          start:
            year +
            "-" +
            (month <= 9 ? "0" + month : month) +
            "-" +
            (daybefore <= 9 ? "0" + daybefore : daybefore),
          end:
            year +
            "-" +
            (month <= 9 ? "0" + month : month) +
            "-" +
            (day <= 9 ? "0" + day : day),
        });
        break;
      case 1:
        // console.log("이번달");
        setDateInfo({
          ...dateInfo,
          start: year + "-" + (month <= 9 ? "0" + month : month) + "-" + "01",
          end: year + "-" + (month <= 9 ? "0" + month : month) + "-" + date2,
        });

        break;
      case 2:
        // console.log("저번달");
        if (month === 1) {
          year = year - 1;
          month = 12;
        } else if (2 <= month && month <= 9) {
          month = "0" + month;
        }

        setDateInfo({
          ...dateInfo,
          start: `${year}-${month}-01`,
          end: `${year}-${month}-${date2}`,
        });
        break;
      case 3:
        // console.log("3개월");
        setDateInfo({
          ...dateInfo,
          start:
            month3.getFullYear() +
            "-" +
            (month3.getMonth() + 1 <= 9
              ? "0" + (month3.getMonth() + 1)
              : month3.getMonth() + 1) +
            "-" +
            (month3.getDate() < 9 ? "0" + month3.getDate() : month3.getDate()),
          end:
            year +
            "-" +
            (month <= 9 ? "0" + month : month) +
            "-" +
            (day <= 9 ? "0" + day : day),
        });
        break;
      case 4:
        // console.log("6개월");
        setDateInfo({
          ...dateInfo,
          start:
            month6.getFullYear() +
            "-" +
            (month6.getMonth() + 1 <= 9
              ? "0" + (month6.getMonth() + 1)
              : month6.getMonth() + 1) +
            "-" +
            (month6.getDate() < 9 ? "0" + month6.getDate() : month6.getDate()),
          end:
            year +
            "-" +
            (month <= 9 ? "0" + month : month) +
            "-" +
            (day <= 9 ? "0" + day : day),
        });
        break;
      case 5:
        // console.log("1년");
        setDateInfo({
          ...dateInfo,
          start:
            month12.getFullYear() +
            "-" +
            (month12.getMonth() + 1 <= 9
              ? "0" + (month12.getMonth() + 1)
              : month12.getMonth() + 1) +
            "-" +
            (month12.getDate() < 9
              ? "0" + month12.getDate()
              : month12.getDate()),
          end:
            year +
            "-" +
            (month <= 9 ? "0" + month : month) +
            "-" +
            (day <= 9 ? "0" + day : day),
        });
        break;
      case 6:
        // console.log("전체");
        setDateInfo({
          ...dateInfo,
          start:
            alltimeago.getFullYear() +
            "-" +
            (alltimeago.getMonth() <= 9
              ? "0" + alltimeago.getMonth()
              : alltimeago.getMonth()) +
            "-" +
            (alltimeago.getDate() < 9
              ? "0" + alltimeago.getDate()
              : alltimeago.getDate()),
          end:
            year +
            "-" +
            (month <= 9 ? "0" + month : month) +
            "-" +
            (day <= 9 ? "0" + day : day),
        });
        break;
      default:
        // console.log("오늘");
        setDateInfo({
          ...dateInfo,
          start:
            year +
            "-" +
            (month <= 9 ? "0" + month : month) +
            "-" +
            (date <= 9 ? "0" + date : date),
          end:
            year +
            "-" +
            (month <= 9 ? "0" + month : month) +
            "-" +
            (date <= 9 ? "0" + date : date),
        });
        break;
    }
  };

  const onChangeDate = (e) => {
    setDateInfo({
      ...dateInfo,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    getDate(dateInfo);
  }, [dateInfo]);

  return (
    <div className="row">
      <div className="col-2">
        <span>정산된 정보 조회하기</span>
      </div>

      <div className="col-10">
        <div className="row">
          <div className="col-12"></div>

          <div className="col-12 d-flex mt-3">
            <div className="btn-group" aria-label="dateBtnGroup">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onClickOneClickDate(0)}
              >
                오늘
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onClickOneClickDate(1)}
              >
                이번달
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onClickOneClickDate(2)}
              >
                저번달
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onClickOneClickDate(3)}
              >
                3개월
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onClickOneClickDate(4)}
              >
                6개월
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onClickOneClickDate(5)}
              >
                1년
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onClickOneClickDate(6)}
              >
                전체
              </button>
            </div>

            <div className="d-flex">
              <input
                name="start"
                type="date"
                className="form-control d-flex"
                onChange={onChangeDate}
                value={dateInfo.start}
              />
              <SPAN className="d-flex align-items-center">~</SPAN>
              <input
                name="end"
                type="date"
                className="form-control d-flex"
                onChange={onChangeDate}
                value={dateInfo.end}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SellerSettleDate;
const SPAN = styled.span`
  margin: 0 10px;
  padding: 0 15px;
  border-radius: 5px;
  background-color: #fff;
`;
