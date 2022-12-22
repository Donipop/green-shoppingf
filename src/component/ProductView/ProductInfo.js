import React from "react";
import styled from "styled-components";
function ProductInfo(){

    return(
        <>
            <div className="col-1">
                <ul className="list-group">
                    <Li className="mb-1">
                        <img src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90" className="card-img">
                        </img>
                    </Li>
                    <Li className="mb-1">
                        <img src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90" className="card-img">
                        </img>
                    </Li>
                    <Li className="mb-1">
                        <img src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90" className="card-img">
                        </img>
                    </Li>
                </ul>
            </div>
            <div className="col-6">
                <div className="card">
                    <img src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90" className="card-img" alt="..."></img>
                </div>
            </div>

            <div className="col-5">
                <h2>캐시미어 머플러 남자 여자 커플 목도리 TWCM804</h2>
                <div className="row w-100 text-end">
                    <div className="col-3">
                        <H2>56%</H2>
                    </div>
                    <div className="col-5 p-0 m-0">
                        <H5>59,000원</H5>
                    </div>
                    <div className="col-4 text-start p-0">
                        <H2>24,900원</H2>
                    </div>
                    

                    <div className="mt-5 text-start col-6 w-100">
                        <h5>택배배송</h5>
                    </div>
                    <div className="col-6 w-100 d-flex">
                        <h6>2,500원</h6>
                        <H6>(주문시 결제)</H6>
                    </div>
                   
                </div>
                
                <div className="dropdown">
                    <button className="btn btn-outline-primary dropdown-toggle w-100 mt-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        제품선택
                    </button>
                    <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                    <li><button className="dropdown-item" type="button">아이템1</button></li>
                    <li><button className="dropdown-item" type="button">아이템2</button></li>
                    <li><button className="dropdown-item" type="button">아이템3</button></li>
                    </ul>
                </div>
                <div>
                    {/* 선택한 물품 리스트 */}
                    <ul className="list-group mt-5">
                        <li className="d-flex justify-content-between">
                            <div className="row w-100">
                                <div className="col-11">
                                    <h5>아이템1</h5>
                                </div>
                                <div className="col-1">
                                    {/* 닫기버튼 */}
                                    <button type="button" className="btn-close" aria-label="Close"></button>
                                </div>
                                {/* 아이템 추가 제거 */}
                                <div className="col-4 mt-4">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon1">-</button>
                                    <span className="mx-2">1</span>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon1">+</button>
                                </div>
                                {/* 가격 */}
                                <div className="col-8 text-end mt-4">
                                    <h5>24,900원</h5>
                                </div>
                                
                            </div>
                            <HR/>
                        </li>
                    </ul>
                </div>
                <h5>구매하기</h5>
                <h5>톡톡문의</h5>
                <h5>찜하기</h5>
                <h5>장바구니</h5>
            </div>
        </>
    )
}

export default ProductInfo;

const Li = styled.li`
    list-style: none;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    background-color: #fff;
    cursor: pointer;
    &:hover{
        border: 1px solid #000;
    }
`;

const H5 = styled.h5`
    text-decoration: line-through;
    color: #999;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
`;

const H2 = styled.h2`
    color: #f00;
    padding: 0;
`;

const H6 = styled.h6`
    color: green;
`;

const HR = styled.hr`
    /* border 가로선 */
    border: 1px solid red;

`;