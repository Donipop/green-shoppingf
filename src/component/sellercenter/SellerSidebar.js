import logo from '../../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/sellersidebar.css';
import React from 'react';

export default Sidebar;

function Sidebar(){
    return(
        <div>
            <div id='sellersidebar' className='d-flex flex-nowrap'>
                <div className="flex-shrink-0 p-3 bg-dark" style={{width: 280}}>
                    <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                        <img src={logo} className='col-3' style={{width: 82, height:42}} alt='logo' />
                    </a>

                    <ul className='list-unstyled ps-0 bg-white m-0 p-0'>
                        <li className='mb-1'>
                            <button className='btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#sell-collapse' aria-expanded='false'>
                                판매관리
                            </button>
                            <div className='collapse' id='sell-collapse'>
                                <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
                                    <li>
                                        <a href='/' className='link-white d-inline-flex text-decoration-none rounded'>1번</a>
                                    </li>
                                    <li>
                                        <a href='/' className='link-white d-inline-flex text-decoration-none rounded'>2번</a>
                                    </li>
                                    <li>
                                        <a href='/' className='link-white d-inline-flex text-decoration-none rounded'>3번</a>
                                    </li>
                                    <li>
                                        <a href='/' className='link-white d-inline-flex text-decoration-none rounded'>4번</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='mb-1'>
                        <button className='btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#sell-collapse2' aria-expanded='false'>
                                마켓관리
                            </button>
                            <div className='collapse' id='sell-collapse2'>
                                <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
                                    <li>
                                        <a href='/' className='link-white d-inline-flex text-decoration-none rounded'>1번</a>
                                    </li>
                                    <li>
                                        <a href='/' className='link-white d-inline-flex text-decoration-none rounded'>2번</a>
                                    </li>
                                    <li>
                                        <a href='/' className='link-white d-inline-flex text-decoration-none rounded'>3번</a>
                                    </li>
                                    <li>
                                        <a href='/' className='link-white d-inline-flex text-decoration-none rounded'>4번</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
}