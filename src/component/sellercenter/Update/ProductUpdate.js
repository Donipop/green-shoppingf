import ProductUpdateTable from "./ProductUpdateTable";

function ProductUpdate() {
    return (
        <div className="w-100">
            <div className="row">
                <div className="col-12 w-100">
                    <div className="alert alert-secondary" role={'alert'}>
                        <h1>상품 수정</h1>
                    </div>

                    <div className="alert alert-secondary" role={'alert'}>
                        <ProductUpdateTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductUpdate;