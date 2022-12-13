////////////////////////////////////
// 상품등록 페이지
////////////////////////////////////
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../../css/create.css'
import CategorySelect from './create/CategorySelect';
import ProductImg from './create/ProductImg';
import ProductName from './create/ProductName';
import ProductPrice from './create/ProductPrice';
import ProductContent from './create/ProductContent';
import ProductAdd from './create/ProductAdd';

/**
 * 상품등록 페이지 컴포넌트
 * @returns create page
 */
function Create(){
    const [product, setProduct] = useState({
        category: [],
        name: '',
        price: '',
        content: '',
        img: '',
    });

    const onClickCreate = () => {
        console.log(product);
    }

    const getData = (dataType,data) => {
        console.log(data);
        if (dataType === 'category'){
            setProduct((product) => {
                return {
                    ...product, category: data
                }
            })
        }
    }
    return(
        <>
        <div className='w-100'>
            <div className="m-2">
                <div className="alert alert-primary" role={'alert'}>
                    <h3 className='m-0'>상품등록</h3>
                </div>
                
                <div className="alert alert-secondary" role={'alert'}>
                    <h3 className='m-0 d-inline-flex mb-3'>카테고리</h3>
                    <button className='alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#create-category' aria-expanded='false'></button>
                        <div className='collapse row' id='create-category'>
                            <CategorySelect getData={getData} />
                        </div>
                </div>

                <div className="alert alert-secondary" role={'alert'}>
                    <h3 className='m-0 d-inline-flex mb-3'>상품명</h3>
                    <button className='alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#product-name' aria-expanded='false'></button>
                        <div className='collapse row' id='product-name'>
                            <ProductName />
                        </div>
                </div>

                <div className="alert alert-secondary" role={'alert'}>
                    <h3 className='m-0 d-inline-flex mb-3'>판매가</h3>
                    <button className='alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#product-price' aria-expanded='false'></button>
                        <div className='collapse row' id='product-price'>
                            <ProductPrice />
                        </div>
                </div>

                <div className="alert alert-secondary" role={'alert'}>
                    <h3 className='m-0 d-inline-flex mb-3'>상품 이미지</h3>
                    <button className='alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#product-img' aria-expanded='false'></button>
                        <div className='collapse row' id='product-img'>
                            <ProductImg />
                        </div>
                </div>

                <div className="alert alert-secondary" role={'alert'}>
                    <h3 className='m-0 d-inline-flex mb-3'>상세 설명</h3>
                    <button className='alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#product-content' aria-expanded='false'></button>
                        <div className='collapse row' id='product-content'>
                            <ProductContent />
                        </div>
                </div>

                <div className="alert alert-secondary" role={'alert'}>
                    <h3 className='m-0 d-inline-flex mb-3'>추가상품</h3>
                    <button className='alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#product-add' aria-expanded='false'></button>
                        <div className='collapse row' id='product-add'>
                            <ProductAdd />
                        </div>
                </div>
                {/* 푸터 공간 확보 */}
                <Div>
                </Div>
            </div>
        </div>
        
        {/* 밑에 따라다니는 푸터 */}
        <div className='fixed-bottom'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <div className='p-3' style={{backgroundColor: '#dee2e6'}}>
                        <div className='row justify-content-center'>
                            <div className='col-3'>
                                <button className='btn btn-primary w-100' onClick={onClickCreate}>등록</button>
                            </div>

                            <div className='col-3'>
                                <button className='btn btn-secondary w-100'>미리보기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
        
    );
}

export default Create;

const Div = styled.div`
    height: 50px; 
    display: inline-block;
`;