import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {input} from "react-bootstrap";
import React, {useState, useEffect} from "react";


export default function Hello() {
    const [name, setName] = useState('');
    const [ptest, setPtest] = useState('');
    const [hoho, setHoho] = useState('');

    const [account, setAccount] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        password2: '',
        year: '',
        month: '',
        day: '',
        address: ''
    });
    const onChangeAccount = (e) => {
        setAccount({...account, [e.target.name]: e.target.value,});
    }
    useEffect (() => {
    fetch('/api/name')
    .then(response => response.text())
    .then(name => setName(name));
    });

    useEffect(() => {
        fetch('/api/hoho')
        .then(response => response.text())
        .then(hoho => setHoho(hoho));
    })
    function posttest(){
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: account,
        })
        .then(response => response.text())
        .then(name => setPtest(name));
        
    }
  return (
    <div className='container'>
      <h1>회원가입</h1>
      <div className='list-group w-auto'>

        <div className='list-group-item d-flex gap-3 py-3'>
            <div className='d-flex gap-2 w-100 justify-content-between'>
                <div className='w-100'>
                <span className='mb-0 d-block text-start'>아이디</span>
                <input id='username' name='username' onChange={onChangeAccount} className='mb-0 d-block w-100 form-control'></input>
                </div>
            </div>     
        </div>

        <div className='list-group-item d-flex gap-3 py-3'>
            <div className='d-flex gap-2 w-100 justify-content-between'>
                <div className='w-100'>
                <span className='mb-0 d-block text-start'>이메일</span>
                <input id='email' name='email' onChange={onChangeAccount} className='mb-0 d-block w-100 form-control'></input>
                </div>
            </div>     
        </div>

        <div className='list-group-item d-flex gap-3 py-3'>
            <div className='d-flex gap-2 w-100 justify-content-between'>
                <div className='w-100'>
                <span className='mb-0 d-block text-start'>비밀번호</span>
                <input id='password' name='password' onChange={onChangeAccount} className='mb-0 d-block w-100 form-control'></input>
                </div>
                <div className='w-100'>
                <span className='mb-0 d-block text-start'>비밀번호 재확인</span>
                <input id='password2' name='password2' onChange={onChangeAccount} className='mb-0 d-block w-100 form-control'></input>
                </div>
            </div>     
        </div>

        <div className='list-group-item d-flex gap-3 py-3'>
            <div className='d-flex gap-2 w-100 justify-content-between'>
                <div className='w-100'>
                <span className='mb-0 d-block text-start'>이름</span>
                <input id='name' name='name' onChange={onChangeAccount} className='mb-0 d-block w-100 form-control'></input>
                </div>
            </div>     
        </div>

        <div className='list-group-item d-flex gap-3 py-3'>
            <div className='col-12'>
                <span className='mb-1 text-start d-block'>생년월일</span>
                <div className='d-flex gap-2 w-100 justify-content-between col-12'>
                    <div className='w-100'>
                    <span className='mb-0 d-block text-start'>년</span>
                    <input id='year' name='year' onChange={onChangeAccount} className='mb-0 d-block w-100 form-control'></input>
                    </div>
                    <div className='w-100'>
                    <span className='mb-0 d-block text-start'>월</span>
                    <input id='month' name='month' onChange={onChangeAccount} className='mb-0 d-block w-100 form-control'></input>
                    </div>
                    <div className='w-100'>
                    <span className='mb-0 d-block text-start'>일</span>
                    <input id='day' name='day' onChange={onChangeAccount} className='mb-0 d-block w-100 form-control'></input>
                    </div>
                </div> 
            </div>   
        </div>

        <div className='list-group-item d-flex gap-3 py-3'>
            <div className='d-flex gap-2 w-100 justify-content-between'>
                <div className='w-100'>
                <span className='mb-0 d-block text-start'>주소</span>
                <input id='address' name='address' onChange={onChangeAccount} className='mb-0 d-block w-100 form-control'></input>
                </div>
            </div>     
        </div>

        <Button className='mt-3' onClick={posttest}>회원가입</Button>



        <div>
            {/* <h1>{name}</h1>
            <h2>{ptest}</h2> */}
            <h1>{hoho}</h1>
        </div>
      </div>
      
    </div>
  );
}