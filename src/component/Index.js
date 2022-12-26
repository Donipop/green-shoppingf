import Header from './Header'
import logo from '../logo.svg'
import { useCookies, Cookies } from 'react-cookie';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { json, Navigate } from 'react-router-dom';
import { getOverlayDirection } from 'react-bootstrap/esm/helpers';




export default Index;

function Index(){
    const [cookies, setCookie, removeCookie] = useCookies(['vo', 'refreshToken'])
    
    
    var user_id = "";
    var user_grade = '';
    
    
    let login_information = sessionStorage.getItem("login")
    login_information = JSON.parse(login_information);

    
    
    function start() {

    if (login_information === null) {
        user_id = "로그인 된 정보가 없습니다."
        }
    else if (login_information != null) {
        user_id = login_information.user_nick + "님 안녕하세요."
        user_grade = login_information.user_grade
        }

    return user_id
    }    

    user_id = start()

    function test123() {
        const refreshToken = cookies.refreshToken;
        console.log()
        console.log()
        axios({
            method:'post',
            url:'/api/login/viewmap',
            data: {
                refreshToken: refreshToken
            },
        })
        .then(res => res.data)
    }

    


    useEffect(() => {
       
    }, );

    return(
        <div className='container'>
            <div className='row justify-content-center mt-3'>
                    <img src={logo} className='col-3' style={{width: 82, height:42}}></img>
                <div  className='col-9'>
                    <Header/>
                </div>  
            </div>
            <div>
                <h2>닉네임 : {user_id}</h2><br/>
                <h2>등급 : {user_grade}</h2><br/>
                <h2>만료일 : {}</h2><br/>
                <a href='/notice'>공지사항</a><br/>
                <button onClick={test123}>보튼</button>                    
            </div>
        </div>

        
        
    );

}