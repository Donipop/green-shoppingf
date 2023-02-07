import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";

function ProductUpdateTable({ getProductData, marketName }) {
  const [product, setProduct] = useState([]);
  const selectProductRef = useRef([]);
  useEffect(() => {
    if (marketName === undefined) {
      return;
    }
    axios
      .get("/api/sellercenter/getproducttb", {
        params: {
          marketName: marketName,
        },
      })
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [marketName]);
  const onChangeProduct = (e) => {
    let item = selectProductRef.current.filter(item => item.value === e.target.value);
    if(item.length === 0) {return;}
    let itemIndex = item[0].attributes["data-id"].value;
    // getProductData(product[itemIndex]);
    axios.get("/api/sellercenter/product",{
      params: {
        productId: product[itemIndex].ID
      }
    }).then(res => {
      getProductData(res.data);
    });
  };
  return (
    <div>
      <label>
        상품선택:
        <Input list="products" name="productInput" onChange={(e) => onChangeProduct(e)} />
      </label>
      <datalist id="products">
        {product.map((item, index) => {
          return (
            <option value={item.TITLE} key={item.ID} ref={(el) => selectProductRef.current[index] = el} data-id={index} >
              
            </option>
          );
        })}
      </datalist>
      {/* <select onChange={onChangeProduct}>
        
      </select> */}
    </div>
  );
}

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  color: #333;
`;

export default ProductUpdateTable;
