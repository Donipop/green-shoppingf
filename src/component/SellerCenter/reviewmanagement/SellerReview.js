import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const SellerReview = ({ user }) => {
  const [starnum, setStarNum] = useState([]);
  const [starlist, setStarList] = useState({
    five: 0,
    four: 0,
    three: 0,
    two: 0,
    one: 0,
  });
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const [dateinfo, setDateInfo] = useState({
    start: "1923-1-5",
    end: "2023-" + month + "-" + day + " " + hour + ":" + minute,
  });
  const [allreview, setAllReview] = useState("");
  const [avgstar, setAvgStar] = useState({
    avg: 0,
  });
  const [IdList, setIdList] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  useEffect(() => {
    if (user === undefined) {
      return;
    } 
    else if (user !== undefined && selectedId < 1) {
    axios({
      method: "get",
      url: `/api/sellercenter/reviewmanagement/reviewlist`,
      params: {
        user_id: user.user_id,
        start: dateinfo.start,
        end: dateinfo.end,
      },
    }).then((res) => {
      setStarNum(res.data);
      setAllReview(res.data.length)
      axios({
        method: "get",
        url: `/api/sellercenter/reviewmanagement/reviewlistId`,
        params: {
          user_id: user.user_id,
          start: dateinfo.start,
          end: dateinfo.end,
        },
      }).then((response) => {
        setIdList(response.data);
      })
    });
  }
  else if (user !== undefined && selectedId > 1) {
    axios({
      method: "post",
      url: `/api/sellercenter/reviewmanagement/reviewlistGetBySelectedId`,
      data: {
        user_id: user.user_id,
        start: dateinfo.start,
        end: dateinfo.end,
        id: selectedId,
      },
    }).then((res) => {
      setStarNum(res.data);
      setAllReview(res.data.length);
    });
  }
  }, [dateinfo, user, selectedId]);

  useEffect(() => {
    if (starnum.length === 0) {
      setStarList({ five: 0, four: 0, three: 0, two: 0, one: 0 });
    } else {
      setStarList({ five: 0, four: 0, three: 0, two: 0, one: 0 });
      let sum = 0;
      
      {
        starnum.map((star) => {
          
          sum += star.star;
          setAvgStar({
            avg: sum / starnum.length,
          });
          if (star.star === 5) {
            setStarList((prventcount) => {
              return { ...prventcount, five: prventcount.five + 1 };
            });
          } else if (star.star === 4) {
            setStarList((prventcount) => {
              return { ...prventcount, four: prventcount.four + 1 };
            });
          } else if (star.star === 3) {
            setStarList((prventcount) => {
              return { ...prventcount, three: prventcount.three + 1 };
            });
          } else if (star.star === 2) {
            setStarList((prventcount) => {
              return { ...prventcount, two: prventcount.two + 1 };
            });
          } else if (star.star === 1) {
            setStarList((prventcount) => {
              return { ...prventcount, one: prventcount.one + 1 };
            });
          }
        });
      }
     
    }
  }, [starnum, dateinfo]);
  

  const ChangeDate = (e) => {
    let date = e.target.value;
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let week = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    let month1 = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      today.getDate()
    );
    let month3 = new Date(
      today.getFullYear(),
      today.getMonth() - 3,
      today.getDate()
    );
    let month6 = new Date(
      today.getFullYear(),
      today.getMonth() - 6,
      today.getDate()
    );
    let year1 = new Date(
      today.getFullYear() - 1,
      today.getMonth(),
      today.getDate()
    );
    let all = new Date(
      today.getFullYear() - 100,
      today.getMonth(),
      today.getDate()
    );
    if (date === "0") {
      //전체
      setDateInfo({
        ...dateinfo,
        start:
          all.getFullYear() + "-" + (all.getMonth() + 1) + "-" + all.getDate(),
        end: year + "-" + month + "-" + day + " " + hour + ":" + minute,
      });
    } else if (date === "1") {
      //오늘 날짜 구하기
      setDateInfo({
        ...dateinfo,
        start: year + "-" + month + "-" + day,
        end: year + "-" + month + "-" + day + " " + hour + ":" + minute,
      });
      // 1주일
    } else if (date === "2") {
      setDateInfo({
        ...dateinfo,
        start:
          week.getFullYear() +
          "-" +
          (week.getMonth() + 1) +
          "-" +
          week.getDate(),
        end: year + "-" + month + "-" + day + " " + hour + ":" + minute,
      });

      //1개월
    } else if (date === "3") {
      setDateInfo({
        ...dateinfo,
        start:
          month1.getFullYear() +
          "-" +
          (month1.getMonth() + 1) +
          "-" +
          month1.getDate(),
        end: year + "-" + month + "-" + day + " " + hour + ":" + minute,
      });
      // 3개월
    } else if (date === "4") {
      setDateInfo({
        ...dateinfo,
        start:
          month3.getFullYear() +
          "-" +
          (month3.getMonth() + 1) +
          "-" +
          month3.getDate(),
        end: year + "-" + month + "-" + day + " " + hour + ":" + minute,
      });
      // 6개월
    } else if (date === "5") {
      setDateInfo({
        ...dateinfo,
        start:
          month6.getFullYear() +
          "-" +
          (month6.getMonth() + 1) +
          "-" +
          month6.getDate(),
        end: year + "-" + month + "-" + day + " " + hour + ":" + minute,
      });
      // 1년
    } else if (date === "6") {
      setDateInfo({
        ...dateinfo,
        start:
          year1.getFullYear() +
          "-" +
          (year1.getMonth() + 1) +
          "-" +
          year1.getDate(),
        end: year + "-" + month + "-" + day + " " + hour + ":" + minute,
      });
    }
  };
  const donutData = {
    series: [
      {
        name: "5점",
        data: [starlist.five],
      },
      {
        name: "4점",
        data: [starlist.four],
      },
      {
        name: "3점",
        data: [starlist.three],
      },
      {
        name: "2점",
        data: [starlist.two],
      },
      {
        name: "1점",
        data: [starlist.one],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      title: {
        text: "리뷰별점통계",
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        show: false,
        categories: ["리뷰별점통계"],
        labels: {
          show: false,
        },
      },
      axisBorder: {
        show: false,
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {},
      fill: {
        opacity: 1,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  };

  const onChangeidList = (e) => {
    setSelectedId(e.target.value);
  }

  return (
    <div style={{ width: "823px", height: "224px", paddingLeft: "30px" }}>
      <div
        style={{ border: "1px solid #dbdde2", width: "99%", height: "100%"}}
      >
        <div style={{ padding: "0 25px", borderBottom: "1px solid #e2e6ee", display:"flex" }}>
          <h3
            style={{
              fontSize: "15px",
              lineHeight: "52px",
              color: "#303236",
              fontWeight: "600",
            }}
          >
            리뷰
          </h3>
          {/* <button onClick={() => console.log(IdList)} style={{marginLeft:"650px", marginTop:"15px"}}>테스트</button> */}
            <select style={{marginLeft:"350px", marginTop:"15px"}} onChange={onChangeidList}>
              <option value={0}>전체</option>
              {IdList.map(({id,title}, index) => (
                <option key={index} value={id}>
                  {title}
                </option>
              ))}
            </select>
        </div>
        <div style={{ padding: "15px 0 ", height: "158px", display: "flex" }}>
          <div
            style={{ width: "41%", paddingLeft: "25px", paddingRight: "25px" }}
          >
            <h3
              style={{
                fontSize: "15px",
                color: "#00c73c",
                fontWeight: "600",
                borderBottom: "1px solid #e2e6ee",
                padding: "10px",
              }}
            >
              
              리뷰수
              <select onChange={ChangeDate}>
                <option value="0">전체</option>
                <option value="1">오늘</option>
                <option value="2">일주일</option>
                <option value="3">한달</option>
                <option value="4">3개월</option>
                <option value="5">6개월</option>
                <option value="6">1년</option>
              </select>
              <span style={{ float: "right" }}>
                <em style={{ fontStyle: "normal" }}>{allreview}</em>
                <span>건</span>
              </span>
            </h3>
            <h3
              style={{
                fontSize: "15px",
                borderBottom: "1px solid #e2e6ee",
                padding: "10px",
              }}
            >
              별점 평균
              <span style={{ float: "right" }}>
                <em style={{ fontStyle: "normal" }}>{avgstar.avg.toFixed(1)}</em>
                <span>점</span>
              </span>
            </h3>
            <h3 style={{ fontSize: "15px", padding: "10px" }}>리뷰이벤트</h3>
          </div>
          <div
            style={{
              width: "55%",
              borderLeft: "1px solid #e2e6ee",
              paddingLeft: "25px",
              paddingRight: "25px",
            }}
          >
            <ReactApexChart
              type="bar"
              options={donutData.options}
              series={donutData.series}
              width={400}
              height={110}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerReview;
