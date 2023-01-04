import React, {useEffect, useState} from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
export default function ProductImg({getData, UpdateData}) {
    
    const mainImgRef = useRef();
    const detailImgRef = useRef();

    const onClickImgButton = (e) => {
        
        if(e.target.parentElement.id === 'product-mainImg'){
            //png, jpg, jpeg, gif만 업로드 가능
            document.getElementById('product-mainImg-input').accept = 'image/png, image/jpeg, image/jpg, image/gif';
            //이미지 업로드
            document.getElementById('product-mainImg-input').click();
            //이미지 미리보기
            document.getElementById('product-mainImg-input').onchange = (e) => {
                let reader = new FileReader();
                reader.onload = (e) => {
                    document.getElementById('product-mainImg').firstChild.src = e.target.result;
                    getData('mainImg', e.target.result);
                }
                reader.readAsDataURL(e.target.files[0]);
                
                
            }
        }
        if(e.target.parentElement.id === 'product-detailImg'){
            //5개 까지만 업로드 가능
            if(document.getElementById('product-detailImgs').childElementCount > 5){
                alert('상세 이미지는 5개까지만 업로드 가능합니다.');
                return;
            }
            //png, jpg, jpeg, gif만 업로드 가능
            document.getElementById('product-detailImg-input').accept = 'image/png, image/jpeg, image/jpg, image/gif';
            //이미지 업로드
            document.getElementById('product-detailImg-input').click();
            //이미지 미리보기
            document.getElementById('product-detailImg-input').onchange = (e) => {
                let reader = new FileReader();
                reader.onload = (e) => {
                    //img 태그 추가
                    let cimg = document.createElement('img');
                    cimg.src = e.target.result;
                    cimg.width = 150;
                    cimg.height = 150;
                    cimg.style.margin = '0 10px 10px 0';
                    
                    document.getElementById('product-detailImgs').appendChild(cimg);

                    getData('detailImg', e.target.result);

                }
                reader.readAsDataURL(e.target.files[0]);
            }
        }
    }

    useEffect(() => {
        if(UpdateData === undefined || UpdateData.length === 0) return;
        mainImgRef.current.src = 'http://donipop.com:3333/img/' + UpdateData[0].PRODUCTIMG[0].FILE_NAME;
        for(let i = 1; i < UpdateData[0].PRODUCTIMG.length; i++){
            let cimg = document.createElement('img');
            cimg.src = 'http://donipop.com:3333/img/' + UpdateData[0].PRODUCTIMG[i].FILE_NAME;
            cimg.width = 150;
            cimg.height = 150;
            cimg.style.margin = '0 10px 10px 0';
            detailImgRef.current.appendChild(cimg);
        }

    }, [UpdateData])
    return(
        <>
            <div className="product-img">

                <div className="product-img_upload">
                    <div className="product-img_upload_title">
                        <h6>대표 이미지</h6>
                    </div>
                    <div className="product-img_upload_content d-flex">
                        <div className="product-img_upload_content_img">
                            <Input type={'file'} id='product-mainImg-input'></Input>
                            <Button type='file' id='product-mainImg' onClick={onClickImgButton}>
                                <img src="https://via.placeholder.com/150?text=Add" alt="상품 이미지" ref={mainImgRef} />
                            </Button>
                            
                        </div>
                    </div>
                </div>

                <div className="product-img_upload mt-3">
                    <div className="product-img_upload_title">
                        <h6>상세 이미지</h6>
                    </div>
                    <div className="product-img_upload_content">
                        <div className="product-img_upload_content_img">
                            <Input type={'file'} id='product-detailImg-input'></Input>
                            <Button id='product-detailImg' onClick={onClickImgButton}>
                                <img src="https://via.placeholder.com/150?text=Add" alt="상품 이미지" />
                            </Button>
                            <div id='product-detailImgs' ref={detailImgRef}>
                                <p>상세 이미지는 최대 5개까지 등록 가능합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

const Button = styled.button`
    width: 150px;
    height: 150px;
    background-color: #fff;
    border: 1px solid #ced4da;
    cursor: pointer;
    margin: 0;
    padding: 0;
    img {
        width: 150px;
        height: 150px;
        margin: 0;
        padding: 0;
    }
`
const Input = styled.input`
    display: none;
`