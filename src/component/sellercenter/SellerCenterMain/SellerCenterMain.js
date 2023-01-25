import OrderDeliveryPage from "./OrderDeliveryPage";
import styled from "styled-components";
import SellerReview from "../reviewmanagement/SellerReview";
import CancleCostSettlePage from "./CancleCostSettlePage";
import SalesStautsPage from "./SalesStatusPage";
import TokTokQnaPage from "./TokTokQnaPage";
import NoticePage from "./NoticePage";

const SellerCenterMain = ({ user }) => {
  return (
    <div>
      <Div>
        <OrderDeliveryPage user={user}/>
        <CancleCostSettlePage user={user} />
      </Div>
      <div style={{ display: "flex" }}>
        <SalesStautsPage user={user}/>
        <TokTokQnaPage />
        <NoticePage />
      </div>
      <div style={{ display: "flex" }}>
        <SellerReview user={user}/>
      </div>
    </div>
  );
};

export default SellerCenterMain;

const Div = styled.div`
  width: 1640px;
  height: 250px;
  padding: 10px 25px 8px 25px;
  font-size: 14px;
  display: flex;
`;
