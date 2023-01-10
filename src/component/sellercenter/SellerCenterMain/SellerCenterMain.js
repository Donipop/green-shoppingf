import OrderDeliveryPage from "./OrderDeliveryPage";
import styled from "styled-components";
import SellerReview from "../reviewmanagement/SellerReview";
import CancleCostSettlePage from "./CancleCostSettlePage";
import SalesStautsPage from "./SalesStatusPage";
import TokTokQnaPage from "./TokTokQnaPage";
import NoticePage from "./NoticePage";

const SellerCenterMain = () => {
  return (
    <div>
    <Div >
      <OrderDeliveryPage />
      <CancleCostSettlePage />
      </Div>
      <div style={{display:"flex"}}>
      <SalesStautsPage/> 
      <TokTokQnaPage/>
      <NoticePage />
      </div>
      <div style={{display:"flex"}}>
      <SellerReview />
      </div>
      </div>
      
    
  );
}

export default SellerCenterMain;



const Div = styled.div`
    width: 1640px;
    height: 250px;
    padding: 10px 25px 8px 25px;
    font-size: 14px;
    display: flex;
    
    
    `
    