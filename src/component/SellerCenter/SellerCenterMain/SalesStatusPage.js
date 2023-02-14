import { useEffect,useState } from "react";
import ReactApexChart from "react-apexcharts"; 
import axios from "axios";
import { useCookies } from "react-cookie";



const SalesStauts = ({user}) => {
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1
    let year = today.getFullYear();
    const [list, setList] = useState({
        data: [0],
    });
    
    if (month < 10) {
        const zeroDate = ('00' + month).slice(-2);
        month = zeroDate;
      }
    
    //오늘로부터 8일 계산식
    const xaxisCategories = useState([]);
    for (let i = 0; i < 8; i++) {
        day -= 1;
        if (day === 0) {
          day = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
          month -= 1;
          if (month === 0) {
            month = 12;
          }
        }
        xaxisCategories.unshift(`${month}.${String(day).padStart(2, '0')}`);
      }
    useEffect( () => {
        if(xaxisCategories.length === 0) return;
        if(user )
        axios({
            method: 'get',
            url: '/api/sellercenter/salesstatus',
            params: {
                id:  user.user_id,
                start: year + "-" + month + "-" + xaxisCategories[0].split(".")[1],
                end: year + "-" + month + "-" + xaxisCategories[7].split(".")[1],
            },
            })
            .then(res => {
                setList({...list,
                    data: res.data
                    })
            })
    }, [user])
      
    const linedata = {
        series: [{
            data: [list.data[0],list.data[1],list.data[2],list.data[3],list.data[4],list.data[5],list.data[6],list.data[7]]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                markers: {
                    size: 5,
                    hover: {
                        sizeOffset: 6
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: [xaxisCategories[0], xaxisCategories[1], xaxisCategories[2], xaxisCategories[3], xaxisCategories[4], xaxisCategories[5],
                        xaxisCategories[6],xaxisCategories[7]]}
            },
        }
    
        return (

            <div className="OrderDeliveryPage" style={{width:"820px",height:"340px",paddingLeft:"30px"}}>
            <div className="PannelHeader">
                <div style={{padding:"0 25px", borderBottom:"1px solid #e2e6ee"}}>
                    <h3 className="pannel-title">마켓 매출 통계</h3>
                </div>
                
                <ReactApexChart options={linedata.options} series={linedata.series} type="line" height={230} />    
                           
            </div>
        </div>
        
        )
}

export default SalesStauts  




