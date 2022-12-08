import React from 'react';
import styled from 'styled-components';
export default function ProductImg() {
    return(
        <>
            <div className="product-img">

                <div className="product-img_upload">
                    <div className="product-img_upload_title">
                        <h6>대표 이미지</h6>
                    </div>
                    <div className="product-img_upload_content d-flex">
                        <div className="product-img_upload_content_img">
                            <Button>
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
                            <Button>
                                <img src="https://via.placeholder.com/150?text=Add" alt="상품 이미지" />
                            </Button>
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