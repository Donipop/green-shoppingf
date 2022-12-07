import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Dropdown} from "react-bootstrap";
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import searchicon from 'bootstrap-icons/icons/search.svg';
import '../css/header.css';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default Header;

function Header() {

    const [, , removeCookie] = useCookies('vo');

    const logOut = () => {
        removeCookie('vo');
        Navigate('/');
    }

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
                <a href='/login' className='nav-link link-dark'>로그인</a>
                <div className='grid2'></div>
                <a href='/signup' className='nav-link'>회원가입</a>
                <div className='grid2'></div>
                <a href='/information' className='nav-link'>고객센터</a>
                <div className='gird2'></div>
                <button onClick={logOut}>쿠키삭제</button>
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

    
