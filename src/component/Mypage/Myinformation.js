import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header2 from '../Header2';
import LoginInterceptor from '../LoginInterceptor';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Logininformation2 from '../Logininformation2';

function Myinformation() {
    const [cookies, setCookie, removeCookie] = useCookies(['refreshToken'])
    let refreshToken = cookies.refreshToken;

    const[myinfo, setmyinfo] = useState({
        user_address : "",
        user_brith	: "",
        user_email	: "",
        user_id		: "",
        user_money	: "",
        user_name	: "",
        user_nick	: "",
        user_password	: "",
        user_signdate	: "",
        user_tel		: ""
    })

    const [password2, setpassword2] = useState('') // 비밀번호 확인

    const [CheckCheck, setCheckCheck] = useState(true) // 체크 총 체크

    // 닉네임 중복확인
    const [Checknick, setnickCheck] = useState({
        check : true,
        message : "닉네임을 설정해주세요"
    }) 

    // 비밀번호 중복확인
    const [Checkpassword, setCheckpassword] = useState({
        check : true,
        message : "변경하실 비밀번호를 입력해주세요"
    });
    
    const onChangeMyinfo = (e) => {
        const {id, value} = e.target;
        setmyinfo({
            ...myinfo,
            [id]: value
        })}
    
    function myinfoUpdate() {
        console.log(myinfo)
        axios({
            method: 'post',
            url: '/api/mypage/myinfoUpdate',
            data: {
                myinfo : myinfo,
                refreshToken : refreshToken
            }
        })
        .then(res => res.data)
        .then(res => {
            if (res === 1) {
                alert("회원정보가 수정되었습니다.")
                window.location.reload();
                
            }
            else {
                alert("회원정보 수정에 실패하였습니다.")
            }
        })
    }

    function onChangePassword2(e) {
        setpassword2(e.target.value)
        
    }

    

    

    // 비밀번호 체크
    useEffect(() => {
        if(password2 === myinfo.user_password) {
            setCheckpassword({
                check : false,
                message : "비밀번호가 일치합니다."
            })
        }
        else {
            setCheckpassword({
                check : true,
                message : "비밀번호가 일치하지 않습니다."
            })
        }
    }
    , [myinfo.user_password, password2])

    // 유저 닉네임 상시 체크
    useEffect(() => {
        
        if(myinfo.user_nick === "" || myinfo.user_nick.length < 3) {
            setnickCheck({
                check : true,
                message : "닉네임은 3자 이상 입력해주세요."
            })
        } else {
            axios({
                method:'post',
                url:'/api/mypage/checkduplicatenick',
                params: {
                    user_nick : myinfo.user_nick
                }
    
            })
            .then(res => res.data)
            .then(res => {
                if(res === true) {
                    setnickCheck({
                        check : false,
                        message : "사용가능한 닉네임입니다."
                    })
                } else {
                    setnickCheck({
                        check : true,
                        message : "중복된 닉네임입니다."
                    })
                }
            })

        }
        
    },[myinfo.user_nick])

    useEffect(() => {
        if(Checknick.check === false && Checkpassword.check === false) {
            setCheckCheck(false)
        } else {
            setCheckCheck(true)
        }
        
    
    },[Checknick.check, Checkpassword.check])

    return(
        <div>
            <Header2 />
            <LoginInterceptor/>
            <Logininformation2 getuserData={setmyinfo}/>
            <div className="row m-2">
                <div className="col-12">
                    <div className="alert alert-secondary">
                        <h6>{myinfo.user_id}님의 회원정보수정 페이지</h6>
                        <button onClick={()=> {console.log(myinfo)}}>확인</button>
                        <button onClick={()=> {console.log(Checkpassword.message)}}>비번확인</button>
                        <button onClick={()=> {console.log(CheckCheck)}}>체크확인</button>
                        
                        

                        <form>
                            <div className="form-group">
                                <label htmlFor="user_id">아이디</label>
                                <input type="text" className="form-control" id="user_id" value={myinfo.user_id} onChange={onChangeMyinfo} readOnly/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_password">비밀번호</label>
                                <input type="password" className="form-control" id="user_password" value={myinfo.user_password} onChange={onChangeMyinfo}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_password">비밀번호 확인</label>
                                <input type="password" className="form-control" id="user_password2" value={password2} onChange={(e) => onChangePassword2(e)}/>
                            </div>
                            <div className="form-group">
                                <COUNTBLACK>{Checkpassword.message}</COUNTBLACK>
                            </div>    
                            <div className="form-group">
                                <label htmlFor="user_name">이름</label>
                                <input type="text" className="form-control" id="user_name" value={myinfo.user_name} onChange={onChangeMyinfo} readOnly/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_nick">닉네임</label>
                                <input type="text" className="form-control" id="user_nick" value={myinfo.user_nick} onChange={onChangeMyinfo}/>
                            </div>
                            <div className="form-group">
                                <COUNTBLACK>{Checknick.message}</COUNTBLACK>
                            </div>  
                            <div className="form-group">
                                <label htmlFor="user_email">이메일</label>
                                <input type="text" className="form-control" id="user_email" value={myinfo.user_email} onChange={onChangeMyinfo}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_tel">전화번호</label>
                                <input type="text" className="form-control" id="user_tel" value={myinfo.user_tel} onChange={onChangeMyinfo} readOnly/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_brith">생년월일</label>
                                <input type="text" className="form-control" id="user_brith" value={myinfo.user_brith} onChange={onChangeMyinfo} readOnly/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_address">주소</label>
                                <input type="text" className="form-control" id="user_address" value={myinfo.user_address} onChange={onChangeMyinfo}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_money">보유금액</label>
                                <input type="text" className="form-control" id="user_money" value={myinfo.user_money} onChange={onChangeMyinfo} readOnly/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_signdate">가입일</label>
                                <input type="text" className="form-control" id="user_signdate" value={myinfo.user_signdate} onChange={onChangeMyinfo} readOnly/>
                            </div>
                        </form>
                        <button className="btn btn-primary" disabled={CheckCheck} onClick={myinfoUpdate}>수정하기</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Myinformation;

const COUNTBLACK = styled.span`
    color: #2e362c;
    font-weight: bold;
`;