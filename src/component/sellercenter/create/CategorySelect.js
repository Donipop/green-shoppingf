import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CategorySelect({getData, UpdateData}){
    const [categorylist, setCategorylist] = useState({
        category1: [],
        category2: [],
        category3: [],
        category4: []
    });
    const [current_Categoy,setcurrent_Category] = useState("");
    //렌더후 대분류 카테고리 목록을 가져옴
    useEffect(() => {
        get_CategoryList().then(res =>{
            setCategorylist(categorylist => {
                return {
                    ...categorylist, category1: res
                }
            });
        })
    },[]);

    useEffect(() => {
        console.log(UpdateData);
    },[UpdateData]);
    
    
    
    
    const [category, setCategory] = useState({
        category1: '',
        category2: '',
        category3: '',
        category4: '',
        category_num1: '',
        category_num2: '',
        category_num3: '',
        category_num4: ''
    });

    useEffect(() => {
        //getData("category",category);
        getData("category",current_Categoy);
    },[current_Categoy]);
    /**
     * dropdown menu에서 선택한 카테고리를 state에 저장
     * 
     */
    const onChangeCategory = ((e) => {
        let num = Number(e.target.parentElement.id.split('category')[1]) + 1;
    
        //대분류를 제외한 카테고리를 선택했을 때
        if (e.target.parentElement.id.split('category')[1] !== '1'){
            categorylist['category' + (num-1)].forEach((category) => {
                if (category.name === e.target.innerText){
                    setCategory((ca) => {
                        return {
                            
                            //선택한 카테고리의 상위 카테고리를 제외한 하위 카테고리는 초기화
                            ...ca, ['category_num' + (num-1)]: category.num, ['category' + (num-1)]: ' > ' + e.target.innerText,
                             ['category' + (num)]: '', ['category' + (num + 1)]: '', ['category' + (num + 2)]: '',
                              ['category_num' + (num)]: '', ['category_num' + (num + 1)]: '', ['category_num' + (num + 2)]: ''

                              
                        }
                        
                    })
                    setcurrent_Category((current_Categoy) => category.num);
                    //선택한 카테고리의 하위 카테고리 목록을 가져옴
                    get_CategoryList(category.num).then(res =>{
                        console.log(categorylist);
                        setCategorylist(categorylist => {
                            return {
                                ...categorylist, ['category' + num]: res, ['category' + (num + 1)]: [], ['category' + (num + 2)]: []
                            }
                        });
                    })
                }
            })
            
            
        }else{
            let num = Number(e.target.parentElement.id.split('category')[1]) + 1;
            //대분류를 선택했을 때
            categorylist.category1.forEach((category) => {
                if (category.name === e.target.innerText){
                    setCategory((ca) => {
                        return {
                            //대분류를 선택했기에 2,3,4번째 카테고리는 초기화
                            ...ca, category_num1: category.num,category1: e.target.innerText,
                             category2: '', category3: '', category4: '', category_num2: '', category_num3: '', category_num4: ''
                        }
                    })
                    setcurrent_Category((current_Categoy)=> category.num);
                    //대분류를 선택했기에 2번째 카테고리 목록을 가져옴
                    get_CategoryList(category.num).then(res =>{
                        setCategorylist(categorylist => {
                            return {
                                ...categorylist, ['category' + num]: res, ['category' + (num + 1)]: [], ['category' + (num + 2)]: [], ['category' + (num + 3)]: []
                            }
                        });
                    })
                }
            })
        }


    });
    return(
        <>
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

                    {categorylist.category2.map((category) => (
                        <li key={category.num} className='list-group-item list-group-item-action' onClick={onChangeCategory}>
                        {category.name}
                    </li>))}

                </ul>
            </div>

            <div className='col-3'>
                <ul className='list-group list-group-flush scrollarea' id='category3'>
                    {categorylist.category3.map((category) => (
                        <li key={category.num} className='list-group-item list-group-item-action' onClick={onChangeCategory}>
                        {category.name}
                    </li>))}

                </ul>
            </div>

            <div className='col-3'>
                <ul className='list-group list-group-flush scrollarea' id='category4'>

                    {categorylist.category4.map((category) => (
                        <li key={category.num} className='list-group-item list-group-item-action' onClick={onChangeCategory}>
                        {category.name}
                    </li>))}

                </ul>
            </div>

            <div className='col mt-3'>
                <h4>선택한 카테고리: {category.category1}{category.category2}{category.category3}{category.category4}</h4>
            </div>
        </>
    )
}

/**
 * 
 * @param {String} parent_num 
 * @returns 입력한 부모를 가진 카테고리 리스트
 */
 function get_CategoryList(parent_num){
    
    const re = axios({
        method: "get",
        url: "/api/sellercenter/getcategory",
        params: {
            parent_num: parent_num
        },
    })
    return re.then((res) => {
        return res.data;
        }).catch((err) => {
        return err;
        })
}

export default CategorySelect;