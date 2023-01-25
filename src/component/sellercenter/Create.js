////////////////////////////////////
// 상품등록 페이지
////////////////////////////////////
import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import "../../css/create.css";
import CategorySelect from "./create/CategorySelect";
import ProductImg from "./create/ProductImg";
import ProductName from "./create/ProductName";
import ProductContent from "./create/ProductContent";
import ProductAdd from "./create/ProductAdd";
import axios from "axios";

/**
 * 상품등록 페이지 컴포넌트
 * @returns create page
 */
function Create({ user, marketName }) {
  const [product, setProduct] = useState({
    category: "",
    title: "",
    cont: "",
    mainImg: "",
    detailImg: [""],
    product: [""],
    market_name: user.marketName,
    event: "",
    userId: user.user_id,
  });
  useEffect(() => {
    setProduct((product) =>{
      return{
        ...product, market_name: marketName
      }
    })
  }, [marketName]);

  const onClickCreate = () => {
    axios.post("/api/sellercenter/create", product).then((res) => {
      if (res.data === "success") {
        alert("상품등록이 완료되었습니다.");
      } else {
        alert(res.data);
      }
    });
    console.log(product);
  };

  const getData = (dataType, data) => {
    if (dataType === "category") {
      setProduct((product) => {
        return {
          ...product,
          category: data,
        };
      });
    }

    if (dataType === "title") {
      setProduct((product) => {
        return {
          ...product,
          title: data,
        };
      });
    }

    if (dataType === "content") {
      setProduct((product) => {
        return {
          ...product,
          cont: data,
        };
      });
    }

    if (dataType === "mainImg") {
      setProduct((product) => {
        return {
          ...product,
          mainImg: data,
        };
      });
    }
    if (dataType === "detailImg") {
      setProduct((product) => {
        return {
          ...product,
          detailImg: [...product.detailImg, data],
        };
      });
    }
    if (dataType === "product") {
      setProduct((product) => {
        return {
          ...product,
          product: data,
        };
      });
    }
    if (dataType === "mainImgDelete") {
      setProduct((product) => {
        return {
          ...product,
          mainImg: "",
        };
      });
    }
    if (dataType === "detailImgDelete") {
      setProduct((product) => {
        return {
          ...product,
          detailImg: product.detailImg.filter((item) => item !== data),
        };
      });
    }
  };

  return (
    <>
      <div className="w-100">
        <div className="m-2">
          <div className="alert alert-primary" role={"alert"}>
            <h3 className="m-0">상품등록</h3>
          </div>

          <div className="alert alert-secondary" role={"alert"}>
            <h3 className="m-0 d-inline-flex mb-3">카테고리</h3>
            <button
              className="alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#create-category"
              aria-expanded="false"
            ></button>
            <div className="collapse row" id="create-category">
              <CategorySelect getData={getData} />
            </div>
          </div>

          <div className="alert alert-secondary" role={"alert"}>
            <h3 className="m-0 d-inline-flex mb-3">상품 페이지명</h3>
            <button
              className="alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#product-name"
              aria-expanded="false"
            ></button>
            <div className="collapse row" id="product-name">
              <ProductName getData={getData} />
            </div>
          </div>

          <div className="alert alert-secondary" role={"alert"}>
            <h3 className="m-0 d-inline-flex mb-3">상품 이미지</h3>
            <button
              className="alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#product-img"
              aria-expanded="false"
            ></button>
            <div className="collapse row" id="product-img">
              <ProductImg getData={getData} />
            </div>
          </div>

          <div className="alert alert-secondary" role={"alert"}>
            <h3 className="m-0 d-inline-flex mb-3">상세 설명</h3>
            <button
              className="alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#product-content"
              aria-expanded="false"
            ></button>
            <div className="collapse row" id="product-content">
              <ProductContent getData={getData} />
            </div>
          </div>

          {/* <div className="alert alert-secondary" role={'alert'}>
                    <h3 className='m-0 d-inline-flex mb-3'>판매가</h3>
                    <button className='alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#product-price' aria-expanded='false'></button>
                        <div className='collapse row' id='product-price'>
                            <ProductPrice />
                        </div>
                </div> */}

          <div className="alert alert-secondary" role={"alert"}>
            <h3 className="m-0 d-inline-flex mb-3">상품추가</h3>
            <button
              className="alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#product-add"
              aria-expanded="false"
            ></button>
            <div className="collapse row" id="product-add">
              <ProductAdd getData={getData} />
            </div>
          </div>
          {/* 푸터 공간 확보 */}
          <Div></Div>
        </div>
      </div>

      {/* 밑에 따라다니는 푸터 */}
      <div className="fixed-bottom">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="p-3" style={{ backgroundColor: "#dee2e6" }}>
              <div className="row justify-content-center">
                <div className="col-3">
                  <button
                    className="btn btn-primary w-100"
                    onClick={onClickCreate}
                  >
                    등록
                  </button>
                </div>

                <div className="col-3">
                  <button className="btn btn-secondary w-100">미리보기</button>
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
