////////////////////////////////////
// 상품등록 페이지
////////////////////////////////////
import React, { useEffect, useState } from 'react';
import '../../css/create.css'
import axios from 'axios';

/**
 * 상품등록 페이지 컴포넌트
 * @returns create page
 */
function Create(){
    const [categorylist, setCategorylist] = useState({
        category1: [],
        category2: [],
        category3: [],
        category4: []
    });
    
    useEffect(() => {
        get_CategoryList().then(res =>{
            setCategorylist(categorylist => {
                return {
                    ...categorylist, category1: res
                }
            });
        })
    },[]);
    

    const [category, setCategory] = useState({
        category1: '',
        category2: '',
        category3: '',
        category4: ''
    });
    /**
     * dropdown menu에서 선택한 카테고리를 state에 저장
     * 
     */
    const onChangeCategory = (e) => {
        // setCategory( {...category, [e.target.parentElement.id]: e.target.innerText})
        if (e.target.parentElement.id.split('category')[1] !== '1'){
            setCategory((category) => {
                return {
                    ...category, [e.target.parentElement.id]: ' > ' + e.target.innerText
                }
            })
            
        }else{
            categorylist.category1.forEach((category) => {
                if (category.name === e.target.innerText){
                    console.log(category.num);
                }
            })
            setCategory((category) => {
                return {
                    ...category, [e.target.parentElement.id]: e.target.innerText
                }
            })
        }
    }
    
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

                                        {categorylist.category1.map((category) => (
                                            <li key={category.num} className='list-group-item list-group-item-action' onClick={onChangeCategory}>
                                            {category.name}
                                        </li>))}

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
/**
 * 
 * @param {String} parent_num 
 * @returns 입력한 부모를 가진 카테고리 리스트
 */
function get_CategoryList(parent_num){
    const re = axios.get('http://localhost:3000/api/sellercenter/getcategory', {
        params: {
            parent_num: parent_num
        }
    })
    return re.then((res) => {
        console.log("카테고리 리스트 가져오기 성공");
        // console.log(res.data);
        return res.data;
        }).catch((err) => {
        return err;
        })
}
export default Create;