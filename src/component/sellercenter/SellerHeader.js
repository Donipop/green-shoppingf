import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import React,{useEffect,useState} from "react";
import styled from "styled-components";
import axios from "axios";

export default SellerHeader;

function SellerHeader({user}) {
  const[marketName, setMarketName] = useState('');
  useEffect(() => {
    if(user === undefined){
      return;
    }
    axios({
      method: "get",
      url: "/api/sellercenter/getmarketNamebySellerid",
      params: {
        user_id: user.user_id,
      }
    })
    .then((res) => {
      console.log(res.data)
      setMarketName(res.data);
    })

  }, []);
  return (
    <header className="border-bottom">
      <Container>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/sellercenter"
            className="d-flex align-items-center justify-content-center justify-content-lg-start"
          >
            <img
              src="//image7.coupangcdn.com/image/coupang/common/logo_coupang_w350.png"
              width="174" height="41"
              alt="logo"
            />
          </a>
          <h1 className="nav col-12 col-lg-auto me-lg-auto justify-content-center">
            {marketName}
          </h1>

          <Ul >
            <li>{user.user_id}님 환영합니다.</li>
          </Ul>
        </div>
      </Container>
    </header>
  );
}

const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 9px;

`;
