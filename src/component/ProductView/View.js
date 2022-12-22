import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import ProductInfo from "./ProductInfo";

function View(){
    const {page} = useParams();
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header />
                    </div>
                    <div className="pt-5"></div>
                        <ProductInfo />
                </div>
            </div>
        </>
    )
}
export default View;