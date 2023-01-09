import OrderDeliveryPage from "./OrderDeliveryPage";
import styled from "styled-components";
import SellerReview from "../reviewmanagement/SellerReview";
import CancleCostSettlePage from "./CancleCostSettlePage";

const SellerCenterMain = () => {
  return (
    <Div >
      <OrderDeliveryPage />
      <CancleCostSettlePage />
      <SellerReview />
      </Div>
      
    
  );
}

export default SellerCenterMain;



const Div = styled.div`
    width: 1458px;
    height: 1776px;
    padding: 10px 25px 8px 25px;
    font-size: 14px;
    padding-right: 25px;
    
    
    `
    