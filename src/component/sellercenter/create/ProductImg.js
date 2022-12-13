import React, {useState} from 'react';
import styled from 'styled-components';
export default function ProductImg() {
    const [img, setImg] = useState({
        mainImg: '',
        detailImg: [],
    });

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
                    let img = document.createElement('img');
                    img.src = e.target.result;
                    img.width = 150;
                    img.height = 150;
                    img.style.margin = '0 10px 10px 0';
                    
                    document.getElementById('product-detailImgs').appendChild(img);
                }
                reader.readAsDataURL(e.target.files[0]);
            }
        }
    }
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
                                <img src="https://via.placeholder.com/150?text=Add" alt="상품 이미지" />
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
                            <div id='product-detailImgs'>
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