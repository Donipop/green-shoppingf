////////////////////////////////////
// 상품등록 페이지
////////////////////////////////////
import React, { useState } from 'react';
import '../css/create.css'



function Create(){
    const [category, setCategory] = useState({
        category1: '',
        category2: '',
        category3: '',
        category4: ''
    });

    const onChangeCategory = (e) => {
        // setCategory( {...category, [e.target.parentElement.id]: e.target.innerText})
        if (e.target.parentElement.id.split('category')[1] !== '1'){
            setCategory((category) => {
                return {
                    ...category, [e.target.parentElement.id]: ' > ' + e.target.innerText
                }
            })
        }else{
            setCategory((category) => {
                return {
                    ...category, [e.target.parentElement.id]: e.target.innerText
                }
            })
        }
    }
    // for(let i in category){
    //     console.log(category[i])
    // }
    // const onChangeAccount = (e) => {
    //     setAccount({...account, [e.target.name]: e.target.value,});
    // }
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
                                <div className='col-3'>
                                    <ul className='list-group list-group-flush scrollarea' id='category1'>
                                        <li className='list-group-item list-group-item-action' onClick={onChangeCategory}>
                                            카테고리 대분류
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                    </ul>
                                </div>

                                <div className='col-3'>
                                    <ul className='list-group list-group-flush scrollarea' id='category2'>
                                        <li className='list-group-item list-group-item-action' onClick={onChangeCategory}>
                                            카테고리 중분류
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                    </ul>
                                </div>

                                <div className='col-3'>
                                    <ul className='list-group list-group-flush scrollarea' id='category3'>
                                        <li className='list-group-item list-group-item-action' onClick={onChangeCategory}>
                                            소분류
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                    </ul>
                                </div>

                                <div className='col-3'>
                                    <ul className='list-group list-group-flush scrollarea' id='category4'>
                                        <li className='list-group-item list-group-item-action' onClick={onChangeCategory}>
                                            라스트팡!
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            내용
                                        </li>
                                    </ul>
                                </div>

                                <div className='col mt-3'>
                                    <h4>선택한 카테고리: {category.category1}{category.category2}{category.category3}{category.category4}</h4>
                                </div>
                            </div>
                </div>

            </div>
        </div>
    );
}
export default Create;