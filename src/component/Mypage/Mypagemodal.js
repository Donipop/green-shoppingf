
import './mypagemodalcss.css';
const MypageModal = () => {
    return (
        <div style={{all:"initial",width:"160px",marginTop:"15px"}}>
           <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{border:"1px solid #e5e5e5", fontSize:"14px", fontWeight:"bold",borderRadius:"0px"}}>
             배송조회
            </button>

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalLabel" style={{fontSize:"15px",color:"#000",padding:"5px"}}>배송조회</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">    
                        <table style={{width:"100%"}}>
                            <thead>
                               <tr>
                                    <th className="th1">현재상태</th>
                                    <th className='th2'>구매확정</th>
                               </tr>
                               <tr>
                                    <th className='th3'>송장번호</th>
                                    <th className='th4' >123456789</th>
                               </tr>
                            </thead>
                        </table>
                        <table className='table1'>
                            <tbody>
                                <tr>
                                    <th style={{borderBottom:"1px solid #ddd"}}>배송시간</th>
                                    <th style={{borderBottom:"1px solid #ddd"}}>현재위치</th>
                                    <th style={{borderBottom:"1px solid #ddd"}}>배송내용</th>
                                    <th style={{borderBottom:"1px solid #ddd"}}>배송업체</th>
                                </tr>
                                <tr style={{borderBottom:"1px solid #ddd"}}>
                                    <td>2022-10-12 11:12:00</td>
                                    <td>부산우편집중국</td>
                                    <td>도착</td>
                                    <td>cj대한통운</td>
                                </tr>
                                <tr style={{borderBottom:"1px solid #ddd"}}>
                                    <td>2022-10-12 08:40:00</td>
                                    <td>북부산우체국</td>
                                    <td>배달준비</td>
                                    <td>cj대한통운</td>
                                </tr>
                                <tr>
                                    <td>2022-10-12 11:12:00</td>
                                    <td>북부산우체국</td>
                                    <td>배달완료</td>
                                    <td>cj대한통운</td>
                                </tr>
                            </tbody>
                        </table>



                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              
                </div>
            </div>
            </div>
        </div>   
       
    )
}

export default MypageModal