import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function UserFindId() {
    const [user_name, setuser_name] = useState("")
    const [user_tel, setuser_tel] = useState('')

    function FindUserId(e) {
        e.preventDefault();
        
        let tel = user_tel.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
        
        
                            
    axios({
            method: 'post',
            url: '/api/login/findId',
            params: {
                user_name: user_name,
                user_tel: tel
            }
        })
        .then(res => {
            console.log(res.data)
        })
    }

    return (
        <div>
            <h1>아이디 찾기</h1>
            <form>
                <label>이름 :</label>
                <input type="text" name="name" placeholder="성함을 입력해주세요." value={user_name} onChange={(e) => setuser_name(e.target.value)} /><br/>
                <label>전화번호 :</label>
                <input type="text" name="tel" placeholder="전화번호를 입력해주세요." value={user_tel} onChange={(e) => setuser_tel(e.target.value)}/><br/>
                <button onClick={(e) => FindUserId(e)}>아이디 찾기</button>
            </form>
            
        </div>
    )
}

