import './hearder2css.css'
import React, { useRef } from 'react'
import styled from 'styled-components'
const Header2 = () => {
    const Ref = useRef()
    const nonecheck = () => {
        console.log(Ref.current.style.display)
        if(Ref.current.style.display === "none"){
        Ref.current.style.display = "block"
        } else {
            Ref.current.style.display = "none"
        }
    }
    

    return (
    <div>    
        <div style={{width:"518px",border:"2px solid #4285f4", height:"37px", marginRight:"22px"}}>
                <div style={{width:"134px",borderRight:"1px solid #ddd",height:"33px"}}>
                    <a className="dd" onClick={nonecheck}></a>
                    <a className="ff" onClick={nonecheck}>전체</a>
                        <Ul ref={Ref} >
                            <LI><A href='#!'>전체</A></LI>
                            <LI><A htef="#255"rel='255'>남성패션</A></LI>
                            <LI><A>여성패션</A></LI>
                            <LI><A>남녀공용패션</A></LI>
                            <LI><A>유아동패션</A></LI>
                            <LI><A>출산/유아동</A></LI>
                            <LI><A>뷰티</A></LI>
                            <LI><A>식품</A></LI>
                            <LI><A>주방용퓸</A></LI>
                            <LI><A>생활용품</A></LI>
                            </Ul>
                </div>
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
    max-height: 702px;
    padding: 10px 0 10px 10px;
    border: 1px solid #ddd;
    left: -2px;
    box-shadow: 0 4px 5px rgb(0 0 0 / 30%);
    background-color: #fff;
    border: solid 1px #aaa;
    list-style: none;
    left: -1px;
    position: absolute;
    z-index: 1;
    overflow-y: auto;
    margin-top: -1px;
    display: none;
    `