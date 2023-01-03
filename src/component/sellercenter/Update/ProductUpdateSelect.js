import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function ProductUpdateTable({getProductData}){
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        axios.get("/api/sellercenter/getproducttb",{
            params:{
                marketName: '아이유당근마켓'}
                }).then((res)=>{
                    setProduct(res.data);
                }).catch((err)=>{
                    console.log(err);
                })
    },[])
    const onChangeProduct = (e) => {
        if (e.target.value === -1) return;
        getProductData(product[e.target.value]);
    }
        return(
            <div>
                <select onChange={onChangeProduct}>
                    <option value={-1}>선택</option>
                    {product.map((item,index)=>{
                        return(
                            <option value={index} key={item.id}>{item.title}</option>
                        )})
                    }
                </select>
            </div>
        )
}

export default ProductUpdateTable;