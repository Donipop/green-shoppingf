////////////////////////////////////
// 상품등록 페이지
////////////////////////////////////
import React, { useEffect, useState } from 'react';
import '../../css/create.css'
import CategorySelect from './create/CategorySelect';


/**
 * 상품등록 페이지 컴포넌트
 * @returns create page
 */
function Create(){
    return(
        <div className='w-100'>
            <div className="m-2">
                <div className="alert alert-primary" role={'alert'}>
                    <h3 className='m-0'>상품등록</h3>
                </div>
                
                <div className="alert alert-secondary" role={'alert'}>
                    <h3 className='m-0 d-inline-flex mb-3'>카테고리</h3>
                    <button className='alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#create-category' aria-expanded='false'></button>
                        <div className='collapse row' id='create-category'>
                            <CategorySelect />
                        </div>
                </div>

            </div>
        </div>
    );
}

export default Create;