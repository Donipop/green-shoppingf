import Header from './Header'
import logo from '../logo.svg'
import React from 'react';
export default Index;

function Index(){

    return(
        <div className='container'>
            <div className='row justify-content-center mt-3'>
                    <img src={logo} className='col-3' style={{width: 82, height:42}}></img>
                <div  className='col-9'>
                    <Header/>
                </div>
                    <h2>ㅎㅇ</h2>
            </div>
            
        </div>
        
    );

}