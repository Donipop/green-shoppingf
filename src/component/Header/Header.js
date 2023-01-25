import './heardercss.css'
import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useCookies } from "react-cookie";
import Categories from './Categories'
const Header = ({user}) => {
    const name1 = new URLSearchParams(window.location.search).get('name')
    const [name, setName] = useState(
        name1 === null ? "전체" : name1
    )
    const [searchcont, setSearchcont] = useState('')
    const UlRef = useRef()
    const [count, setCount] = useState(0);
    const [text, setText] = useState('로그인');
    const [aaa, setaaa] = useState('/login')
    const [cookies, setCookie, removeCookie] = useCookies(['refreshToken'])
    let refreshToken = cookies.refreshToken;

    const textChange = (e) => {
        if (refreshToken === undefined || refreshToken === null) {
            setText("로그인")
            setaaa("/login")
        }
        else if (refreshToken !== undefined || refreshToken !== null) {
            setText("로그아웃")
            setaaa("/logout")
        }
    }

    useEffect(() => {
        if(user === undefined){
            return;
        }
            axios({
                method: 'get',
                url: '/api/mypage/countBasket',
                params: {
                    user_id: user.user_id
                }
            })
                .then(res => setCount(res.data))
            textChange()
        
    }, [user])

    const noneCheck = () => {
        if (UlRef.current.style.display === "none") {
            UlRef.current.style.display = "block"
        } else {
            UlRef.current.style.display = "none"
        }
    }

    const ValueSelect = (e) => {
        setName(e.target.innerHTML)
        UlRef.current.style.display = "none"
    }

    const submit = (e) => {
        e.preventDefault()
        window.location.href = `/searchview?searchcont=${searchcont}&name=${name}`

    }

    return (
        <Div>
            <HeaderStyle>
                <Section>
                    <DDiv>
                        <H1>
                            <a href='/' style={{ height: "41px" }}>
                                <img src="//image7.coupangcdn.com/image/coupang/common/logo_coupang_w350.png" width="174" height="41" alt="쿠팡로고" style={{ verticalAlign: "top" }}></img>
                            </a>
                        </H1>
                        <DDDiv>
                            <form onSubmit={submit}>
                                <fieldset>
                                    <legend style={{ display: "none" }}>상품검색</legend>
                                    <DIv >
                                        <DDIv >
                                            <a href="#!" className="dd" onClick={noneCheck}></a>
                                            <a href="#!" className="ff" onClick={noneCheck} style={{ textAlign: "left" }}>{name}</a>
                                        </DDIv >

                                        <Ul ref={UlRef} style={{ display: "none" }} >
                                            <LI><A onClick={ValueSelect}>전체</A></LI>
                                            <LI><A onClick={ValueSelect} href="#255" rel='255'>남성</A></LI>
                                            <LI><A onClick={ValueSelect}>여성</A></LI>
                                            <LI><A onClick={ValueSelect}>남녀공용패션</A></LI>
                                            <LI><A onClick={ValueSelect}>유아동패션</A></LI>
                                            <LI><A onClick={ValueSelect}>출산/유아동</A></LI>
                                            <LI><A onClick={ValueSelect}>뷰티</A></LI>
                                            <LI><A onClick={ValueSelect}>식품</A></LI>
                                            <LI><A onClick={ValueSelect}>주방용퓸</A></LI>
                                            <LI><A onClick={ValueSelect}>생활용품</A></LI>
                                        </Ul>
                                    </DIv>
                                    <Input type="text" onChange={(e) => setSearchcont(e.target.value)} placeholder="찾고 싶은 상품을 검색해보세요!"></Input>
                                    <AImage onClick={submit}></AImage>
                                </fieldset>
                            </form>
                        </DDDiv>
                        <ul style={{ marginTop: "3px", fontSize: "12px", listStyle: "none", }}>
                            <LLI>
                                <a href='/mypage' style={{ textDecoration: "none" }}>
                                    <MypageSpan>

                                    </MypageSpan>
                                    <span style={{ width: "50px", paddingTop: "7px", textAlign: "center", color: "#333" }}>
                                        마이짭팡
                                    </span>

                                </a>

                            </LLI>
                            <LLI>
                                <AA href="/mypage">
                                    <Span></Span>
                                    <span style={{ width: "50px", paddingTop: "7px", textAlign: "center", color: "#333" }} >장바구니</span>
                                    <Em>{count}</Em>
                                </AA>
                            </LLI>

                        </ul>
                    </DDiv>
                </Section>
                <CategoriesDiv>
                    <Categories />
                </CategoriesDiv>
            </HeaderStyle>
            <Article>
                <section style={{ width: "1020px", margin: "0 auto", fontSize: "11px" }}>
                    <Menu>
                        <LII>
                            <AAA href={(aaa)} >{text}</AAA>
                        </LII>

                        <LII>
                            <AAA href='/signup'>회원가입</AAA>
                        </LII>

                        <LII>
                            <AAA>고객센터</AAA>
                        </LII>

                    </Menu>
                </section>

            </Article>
        </Div>
    )
}

export default Header

const LI = styled.li`
    list-style: none;
    font-size:"12px";
    

    `
const A = styled.a`
    display: block;
    outline: 0;
    padding: 7px 0 7px 3px;
    letter-spacing: -1px;
    color: #000;
    text-decoration: none;  
    font-size: 13px;
    text-align: left;
    `
const Ul = styled.ul`
    top: 38px;
    width: 138px;
    max-height: 200px;
    padding: 10px 0 10px 10px;
    border: 1px solid #ddd;
    box-shadow: 0 4px 5px rgb(0 0 0 / 30%);
    background-color: #fff;
    border: solid 1px #aaa;
    list-style: none;
    position: absolute;
    z-index: 1;
    overflow-y: auto;
    margin-top: -1px;
    display: none;
    text-align: left;
    left: -2px;
    `
const AImage = styled.a`
    overflow: hidden;
    position: absolute;
    width: 50px;
    height: 39px;
    background-position: -112px -71px;
    text-indent: -9em;
    background-image: url(//static.coupangcdn.com/image/coupang/common/pc_header_img_sprite_180104.png);
    background-repeat: no-repeat;
    left: 468px;
`

const AA = styled.a`
width: 50px;
    height: 60px;
    margin-top: -10px;
    display: inline-block;
    position: relative;
    text-decoration: none;
    

`
const Span = styled.span`
width: 40px;
    height: 41px;
    display: block;
    margin: 0 auto;
    background-position: -112px 0;
    background-image: url(//static.coupangcdn.com/image/coupang/common/pc_header_img_sprite_180104.png);
    background-repeat: no-repeat;
`

const SPan = styled.span`
width: 50px;
    display: block;
    text-align: center;
    padding-top: 3px;
    color: #333;
    white-space: nowrap;
    font-size: 12px;
`

const Em = styled.em`
position: absolute;
    width: 17px;
    height: 19px;
    top: 8px;
    right: 10px;
    margin: -5px 0 0 4px;
    color: #fff;
    text-align: center;
    line-height: 19px;
    letter-spacing: -1px;
    font: bold 10px Tahoma;
`

const Div = styled.div`

`

const HeaderStyle = styled.header`
width:1020px;
position:relative;
height:147px;
margin:0 auto;
padding: 32px;
z-index: 3;
`
const Section = styled.section`
width:880px;
position:relative;
height:91px;
margin: 25px 0 0 140px;
`

const DDiv = styled.div`
position: relative;
z-index: 3;
height: 56px;
`

const H1 = styled.h1`
width: 174px;
height: 41px;
margin : 2px 20px 0 0;
float: left;
`

const DDDiv = styled.div`
width: 518px;
position: relative;
    z-index: 3;
    float: left;
    margin-left: 0;
    height: 41px;
    margin-right: 22px;
    border: 2px solid #4285f4;
    background-position: 0 -207px
`

const DIv = styled.div`
position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const DDIv = styled.div`
z-index: 20;
position: absolute;
top: 0;
left: 0;
background-color: #fff;
border: 0;
font-size: 12px;
font-weight: normal;
height: 37px;
width: 134px;
border-right: 1px solid #ddd;
`

const Input = styled.input`
    width: 310px;
    line-height: normal;
    padding-right: 23px;
    left: 135px;
    color: #333;
    position: absolute;
    top: 0;
    height: 37px;
    margin: 0;
    border: 0;
    background: #fff;
    text-indent: 10px;
    font-size: 14px;
    outline: 0;
`

const Article = styled.article`
    position: absolute;
    height: 32px;
    top: 0;
    right: 0;
    left: 0;
    background: #f0f0f0;
    z-index: 3;
`

const Menu = styled.menu`
    float: right;
    position: relative;
    z-index: 10;
    list-style: none;
`

const LII = styled.li`
    height: 26px;
    position: relative;
    float: left;
    padding-right: 12px;
    list-style: none;
`

const LLI = styled.li`
    position: relative;
    margin-right: 20px;
    width: 50px;
    height: 52px;
    float: left;
    list-style: none;
`

const MypageSpan = styled.span`
    width: 29px;
    height: 31px;
    display: block;
    margin: 0 auto;
    background-position: -112px -42px;
    background-image: url(//static.coupangcdn.com/image/coupang/common/pc_header_img_sprite_180104.png);
    background-repeat: no-repeat;
`

const AAA = styled.a`
 text-decoration: none;
 color: black;
`

const CategoriesDiv = styled.div`
background-image: url(//static.coupangcdn.com/image/coupang/common/pc_header_img_sprite_180104.png);
    background-repeat: no-repeat;
    position: absolute;
    width: 110px;
    height: 115px;
    top: 32px;
    left: 0;
    margin-right: 30px;
    background-position: 0 0;
    text-align: center;
`