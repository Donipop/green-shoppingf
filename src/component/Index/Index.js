import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import styled from "styled-components";
import ItemRecommend from "./ItemRecommend";

export default Index;

function Index({ user }) {
  const [list, setList] = useState([
    {
      MAINIMAGE: "",
      ID: 0,
    },
    {
      MAINIMAGE: "",
      ID: 0,
    },
    {
      MAINIMAGE: "",
      ID: 0,
    },
    {
      MAINIMAGE: "",
      ID: 0,
    },
    {
      MAINIMAGE: "",
      ID: 0,
    },
    {
      MAINIMAGE: "",
      ID: 0,
    },
    {
      MAINIMAGE: "",
      ID: 0,
    },
    {
      MAINIMAGE: "",
      ID: 0,
    },
    {
      MAINIMAGE: "",
      ID: 0,
    },
  ]);

  useEffect(() => {
    axios.get("/api/randomitemlist").then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <div className="">
      <Header user={user} />
      <Section>
        <img
          src="https://static.coupangcdn.com/da/cmg_paperboy/image/1673938680547/230118_C1_%ED%99%88-%EC%8B%9C%EC%A6%8C%EC%98%A4%ED%94%84_SMD-24729_PC.jpg"
          width="1920"
          height="450"
        ></img>
        <Div></Div>
        <Ull>
          <Li>
            <Image
              src="https://static.coupangcdn.com/la/cmg_paperboy/image/1673516292563/item.jpg"
              width="180"
              height="60"
              alt=""
            ></Image>
            <Span></Span>
          </Li>
          <Li>
            <Image
              src="https://image9.coupangcdn.com/image/ccm/banner/d6995211240a96926ca80b5a6a28a336.jpg"
              width="180"
              height="60"
              alt=""
            ></Image>
            <Span></Span>
          </Li>
          <Li>
            <Image
              src="https://static.coupangcdn.com/ea/cmg_paperboy/image/1673938685046/230118_C1_%ED%99%88-%EC%8B%9C%EC%A6%8C%EC%98%A4%ED%94%84_SMD-24729_BOX.png"
              width="180"
              height="60"
              alt=""
            ></Image>
          </Li>
          <Li>
            <Image
              src="https://image8.coupangcdn.com/image/ccm/banner/2a71e969976ffc181fc7d924df24984f.png"
              width="180"
              height="60"
              alt=""
            ></Image>
            <Span></Span>
          </Li>
          <Li>
            <Image
              src="https://static.coupangcdn.com/la/cmg_paperboy/image/1673516292563/item.jpg"
              width="180"
              height="60"
              alt=""
            ></Image>
            <Span></Span>
          </Li>
        </Ull>
      </Section>
      <SEction>
        <Divv>
          <Divvv>
            <H2>
              오늘의 발견
              <span
                style={{
                  marginRight: "5px",
                  marginLeft: "5px",
                  fontWeight: "100",
                  fontSize: "20px",
                }}
              >
                |
              </span>
              <EM>오늘 짭팡이 엄선한 가장 HOT한 상품!</EM>
            </H2>
          </Divvv>
          <Divtodaylist>
            <ul style={{ listStyle: "none" }}>
              <LIitem>
                <a href={`/view/${list[0].ID}`}>
                  <img src={list[0].MAINIMAGE} width="468" height="298"></img>
                  <SPan></SPan>
                </a>
              </LIitem>
              <LIitem>
                <a href={`/view/${list[1].ID}`}>
                  <img src={list[1].MAINIMAGE} width="468" height="298"></img>
                  <SPan></SPan>
                </a>
              </LIitem>
              <LIitem>
                <a href={`/view/${list[2].ID}`}>
                  <img src={list[2].MAINIMAGE} width="228" height="298"></img>
                  <SPan></SPan>
                </a>
              </LIitem>
              <LIitem>
                <a href={`/view/${list[3].ID}`}>
                  <img src={list[3].MAINIMAGE} width="228" height="298"></img>
                  <SPan></SPan>
                </a>
              </LIitem>
              <LIitem>
                <a href={`/view/${list[4].ID}`}>
                  <img src={list[4].MAINIMAGE} width="228" height="298"></img>
                  <SPan></SPan>
                </a>
              </LIitem>
              <LIitem>
                <a href={`/view/${list[5].ID}`}>
                  <img src={list[5].MAINIMAGE} width="228" height="298"></img>
                  <SPan></SPan>
                </a>
              </LIitem>
              <LIitem>
                <a href={`/view/${list[6].ID}`}>
                  <img src={list[6].MAINIMAGE} width="468" height="298"></img>
                  <SPan></SPan>
                </a>
              </LIitem>
              <LIitem>
                <a href={`/view/${list[7].ID}`}>
                  <img src={list[7].MAINIMAGE} width="228" height="298"></img>
                  <SPan></SPan>
                </a>
              </LIitem>
              <LIitem>
                <a href={`/view/${list[8].ID}`}>
                  <img src={list[8].MAINIMAGE} width="228" height="298"></img>
                  <SPan></SPan>
                </a>
              </LIitem>
            </ul>
          </Divtodaylist>
          <ItemRecommend />
        </Divv>
      </SEction>
    </div>
  );
}

const Section = styled.section`
  position: relative;
  height: 450px;
  background: #fafafa;
`;
const Div = styled.div`
  position: relative;
  width: 1020px;
  height: 450px;
  margin: 0 auto;
  overflow: hidden;
`;
const Ull = styled.ul`
  position: absolute;
  width: 180px;
  right: 450px;
  top: 45px;
  box-shadow: 0 4px 5px rgb(0 0 0 / 30%);
  list-style: none;
  padding-left: 0px;
`;

const Li = styled.li`
  position: relative;
  list-style: none;
`;

const Span = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-top: 1px solid #eee;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #fff;
`;

const Image = styled.img`
  vertical-align: top;
`;

const SEction = styled.section`
  width: 100%;
  min-width: 1020px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
  padding: 0 0 40px;
`;

const Divv = styled.div`
  position: relative;
  width: 1020px;
  margin: 0 auto;
`;
const Divvv = styled.div`
  margin-right: 40px;
  position: relative;
  padding: 40px 40px 0 0;
  margin: 0 auto;
`;

const H2 = styled.h2`
  height: 33px;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 26px;
`;

const EM = styled.em`
  font-size: 15px;
  font-style: normal;
`;
const Divtodaylist = styled.div`
  position: relative;
  padding: 3px 0 13px 4px;
  background: #fff;
  border: 1px solid #d6d6d6;
  overflow: hidden;
`;

const LIitem = styled.li`
  height: 300px;
  float: left;
  position: relative;
  margin: 10px 2px 0 10px;
  background: #fff;
  list-style: none;
`;
const SPan = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 1px;
  left: 0;
  border: 1px solid #d6d6d6;
`;
