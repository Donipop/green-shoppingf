import axios from "axios"
import { useEffect,useState } from "react"


const SellerReview = () => {
    const user_id = "admin"
    const [starnum, setStarNum] = useState([])
    const [starlist, setStarList] = useState(
        {five: 0, four: 0, three: 0, two: 0, one: 0 }
    )
    const [dateinfo, setDateInfo] = useState({
        start: "1923-1-5",
        end: "2023-1-5"
    });
    const [allreview, setAllReview] = useState('')

    useEffect(() => {
        axios({
            method: "get",
            url: `/api/sellercenter/reviewmanagement/reviewlist`,
            params: {
                user_id: user_id,
                start: dateinfo.start,
                end: dateinfo.end
            }
        })
        .then((res) => {
            setStarNum(res.data)
            setAllReview(res.data.length)
        }
        )      
    }, [dateinfo])

    useEffect(() => {
        if(starnum.length === 0){
            return;
        } else {
        {starnum.map((star) => {
            // dateinfo가 바뀌면 starlist를 초기화 시켜줘야함

            if(star.star === 5){
           setStarList(prventcount => {
               return {...prventcount,five:  prventcount.five + 1}})
        } else if(star.star === 4){
            setStarList(prventcount => {
                return {...prventcount,four: prventcount.four + 1}})
        }
        else if(star.star === 3){
            setStarList(prventcount => {
                return {...prventcount,three: prventcount.three + 1}})
        }
        else if(star.star === 2){
            setStarList(prventcount => {
                return {...prventcount,two: prventcount.two + 1}})
        }
        else if(star.star === 1){
            setStarList(prventcount => {
                return {...prventcount,one: prventcount.one + 1}})
        }
    })}
}
     },[starnum])

        const ChangeDate = (e) => {
            console.log(e.target.value)
            let date = e.target.value;
            let today = new Date();

            let year = today.getFullYear();
            let month = today.getMonth() + 1;
            let day = today.getDate();
            let week = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
            let month1 = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
            let month3 = new Date(today.getFullYear(), today.getMonth() - 3, today.getDate());
            let month6 = new Date(today.getFullYear(), today.getMonth() - 6, today.getDate());
            let year1 = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
            let all = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
            if(date === "0"){
                setDateInfo({
                    ...dateinfo,
                    start: all.getFullYear() + '-' + (all.getMonth() + 1) + '-' +all.getDate(),
                    end: year + "-" + month + "-" + day
                })
                
            } else if(date === "1"){
                //오늘 날짜 구하기
                setDateInfo({
                    ...dateinfo,
                    start: year + "-" + month + "-" + day,
                    end: year + "-" + month + "-" + day
                })

            } else if(date === "2"){
                setDateInfo({
                    ...dateinfo,
                    start: week.getFullYear() + '-' + (week.getMonth() + 1) + '-' +week.getDate(),
                    end: year + "-" + month + "-" + day
                })
            } else if(date === "3"){
                setDateInfo({
                    ...dateinfo,
                    start: month1.getFullYear() + '-' + (month1.getMonth() + 1) + '-' +month1.getDate(),
                    end: year + "-" + month + "-" + day
                })
               
            } else if(date === "4"){
                setDateInfo({
                    ...dateinfo,
                    start: month3.getFullYear() + '-' + (month3.getMonth() + 1) + '-' +month3.getDate(),
                    end: year + "-" + month + "-" + day
                })
              
            } else if(date === "5"){
                setDateInfo({
                    ...dateinfo,
                    start: month6.getFullYear() + '-' + (month6.getMonth() + 1) + '-' +month6.getDate(),
                    end: year + "-" + month + "-" + day
                })
             
            } else if(date === "6"){
                setDateInfo({
                    ...dateinfo,
                    start: year1.getFullYear() + '-' + (year1.getMonth() + 1) + '-' +year1.getDate(),
                    end: year + "-" + month + "-" + day
                })

            }
             
        }
            //오늘 날짜 구하기

    return(
        <div style={{padding:"5px",width:"1163px", height:"224px"}}>
            <div style={{border:"1px solid #dbdde2",width:"99%",height:"100%"}}>
                <div style={{padding:"0 25px",borderBottom:"1px solid #e2e6ee"}}>
                    <h3 style={{fontSize:"15px",lineHeight:"52px",color:"#303236",fontWeight:"600"}}>리뷰</h3>
                </div>
                <div style={{padding:"15px 0 ",height:"158px",display:"flex"}}>
                    <div style={{width:"41%",paddingLeft:"25px", paddingRight:"25px"}}>
                        <h3 style={{fontSize:"15px",color:"#00c73c",fontWeight:"600",borderBottom:"1px solid #e2e6ee",padding:"10px"}}>리뷰수
                        <select  defaultValue="0" onChange={ChangeDate}>
                            <option value="0">전체</option>
                            <option value="1">오늘</option>
                            <option value="2">일주일</option>
                            <option value="3">한달</option>
                            <option value="4">3개월</option>
                            <option value="5">6개월</option>
                            <option value="6">1년</option>
                        </select>
                        <span style={{float:"right"}}>
                            <em style={{fontStyle:"normal"}}>{allreview}</em>
                            <span >건</span>
                        </span>
                        </h3>             
                        <h3 style={{fontSize:"15px",borderBottom:"1px solid #e2e6ee",padding:"10px"}}>평점 낮은 리뷰</h3>
                        <h3 style={{fontSize:"15px",padding:"10px"}}>리뷰이벤트</h3>
                    </div>
                    <div style={{width:"55%",borderLeft:"1px solid #e2e6ee",paddingLeft:"25px", paddingRight:"25px"}}>
                            5점 : {starlist.five}개<br/>
                            4점 : {starlist.four}개<br/>
                            3점 : {starlist.three}개<br/>
                            2점 : {starlist.two}개<br/>
                            1점 : {starlist.one}개<br/>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default SellerReview