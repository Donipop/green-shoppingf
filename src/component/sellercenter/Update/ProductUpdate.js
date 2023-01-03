import ProductUpdateSelect from "./ProductUpdateSelect";
import { useState } from "react";
import CategorySelect from "../create/CategorySelect";
function ProductUpdate() {
    const [product, setProduct] = useState([]);
    const [Data, setData] = useState();
    return (
        <div className="w-100">
            <div className="row">
                <div className="col-12 w-100">
                    <div className="alert alert-secondary" role={'alert'}>
                        <h1>상품 수정</h1>
                    </div>

                    <div className="alert alert-secondary" role={'alert'}>
                        <ProductUpdateSelect getProductData={setProduct} />
                    </div>
                </div>

                <div className="col-12 w-100">
                <div className="alert alert-secondary" role={'alert'}>
                    <h3 className='m-0 d-inline-flex mb-3'>카테고리</h3>
                    <button className='alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#create-category' aria-expanded='false'></button>
                        <div className='collapse row' id='create-category'>
                            <CategorySelect getData={setData} UpdateData={product} />
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductUpdate;