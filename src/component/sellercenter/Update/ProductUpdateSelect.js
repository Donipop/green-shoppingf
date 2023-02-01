import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, [marketName]);
  const onChangeProduct = (e) => {
    let item = selectProductRef.current.filter(item => item.value === e.target.value); //
    if(item.length === 0) {return;}
    let itemIndex = item[0].attributes["data-id"].value;
    getProductData(product[itemIndex]);
  };
  return (
    <div>
      <label>
        상품선택:
        <input list="products" name="myBrowser" onChange={(e) => onChangeProduct(e)} />
      </label>
      <datalist id="products">
        {product.map((item, index) => {
          return (
            <option value={item.title} key={item.id} ref={(el) => selectProductRef.current[index] = el} data-id={index} >
              
            </option>
          );
        })}
      </datalist>
      {/* <select onChange={onChangeProduct}>
        
      </select> */}
    </div>
  );
}

export default ProductUpdateTable;
