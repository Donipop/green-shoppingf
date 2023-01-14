import './hearder2css.css'
import React, { useRef,useState,useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import logo from '../logo.svg'

const Header2 = () => {
    const name1 = new URLSearchParams(window.location.search).get('name')
    const [name, setName] = useState(
        name1 === null ? "전체" : name1
    )
    const [searchcont, setSearchcont] = useState('')
    const UlRef = useRef()
   
    const [count,setCount] = useState(0);


    useEffect( () => {
        axios({
            method:'get',
            url:'/api/mypage/countBasket',
            params: {
                user_id: 'admin'
            }
        })
        .then(res => setCount(res.data))
    },[])


    const noneCheck = () => {
        if(UlRef.current.style.display === "none"){
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
    <div style={{width:"800px",position:"relative"}}>    
            <img src={logo} className='col-3' style={{width: 82, height:42}}></img>
        <div style={{width:"518px",border:"2px solid #4285f4", height:"41px", marginRight:"22px",display:"flex",position:"absolute"}}>
            <form style={{display:"flex",width:"100%"}} onSubmit={submit}>
                <div style={{width:"134px",borderRight:"1px solid #ddd",height:"33px"}}>
                    <a href="#!"className="dd" onClick={noneCheck}></a>
                    <a href="#!"className="ff" onClick={noneCheck} style={{textAlign:"left  "}}>{name}</a>
                        <Ul ref={UlRef} style={{display:"none"}} >
                            <LI><A onClick={ValueSelect}>전체</A></LI>
                            <LI><A onClick={ValueSelect}href="#255"rel='255'>남성</A></LI>
                            <LI><A onClick={ValueSelect}>여성</A></LI>
                            <LI><A onClick={ValueSelect}>남녀공용패션</A></LI>
                            <LI><A onClick={ValueSelect}>유아동패션</A></LI>
                            <LI><A onClick={ValueSelect}>출산/유아동</A></LI>
                            <LI><A onClick={ValueSelect}>뷰티</A></LI>
                            <LI><A onClick={ValueSelect}>식품</A></LI>
                            <LI><A onClick={ValueSelect}>주방용퓸</A></LI>
                            <LI><A onClick={ValueSelect}>생활용품</A></LI>
                        </Ul>
                </div>
                        <input type="text" onChange={(e) => setSearchcont(e.target.value)}style={{width:"310px",height:"33px",border:"none",outline:"none",marginLeft:"10px",fontSize:"14px"}}placeholder="찾고 싶은 상품을 검색해보세요!"></input>
                        <AImage onClick={submit}></AImage>
            </form>       
        </div>
        <div style={{float:"right"}}>
        <AA href="/mypage">
        <Span></Span>
        <SPan>장바구니</SPan>
        <Em>{count}</Em>
        </AA>
        </div>
    </div>
    )
}

export default Header2

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
    top: 35px;
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

const AA= styled.a`
width: 50px;
    height: 60px;
    margin-top: -4px;
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

