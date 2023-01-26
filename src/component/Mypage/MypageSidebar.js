import logo from "../../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/sellersidebar.css";
import React from "react";
import styled from "styled-components";

export default MypageSidebar;

function MypageSidebar() {
  return (
    <div id="MypageSidebar" style={{ marginLeft:"125px",marginTop: "40px", marginRight:"100px", display: "flex" }}>
      <ul>
        <li style={{ listStyle: "none" }}>
          <Sidebar>
            <a
              href="/mypage"
              className="link-white d-inline-flex text-decoration-none rounded"
            >
            장바구니
            </a>
            <a
              href="/mypage/mypurchaseinquiry"
              className="link-white d-inline-flex text-decoration-none rounded"
            >
            구매내역조회
            </a>
            <a
              href="/mypage/coupon"
              className="link-white d-inline-flex text-decoration-none rounded"
            >
            쿠폰
            </a>
            <a
              href="/mypage/myreview"
              className="link-white d-inline-flex text-decoration-none rounded"
            >
            나의 리뷰
            </a>
            <a
              href="/mypage/myinformation"
              className="link-white d-inline-flex text-decoration-none rounded"
            >
            회원정보 수정
            </a>
            <a
              href="/mypage/sellersignup"
              className="link-white d-inline-flex text-decoration-none rounded"
            >
            판매자 회원등록 하기
            </a>
          </Sidebar>
        </li>
      </ul>
    </div>
  );
}

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  text-align: center;
  position: sticky;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 10;
  border: 1px solid #8d8d8d;
  width: auto;
  transition: 0.3s;
  padding: 2rem 0;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #8d8d8d;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    :hover {
      color: #0d0d0d;
    }
  }
`;
