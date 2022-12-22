import axios from "axios"
import { useEffect } from "react"
import { json } from "react-router-dom";
import Header from "../Header"
import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login";
import { useCookies } from 'react-cookie';


function Myinformation() {

    const [ cookies, setCookie, removeCookie] = useCookies('vo');
    var user_info = sessionStorage.getItem("login");
    user_info = JSON.parse(user_info);
    const Navigate = useNavigate();  
    const [account, setAccount] = useState({
        user_id: user_info.user_id,
        user_email: user_info.user_email,
        user_password: user_info.user_password,
        user_name: user_info.user_name,
        user_nick: user_info.user_nick,
        user_brith: user_info.user_brith,
        user_address: user_info.user_address,
        user_tel: user_info.user_tel,
        user_signdate: user_info.user_signdate

    });
    const onChangeAccount = (e) => {
        setAccount({...account, [e.target.name]: e.target.value,});   
    }
    
    

    
    
    
    
    
    const update_user_info = () => {
        

        axios({
            method:"post",
            url:"/api/mypage/update_userinformation",
            data: {
                account : JSON.stringify(account)
            },
            
        })
        .then(res => res.data)
        .then(sessionStorage.removeItem("login"))
        .then(localStorage.removeItem("login"))
        .then(removeCookie('vo'))
        .then(res => {(sessionStorage.setItem("login", JSON.stringify(res.vo)))
                        (setCookie('vo', res.vo, {
                            path:'/',
                            maxAge: 360
                                }))
        })
        
        .then(alert("회원정보 업데이트 완료"))
        .then(window.location.reload())
        
    }
    
    
    useEffect(() => {
        if(sessionStorage.getItem("login") == null) {
            alert("로그인이 되어있지 않습니다.")
            Navigate("/login")
        }
        
        
        
        
    },[])

    
    

    const test123 = () => {
        alert(JSON.stringify(account))
        
    }


    return (
        <div className='container'>
            <div className='row justify-content-center mt-3'>
                <div  className='col-9'>
                    <Header/>
                </div>  
            </div>
            <div>
                <h2>개인정보 확인 및 조회</h2>
               <div>
                <form onSubmit={update_user_info}>
               <div>
                    <label htmlFor="update_password">아이디 : </label>
                    <input type="text" id="user_id" name="user_id" value={account.user_id} onChange={onChangeAccount} readOnly/>
                </div>
                <div>
                    <label htmlFor="update_password">이메일 : </label>
                    <input type="text" id="user_email" name="user_email" value={account.user_email} onChange={onChangeAccount} />
                </div>
                <div>
                    <label htmlFor="update_password">비밀번호 : </label>
                    <input type="password" id="user_password" name="user_password" value={account.user_password} onChange={onChangeAccount}/>
                </div>
                <div>
                    <label htmlFor="update_password">이름 : </label>
                    <input type="text" id="user_name" name="user_name" value={account.user_name} onChange={onChangeAccount} readOnly/>
                </div>
                <div>
                    <label htmlFor="update_password">닉네임 : </label>
                    <input type="text" id="user_nick" name="user_nick" value={account.user_nick} onChange={onChangeAccount}/>
                </div>
                <div>
                    <label htmlFor="update_password">생일 : </label>
                    <input type="text" id="user_brith" name="user_brith" value={account.user_brith} onChange={onChangeAccount} readOnly/>
                </div>    
                <div>
                    <label htmlFor="update_password">배송지 : </label>
                    <input type="text" id="user_address" name="user_address" value={account.user_address} onChange={onChangeAccount}/>
                </div>
                <div>
                    <label htmlFor="update_password">전화번호 : </label>
                    <input type="text" id="user_tel" name="user_tel" value={account.user_tel} onChange={onChangeAccount}/>
                </div>
                <div>
                    <label htmlFor="update_password">가입일 : </label>
                    <input type="text" id="user_signdate" name="user_signdate" value={account.user_signdate} onChange={onChangeAccount} readOnly/>
                </div>
                </form>
                <button onClick={update_user_info}>수정하기</button>
                <button onClick={test123} type="button">보튼</button>
               </div>
               
                
               
            </div>
        </div>
    )
}

export default Myinformation