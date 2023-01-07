import './hearder2css.css'
import React, { useRef,useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Header2 = () => {
    const [name, setName] = useState('전체')
    const [searchcont, setSearchcont] = useState('')
    const UlRef = useRef()
    const Navigate = useNavigate()
   


    const nonecheck = () => {
        if(UlRef.current.style.display === "none"){
            UlRef.current.style.display = "block"
        } else {
            UlRef.current.style.display = "none"
        }
    }

    const test = (e) => {
        setName(e.target.innerHTML)
        UlRef.current.style.display = "none"
    }

    const submit = (e) => {
        e.preventDefault()

            window.location.href = `/searchview?searchcont=${searchcont}&name=${name}`
    }


    


    return (
    <div style={{width:"520px"}}>    
        <div style={{width:"518px",border:"2px solid #4285f4", height:"41px", marginRight:"22px",display:"flex",position:"absolute",right:"550px"}}>
            <form style={{display:"flex",width:"100%"}} onSubmit={submit}>
                <div style={{width:"134px",borderRight:"1px solid #ddd",height:"33px"}}>
                    <a href="#!"className="dd" onClick={nonecheck}></a>
                    <a href="#!"className="ff" onClick={nonecheck}>{name}</a>
                        <Ul ref={UlRef} style={{display:"none"}} >
                            <LI><A onClick={test}>전체</A></LI>
                            <LI><A onClick={test}href="#255"rel='255'>남성패션</A></LI>
                            <LI><A onClick={test}>여성패션</A></LI>
                            <LI><A onClick={test}>남녀공용패션</A></LI>
                            <LI><A onClick={test}>유아동패션</A></LI>
                            <LI><A onClick={test}>출산/유아동</A></LI>
                            <LI><A onClick={test}>뷰티</A></LI>
                            <LI><A onClick={test}>식품</A></LI>
                            <LI><A onClick={test}>주방용퓸</A></LI>
                            <LI><A onClick={test}>생활용품</A></LI>
                        </Ul>
                </div>
                        <input type="text" onChange={(e) => setSearchcont(e.target.value)}style={{width:"310px",height:"33px",border:"none",outline:"none",marginLeft:"10px",fontSize:"14px"}}placeholder="찾고 싶은 상품을 검색해보세요!"></input>
                        <AImage onClick={submit}></AImage>
            </form>                        
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