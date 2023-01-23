import { useEffect,useState } from "react";
import ReactApexChart from "react-apexcharts"; 
import axios from "axios";
import { useCookies } from "react-cookie";
import Logininformation2 from '../../Logininformation2'



const SalesStauts = () => {
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1
    let year = today.getFullYear();
    const [list, setList] = useState({
        data: [0],
    });
    const [cookies, setCookie, removeCookie] = useCookies(['refreshToken'])
    let refreshToken = cookies.refreshToken;
    const [userinformation, setuserinformation] = useState({
        user_address : "",
        user_brith : "",
        user_email : "",
        user_grade : "",
        user_id : "",
        user_money : "",
        user_name : "",
        user_nick : "",
        user_password : "",
        user_role : "",
        user_sex : "",
        user_signdate : "",
        user_state : "", 
        user_tel : ""
    });
    let login_information = sessionStorage.getItem("login")
    login_information = JSON.parse(login_information);
    


    useEffect( () => {
      

        axios({
            method: 'get',
            url: '/api/sellercenter/salesstatus',
            params: {
                id:  login_information.user_id,
                start: year + "-" + month + "-" + (day-8),
                end: year + "-" + month + "-" + (day),
            },
            })

            .then(res => setList({...list,
                data: res.data
                }))
    }, [])
   

    
        



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
                    categories: [(month + "." + (day - 8) ), (month + "." + (day - 7) ), (month + "." + (day - 6) ),(month + "." + (day - 5) ), 
                    (month + "." + (day - 4) ), (month + "." + (day - 3 ) ), (month + "." + (day - 2) ), (month + "." + (day - 1) )],
                }
            },
        }
    


        return (

            <div className="OrderDeliveryPage" style={{width:"820px",height:"340px",paddingLeft:"30px"}}>
                <Logininformation2 getuserData={setuserinformation}/>
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




