import React, { useState } from "react";
import styled from "styled-components";
function ProductInfo(){
    const [listItem, setListItem] = useState([]);
    let item = {
        id: 0,
        price: 0,
        name: '',
        count: 0,
    }
    const onClickAdd = (e) => {
        console.log(e.target);
        item.id = 1;
        item.price = 10000;
        item.name = '아이템1';
        item.count = 1;
        setListItem((listItem) => {
            return [...listItem, item]
        });
    }
    const onClickDelete = (id) => {
        setListItem((listItem) => {
            return listItem.filter((item) => item.id !== id)
        })
    }
    const onChange = (e) => {
        
    }
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
                    <div className="col-3 text-start">
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
                    <li><button className="dropdown-item" type="button" onClick={onClickAdd}>아이템1</button></li>
                    <li><button className="dropdown-item" type="button">아이템2</button></li>
                    <li><button className="dropdown-item" type="button">아이템3</button></li>
                    </ul>
                </div>
                <div>
                    {/* 선택한 물품 리스트 */}
                    <ul className="list-group mt-5">
                        {listItem.map((item, index) => {
                            return (
                                <>
                                    <li className="d-flex justify-content-between" key={index} id={index}>
                                        <div className="row w-100">
                                            <div className="col-11">
                                                <h5>{listItem.name}</h5>
                                            </div>
                                            <div className="col-1">
                                                {/* 닫기버튼 */}
                                                <button type="button" className="btn-close" aria-label="Close"></button>
                                            </div>
                                            {/* 아이템 추가 제거 */}
                                            <div className="col-4 mt-4">
                                                <button className="btn btn-outline-secondary" type="button" id="button-addon1">-</button>
                                                <span className="mx-2">{listItem.count}</span>
                                                <button className="btn btn-outline-secondary" type="button" id="button-addon1">+</button>
                                            </div>
                                            {/* 가격 */}
                                            <div className="col-8 text-end mt-4">
                                                <h5>{listItem.price}원</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <LINE />
                                </>
                            )})}
                    </ul>
                </div>
                <div className="row w-100 mt-5">
                    <div className="col-6">
                        <h5>총 상품금액</h5>
                    </div>
                    <div className="col-6 text-end">
                        <h5>24,900원</h5>
                    </div>
                </div>
                <div className="row w-100 mt-5">
                    <div className="col-12">
                        <button className="btn btn-outline-secondary w-100">구매하기</button>
                    </div>
                </div>
                <div className="row w-100 mt-2">
                    <div className="col-4">
                        <button className="btn btn-outline-secondary w-100">톡톡문의</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-outline-secondary w-100">찜하기</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-outline-secondary w-100">장바구니</button>
                    </div>
                </div>
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

const LINE = styled.div`
    width: 100%;
    border-bottom: 1px solid #000;
    margin: 10px 0;
    display: block;
`;