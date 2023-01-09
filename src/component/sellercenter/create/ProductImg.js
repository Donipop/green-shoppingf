import React, {useEffect, useState} from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
export default function ProductImg({getData, UpdateData}) {
    
    const mainImgRef = useRef();
    const detailImgRef = useRef();
    const mainImgInputRef = useRef();
    const detailImgInputRef = useRef();
    const onClickImgButton = (e) => {
        if(e.target.parentElement.id === 'product-mainImg'){
            // //이미지 업로드
            mainImgInputRef.current.click();
            // 이미지 미리보기
            mainImgInputRef.current.onchange = (e) => {
                try{
                    let reader = new FileReader();
                    reader.onload = (e) => {
                    //img 태그 추가
                    let cimg = document.createElement('img');
                    cimg.src = e.target.result;
                    cimg.width = 150;
                    cimg.height = 150;
                    cimg.style.margin = '0 10px 10px 0';
                    if(mainImgRef.current.childElementCount === 0){
                        mainImgRef.current.appendChild(cimg);
                    }else{
                        mainImgRef.current.replaceChild(cimg, mainImgRef.current.childNodes[0]);
                    }
                    // 이미지 클릭시 삭제
                    cimg.onclick = (e) => {
                        e.target.remove();
                        getData("mainImgDelete", e.target.currentSrc);
                    }
                    let data = e.target.result + '___1'

                    getData('mainImg', data);
                    }
                    reader.readAsDataURL(e.target.files[0]);
                }catch{
                    console.log('이미지 업로드 실패');
                }
            }
        }
        if(e.target.parentElement.id === 'product-detailImg'){
            try{
                //5개 까지만 업로드 가능
                if(detailImgRef.current.childElementCount > 5){
                    alert('상세 이미지는 5개까지만 업로드 가능합니다.');
                    return;
                }
                detailImgInputRef.current.click();
                //이미지 미리보기
                detailImgInputRef.current.onchange = (e) => {
                    let reader = new FileReader();
                    reader.onload = (e) => {
                        //img 태그 추가
                        let cimg = document.createElement('img');
                        cimg.src = e.target.result;
                        cimg.width = 150;
                        cimg.height = 150;
                        cimg.style.margin = '0 10px 10px 0';
                        detailImgRef.current.appendChild(cimg);
                        // 이미지 클릭시 삭제
                        cimg.onclick = (e) => {
                            e.target.remove();
                            getData("detailImgDelete", e.target.currentSrc);
                        }
                        let data = e.target.result + '___0'
                        getData('detailImg', data);

                    }
                    reader.readAsDataURL(e.target.files[0]);
                }
            }catch{
                console.log('상세 이미지 업로드 실패');
            }
        }
    }

    useEffect(() => {
        if(UpdateData === undefined || UpdateData.length === 0) return;
        
        for(let i = 0; i < UpdateData[0].PRODUCTIMG.length; i++){
            let cimg = document.createElement('img');
            let mimg = document.createElement('img');

            if(UpdateData[0].PRODUCTIMG[i].ISMAIN === '1'){
                mimg.src = 'http://donipop.com:3333/img/' + UpdateData[0].PRODUCTIMG[i].FILE_NAME;
                mimg.width = 150;
                mimg.height = 150;
                mimg.style.margin = '0 10px 10px 0';
                mainImgRef.current.appendChild(mimg);
                getData('mainImg', mimg.src);
                // 이미지 클릭시 삭제
                mimg.onclick = (e) => {
                    e.target.remove();
                    getData("mainImgDelete", e.target.currentSrc);
                }
            }else{
                cimg.src = 'http://donipop.com:3333/img/' + UpdateData[0].PRODUCTIMG[i].FILE_NAME;
                cimg.width = 150;
                cimg.height = 150;
                cimg.style.margin = '0 10px 10px 0';
                getData('detailImg', cimg.src);
                detailImgRef.current.appendChild(cimg);
                
                // 이미지 클릭시 삭제
                cimg.onclick = (e) => {
                    getData("detailImgDelete", e.target.currentSrc);
                    e.target.remove();
                }
            }
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
                            <Input type={'file'} id='product-mainImg-input' accept='image/png, image/jpeg, image/jpg, image/gif' ref={mainImgInputRef}></Input>
                            <Button type='button' id='product-mainImg' onClick={onClickImgButton}>
                                <img src="https://via.placeholder.com/150?text=Add" alt="상품 이미지" />
                            </Button>
                            <div id='product-mainImgs' ref={mainImgRef}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-img_upload mt-3">
                    <div className="product-img_upload_title">
                        <h6>상세 이미지</h6>
                    </div>
                    <div className="product-img_upload_content">
                        <div className="product-img_upload_content_img">
                            <Input type='file' id='product-detailImg-input' accept='image/png, image/jpeg, image/jpg, image/gif' ref={detailImgInputRef}></Input>
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