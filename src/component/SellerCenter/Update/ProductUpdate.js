import ProductUpdateSelect from "./ProductUpdateSelect";
import { useEffect, useState } from "react";
import CategorySelect from "../create/CategorySelect";
import ProductImg from "../create/ProductImg";
import ProductName from "../create/ProductName";
import ProductContent from "../create/ProductContent";
import ProductAdd from "../create/ProductAdd";
import axios from "axios";

function ProductUpdate({ user, marketName }) {
  const [updateproduct, setUpdateProduct] = useState([]);
  const [productDetail, setProductDetail] = useState([]);
  const [product, setProduct] = useState({
    category: "",
    title: "",
    cont: "",
    mainImg: "",
    detailImg: [],
    product: [],
    marketName: user.marketName,
    event: "",
    userId: user.user_id,
    id: "",
  });
  useEffect(() => {
    if(marketName === undefined) return;
    setProduct((product) => {
      return {
        ...product,
        marketName: marketName,
      };
    });
  }, [marketName]);
  useEffect(() => {
    if (updateproduct?.id === undefined) return;
    setProduct((product) => {
      return {
        ...product,
        id: updateproduct.id,
      };
    });

    axios
      .get("/api/sellercenter/getproductdetailandimg", {
        params: {
          productId: updateproduct.id,
        },
      })
      .then((res) => {
        setProductDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateproduct]);

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

  const onClickUpdate = () => {
    if (
      product.category === "" &&
      product.title === "" &&
      product.cont === undefined &&
      product.mainImg === "" &&
      product.detailImg.length === 0 &&
      product.product.length === 0
    ) {
      alert("수정할 내용이 없습니다.");
      return;
    }
    console.log(product);
    axios
      .put("/api/sellercenter/product", product)
      .then((res) => {
        // console.log(product);
        alert('수정되었습니다.');
        
        // console.log("수정되었습니다.");

        window.location.href = "/sellercenter/update";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onClickProductDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios
        .post("/api/sellercenter/deleteProduct", {
          productId: parseInt(product.id),
        })
        .then((res) => {
          alert("삭제되었습니다.");
          
        });
    } else {
      alert("취소되었습니다.");
    }
  };
  return (
    <div className="w-100">
      <div className="row">
        <div className="col-12 w-100">
          <div className="alert alert-secondary" role={"alert"}>
            <h1>상품 수정</h1>
          </div>

          <div className="alert alert-secondary" role={"alert"}>
            <ProductUpdateSelect
              getProductData={setUpdateProduct}
              marketName={marketName}
            />
          </div>
        </div>

        <div className="col-12 w-100">
          <div className="alert alert-secondary" role={"alert"}>
            <h3 className="m-0 d-inline-flex mb-3">카테고리</h3>
            <button
              className="alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#create-category"
              aria-expanded="false"
            ></button>
            <div className="collapse row" id="create-category">
              <CategorySelect getData={getData} UpdateData={updateproduct} />
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
              <ProductName getData={getData} UpdateData={updateproduct} />
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
              <ProductImg getData={getData} UpdateData={productDetail} />
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
              <ProductContent getData={getData} UpdateData={updateproduct} />
            </div>
          </div>

          <div className="alert alert-secondary" role={"alert"}>
            <h3 className="m-0 d-inline-flex mb-3">상품추가2</h3>
            <button
              className="alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#product-add"
              aria-expanded="false"
            ></button>
            <div className="collapse row" id="product-add">
              <ProductAdd getData={getData} UpdateData={productDetail} />
            </div>
          </div>
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
                    onClick={onClickUpdate}
                  >
                    수정
                  </button>
                </div>
                <div className="col-3">
                  <button className="btn btn-secondary w-100">미리보기</button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-danger w-100"
                    onClick={onClickProductDelete}
                  >
                    삭제
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductUpdate;
