import Header from './Header'
import logo from '../logo.svg'
import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default Index;

function Index(){



    const [ cookies, setCookies, removeCookie] = useCookies('vo');
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    
    const getCookieFunc = () => {
        let result = "쿠키(vo)안의 이메일 : " + JSON.stringify(cookies.vo.user_email);
        setText1(result)
    }

    const getTokenFunc = () => {
        let token = localStorage.getItem('token')

        let message = "세션 안 = " + token;

        setText2(message)
    }

    const test123 = () => {
        alert("gogo")
        axios({
            method:'post',
            url:'/api/test123',
            data: cookies.vo
        })
        .then(alert("갔나?"))
        
    }

    return(
        <div className='container'>
            <div className='row justify-content-center mt-3'>
                    <img src={logo} className='col-3' style={{width: 82, height:42}}></img>
                <div  className='col-9'>
                    <Header/>
                </div>
                    <h2>ㅎㅇ</h2>
                    <h2>뭔데 ㅅㅂ ㅋ</h2>
            </div>

            <button onClick={getCookieFunc}>쿠키안의 이메일 확인하기</button><br/>
            <button onClick={getTokenFunc}>세션안을 확인하기</button>
            <button onClick={test123}>쿠키를 서버로 전송 테스트</button>
            <p>{text1}</p>
            <p>{text2}</p>        
        </div>
        
    );

}