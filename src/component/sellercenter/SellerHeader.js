import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import logo from "../../logo.svg";

export default SellerHeader;

function SellerHeader() {
  return (
    <header className="border-bottom">
      <Container>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center justify-content-center justify-content-lg-start"
          >
            <img
              src={logo}
              className="col-3"
              style={{ width: 82, height: 42 }}
              alt="logo"
            />
          </a>
          <h1 className="nav col-12 col-lg-auto me-lg-auto justify-content-center">
            짭팡 센터
          </h1>

          <Ul className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <li>도니팝</li>
            <li>
              <Button>Ho</Button>{" "}
            </li>
            <li>버튼2</li>
            <li>버튼3</li>
          </Ul>
        </div>
      </Container>
    </header>
  );
}

const Ul = styled.ul`
  list-style: none;
  display: flex;
  li {
    margin: 0 2px 0 2px;
  }
`;
