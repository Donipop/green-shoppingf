import ReactApexChart from "react-apexcharts"; 
import styled from "styled-components";


const SalesStauts = () => {
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;


    const linedata = {
        series: [{
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
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
                    (month + "." + (day - 4) ), (month + "." + (day - 3 ) ), (month + "." + (day - 2) ), (month + "." + (day - 1) ), (month + "." + (day) )],
                }
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


const Span = styled.span`
background-color: #4dc089;
top: 0;
left: 0;
width: 42px;
height: 42px;
font-size: 24px;
display: inline-block;
line-height: 40px;
vertical-align: middle;
text-align: center;
color: #fff;
`

const Ul = styled.ul`
min-height: 99px;
padding: 3px 0 0 57px;
list-style:none;
`
const Li = styled.li`
margin-bottom: 9px;
line-height:18px;
height:21px;
`

const SPan = styled.span`
float: left;
color: #303236;
vertical-align: middle;
font-size: 15px;
`

const A = styled.a`
position: relative;
top: -1px;
font-size: 20px;
color: #4dc089;
text-decoration: none;

`

