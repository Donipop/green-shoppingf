import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function ProductInfo({ product, user }) {
  let viewProductPrice = 999999999999999999999999999999999999999999999999999; // 제일 싼 제품의 가격
  let viewProductId = 0; // 제일 싼 제품의 id
  const [listItem, setListItem] = useState([]);
  const [detailProduct, setDetailProduct] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState({
    price: "", //원래가격
    discount: "", //할인 들어간 가격
    sale: "", //할인율
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [imgList, setImgList] = useState([]);
  const [mainImg, setMainImg] = useState("");
  const [delivery, setDelivery] = useState("2500");
  const naviGate = useNavigate();
  //제품선택 눌렀을때
  const onClickAdd = (e) => {
    let key = parseInt(e.target.attributes.indexid.value);
    let checkTolistItem = false;
    listItem.map((item) => {
      if (item.id === key) {
        checkTolistItem = true;
      }
      return null;
    });
    if (checkTolistItem) {
      setListItem((listItem) => {
        return listItem.map((item) => {
          if (item.id === key) {
            item.price =
              parseInt(item.price) +
              (parseInt(product.product[key].product_price) -
                parseInt(product.product[key].product_discount));
            item.count = item.count + 1;
          }
          return item;
        });
      });
    } else {
      setListItem((listItem) => {
        return [
          ...listItem,
          {
            id: key,
            productDetailId: product.product[key].id,
            name: product.product[key].product_name,
            price: parseInt(product.product[key].product_price),
            discount: parseInt(product.product[key].product_discount),
            totalPrice:
              parseInt(product.product[key].product_price) -
              parseInt(product.product[key].product_discount),
            count: 1,
            productId: product.productId,
          },
        ];
      });
    }
  };

  //제품선택 누른후 X표시 눌렀을때
  const onClickDelete = (e) => {
    let key = parseInt(e.target.attributes.indexid.value);
    //key 랑 id가 같으면 삭제
    setListItem((listItem) => {
      return listItem.filter((item) => {
        return item.id !== key;
      });
    });
  };
  //제품선택 누른후 +,- 눌렀을때
  const onChangeCount = (e) => {
    let key = parseInt(e.target.attributes.indexid.value);
    let type = e.target.attributes.btntype.value;
    let realPrice = parseInt(product.product[key].product_price);

    setListItem((listItem) => {
      return listItem.map((item) => {
        if (item.id === key) {
          if (type === "1") {
            item.price = parseInt(item.price) + realPrice;
            item.count = item.count + 1;
          } else {
            if (item.count === 1) {
              return item;
            }
            item.price = parseInt(item.price) - realPrice;
            item.count = item.count - 1;
          }
        }
        return item;
      });
    });
  };
  //금액 변동될때 마다 총금액 계산
  useEffect(() => {
    //총 상품금액
    let total = 0;
    listItem.map((item) => {
      total = total + parseInt(item.totalPrice * item.count);
      return null;
    });
    setTotalPrice(total);
  }, [listItem]);

  useEffect(() => {
    if (product.product === undefined) {
      return;
    }
    //상세제품
    let today = new Date();
    //제목
    setTitle(product.title);

    if (product.product.length > 0) {
      //상세제품 등록
      for (let i = 0; i < product.product.length; i++) {
        let products = {
          product_name: "",
          product_price: "",
          product_discount: "",
          product_count: "",
          dateStart: "",
          dateEnd: "",
          indexId: 0,
        };
        if (
          new Date(product.product[i].dateStart) > today ||
          new Date(product.product[i].dateEnd) < today
        ) {
          continue;
        }

        products.product_name = product.product[i].product_name;
        products.product_price = product.product[i].product_price;
        products.product_discount = product.product[i].product_discount;
        products.product_count = product.product[i].product_count;
        products.dateStart = product.product[i].dateStart;
        products.dateEnd = product.product[i].dateEnd;
        products.indexId = i;
        setDetailProduct((detailProduct) => {
          return [...detailProduct, products];
        });
        let productTotalPrice = parseInt(product.product[i].product_price - product.product[i].product_discount);
        if(viewProductPrice > productTotalPrice){
          viewProductPrice = productTotalPrice;
          viewProductId = i;
        }
      }
      
      //메인 제품 가격
      if (
        product.product[viewProductId].product_discount === 0 ||
        product.product[viewProductId].product_discount === null ||
        product.product[viewProductId].product_discount === undefined ||
        product.product[viewProductId].product_discount === "0" ||
        product.product[viewProductId].product_discount === "null" ||
        product.product[viewProductId].product_discount === "undefined" ||
        product.product[viewProductId].product_discount === ""
      ) {
        console.log(viewProductPrice);
        setPrice({
          price: "",
          discount: product.product[viewProductId].product_price + "원",
          sale: "",
        });
      } else {
        setPrice({
          price: product.product[viewProductId].product_price + "원",
          discount:
            product.product[viewProductId].product_price -
            product.product[viewProductId].product_discount +
            "원",
          sale:
            Math.floor(
              (product.product[viewProductId].product_discount /
                product.product[viewProductId].product_price) *
                100
            ) + "%",
        });
      }

      //이미지 등록
      if (product.detailImg !== null) {
        for (let i = 0; i < product.detailImg.length + 1; i++) {
          let img = {
            id: "",
            url: "",
          };

          if (i === 0) {
            img.id = i;
            img.url = "http://donipop.com:3333/img/" + product.mainImg;
            setMainImg(img.url);
          } else {
            img.id = i;
            img.url = "http://donipop.com:3333/img/" + product.detailImg[i - 1];
          }
          setImgList((img2) => {
            return [...img2, img];
          });
        }
      }
    }
  }, [product]);

  const onMouseOverDetailImg = (e) => {
    let key = parseInt(e.target.attributes.indexid.value);
    setMainImg(imgList[key].url);
  };
  const onClickBuyBtn = () => {
    if (user === undefined || user === "") {
      alert("로그인이 필요합니다.");
      return;
    }
    if (totalPrice === 0) {
      alert("상품을 선택해주세요.");
      return;
    }
    let changeListItem = [];

    for (let i = 0; i < listItem.length; i++) {
      let Item = {
        name: "",
        price: 0,
        discount: 0,
        totalPrice: 0,
        count: "",
        productDetailId: "",
      };
      Item.name = listItem[i].name;
      Item.price = listItem[i].price;
      Item.discount = listItem[i].discount;
      Item.totalPrice = listItem[i].totalPrice * listItem[i].count;
      Item.count = listItem[i].count;
      Item.productDetailId = listItem[i].productDetailId;
      changeListItem.push(Item);
    }

    let data = {
      marketName: product.market_name,
      delivery: delivery,
      productId: product.productId,
      listItem: changeListItem,
    };
    naviGate("/Payment", { state: [data] });
  };

  function onClickToShoppingBasket() {
    if (user === undefined || user === "") {
      alert("로그인이 필요합니다.");
      return;
    }
    if (totalPrice === 0) {
      alert("상품을 선택해주세요.");
      return;
    }
    let changeListItem = [];
    let checkI = 0;
    for (let i = 0; i < listItem.length; i++) {
      let Item = {
        name: "",
        price: "",
        count: "",
        productDetailId: "",
      };
      Item.name = listItem[i].name;
      Item.price = listItem[i].price;
      Item.count = listItem[i].count;
      Item.productDetailId = listItem[i].productDetailId;
      changeListItem.push(Item);
      checkI = checkI + 1;
    }

    let data = {
      marketName: product.market_name,
      delivery: delivery,
      productId: product.productId,
      listItem: changeListItem,
    };
    let productDetailIdList = [];
    let countList = [];
    for (let i = 0; i < data.listItem.length; i++) {
      productDetailIdList.push(data.listItem[i].productDetailId);
      countList.push(data.listItem[i].count);
    }

    axios({
      method: "post",
      url: "/api/sellercenter/addShoppingBasket",
      data: {
        productDetailIdList: productDetailIdList,
        countList: countList,
        user_id: user.user_id,
      },
    }).then((res) => {
      alert("장바구니에 담겼습니다.");
      window.location.reload();
    });
    //naviGate("/ShoppingBasket", { state: [data] });
  }
  const onClickTalkBtn = () => {
    if (user === undefined || user === "") {
      alert("로그인이 필요합니다.");
      return;
    }
    let productId = window.location.pathname.replace("/view/", "");
    window.open(`/ct/view?p=${productId}`);
  };
  return (
    <>
      <div className="col-1">
        <ul className="list-group">
          <div>
            {imgList.map((item) => {
              return (
                <Li className="mb-1" key={item.id}>
                  <img
                    src={item.url}
                    className="card-img"
                    alt="..."
                    indexid={item.id}
                    onMouseOver={onMouseOverDetailImg}
                  ></img>
                </Li>
              );
            })}
          </div>
        </ul>
      </div>
      <div className="col-6">
        {product.mainImg !== null ? (
          <div className="card">
            <a href={mainImg} target="_blank" rel="noopener noreferrer">
              <img src={mainImg} className="card-img-top" alt="..."></img>
            </a>
          </div>
        ) : (
          <div className="card">
            <a
              href={product.mainImage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={product.mainImage}
                className="card-img-top"
                alt="..."
              ></img>
            </a>
          </div>
        )}
      </div>

      <div className="col-5">
        <h2>{title}</h2>
        <div className="row w-100 text-end">
          <div className="col-3 text-start">
            <H2>{price.sale}</H2>
          </div>
          <div className="col-5 p-0 m-0">
            <H5>
              {price.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </H5>
          </div>
          <div className="col-4 text-start p-0">
            <H2>
              {price.discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </H2>
          </div>

          <div className="mt-5 text-start col-6 w-100">
            <h5>택배배송</h5>
          </div>
          <div className="col-6 w-100 d-flex">
            <h6>
              {delivery.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            </h6>
            <H6>(주문시 결제)</H6>
          </div>
        </div>

        <div className="dropdown">
          <button
            className="btn btn-outline-primary dropdown-toggle w-100 mt-5"
            type="button"
            id="dropdownMenuButton5"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            제품선택
          </button>
          <ul
            className="dropdown-menu w-100"
            aria-labelledby="dropdownMenuButton5"
          >
            {detailProduct.map((item, index) => {
              return (
                <li key={item.product_name}>
                  <button
                    className="dropdown-item"
                    type="button"
                    indexid={item.indexId}
                    onClick={onClickAdd}
                  >
                    {item.product_name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          {/* 선택한 물품 리스트 */}
          <ul className="list-group mt-5">
            {listItem.map((item, index) => {
              return (
                <div key={item.id}>
                  <li className="d-flex justify-content-between">
                    <div className="row w-100">
                      <div className="col-11">
                        <h5>{item.name}</h5>
                      </div>

                      <div className="col-1">
                        {/* 닫기버튼 */}
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={onClickDelete}
                          indexid={item.id}
                        ></button>
                      </div>

                      {/* 아이템 추가 제거 */}
                      <div className="col-4 mt-4">
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          id="button-addon1"
                          indexid={item.id}
                          btntype="0"
                          onClick={onChangeCount}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.count}</span>
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          id="button-addon1"
                          indexid={item.id}
                          btntype="1"
                          onClick={onChangeCount}
                        >
                          +
                        </button>
                      </div>

                      {/* 가격 */}
                      <div className="col-8 text-end mt-4">
                        <h5>
                          {parseInt(item.price) === parseInt(item.totalPrice * item.count) ? null : (
                              <del style={{ color: "red" }}>
                                {item.price
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  원
                                  
                              </del>
                          )}
                        </h5>
                        <h5>
                          {(item.totalPrice * item.count)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          원
                        </h5>
                      </div>
                    </div>
                  </li>
                  <LINE />
                </div>
              );
            })}
          </ul>
        </div>
        <div className="row w-100 mt-5">
          <div className="col-6">
            <h5>총 상품금액</h5>
          </div>
          <div className="col-6 text-end">
            <h5>
              {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            </h5>
          </div>
        </div>
        <div className="row w-100 mt-5">
          <div className="col-12">
            <button
              className="btn btn-outline-secondary w-100"
              onClick={onClickBuyBtn}
            >
              구매하기
            </button>
          </div>
        </div>
        <div className="row w-100 mt-2">
          <div className="col-4">
            <button
              className="btn btn-outline-secondary w-100"
              onClick={onClickTalkBtn}
            >
              톡톡문의
            </button>
          </div>
          <div className="col-4">
            <button className="btn btn-outline-secondary w-100">찜하기</button>
          </div>
          <div className="col-4">
            <button
              onClick={onClickToShoppingBasket}
              className="btn btn-outline-secondary w-100"
            >
              장바구니
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;

const Li = styled.li`
  list-style: none;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
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
