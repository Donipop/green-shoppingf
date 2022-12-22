import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Dropdown} from "react-bootstrap";
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import searchicon from 'bootstrap-icons/icons/search.svg';
import '../css/header.css';
import { useCookies } from 'react-cookie';
import axios from 'axios';

export default Header;

function Header() {
    
    let login_information = sessionStorage.getItem("login")
    login_information = JSON.parse(login_information);
    
    
    
    const [text, settext] = useState()
    const [aaa, setaaa] = useState()
    
    

    function changelogin() {
        if( login_information == null ) {
            settext("로그인")
            setaaa("login")
        }
        else if (login_information != null ) {
            settext("로그아웃")
            setaaa("/logout")
        }

        
    }
    
    useEffect(() => {
      changelogin()  
        
    }, )
    


    
    return (
        <div id='header'>
            <div className='row' id='header-searchForm'>
                <Dropdown className='col-3'>
                    <Dropdown.Toggle id="dropdown-basic" as='button'>
                        전체
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">남성패션</Dropdown.Item>
                        <Dropdown.Item href="#">여성패션</Dropdown.Item>
                        <Dropdown.Item href="#">남여 공용 의류</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                

                <Label className='col-9'>
                    <input id='searchinput' placeholder='찾고 싶은 상품을 검색해보세요!'></input>
                    <button>
                        <img src={searchicon} alt='search'></img>
                    </button>
                </Label>
            </div>
            
            <div id='header-info' className='position-absolute end-0 top-0'>
                <a href={(aaa)} className='nav-link link-dark'>{(text)}</a>
                <div className='grid2'></div>
                <a href='/signup' className='nav-link'>회원가입</a>
                <div className='grid2'></div>
                <a href='/information' className='nav-link'>고객센터</a>
                <div className='gird2'></div>
                <a href='/mypage' className='nav-link'>마이페이지</a>
                <div className='grid2'></div>
                
                
                
            </div>

        </div>
    );
};

const Label = styled.label`
    position: relative;
    width: 498px;
    padding: 0;
    input {
        width: 100%;
        padding: 0 15px;
        height: 40px;
        border: none;
        border-left: solid 1px red;
    }
    input:focus{
        outline: none;
    }
    button {
        position: absolute;
        top: 5px;
        right: 4px;

        background-color:rgba(0,0,0,0);
        border: none;
        color: skyblue;
    }
    `;

    
