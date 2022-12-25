import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import ProductInfo from "./ProductInfo";

function View(){
    const {page} = useParams();
    const [productinfo, setProductinfo] = useState([]);
    useEffect(() => {
        //page가 숫자가 아닐때
        axios.get(`/api/view/product?product_num=${page}`)
        .then((res) => {
            setProductinfo(res.data);
        })
        .catch((err) => {
            console.log(err);
            return (
                <div className="container">잘못된 페이지</div>
            );
        })
    }, [page])

    if(isNaN(page)){
        return (
            <div className="container">잘못된 페이지(숫자가아님)</div>
        );
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header />
                    </div>
                    <div className="pt-5"></div>
                        <ProductInfo product={productinfo} />
                </div>
            </div>
        </>
    )
}
export default View;