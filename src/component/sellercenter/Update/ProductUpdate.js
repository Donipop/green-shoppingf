import ProductUpdateSelect from "./ProductUpdateSelect";
import { useEffect, useState } from "react";
import CategorySelect from "../create/CategorySelect";
import ProductImg from "../create/ProductImg";
import ProductName from "../create/ProductName";
import ProductContent from "../create/ProductContent";
import ProductAdd from "../create/ProductAdd";
import axios from "axios";


function ProductUpdate() {
    const [updateproduct, setUpdateProduct] = useState([]);
    const [productDetail, setProductDetail] = useState([]);
    const [exsitingProduct,setExsitingProduct] = useState({
        img:[]
    });

    const [product, setProduct] = useState({
        category: '',
        title: '',
        cont: '',
        mainImg: '',
        detailImg: [],
        product: [],
        market_name: '마켓이름',
        event: '',
        userId: 'admin',
        id: ''
    });

    useEffect(() => {
        if(updateproduct?.id === undefined) return;
        setProduct((product) => {
            return {
                ...product, id: updateproduct.id,
            }});

        axios.get('/api/sellercenter/getproductdetailandimg', {
            params: {
                productId: updateproduct.id
            }
        }).then((res) => {
            setProductDetail(res.data)
            setExsitingProduct({...exsitingProduct, img: res.data[0].PRODUCTIMG});
        }).catch((err) => {
            console.log(err)
        })
    }, [updateproduct])

    const getData = (dataType,data) => {
        if (dataType === 'category'){
            setProduct((product) => {
                return {
                    ...product, category: data
                }})}
        if (dataType === 'title'){
            setProduct((product) => {
                return {
                    ...product, title: data
                }})}
        if (dataType === 'content'){
            setProduct((product) => {
                return {
                    ...product, cont: data
                }})}
        if (dataType === 'mainImg'){
            setProduct((product) => {
                return {
                    ...product, mainImg: data
                }})}
        if (dataType === 'detailImg'){
            setProduct((product) => {
                return {
                    ...product, detailImg: [...product.detailImg, data]
                }})}
        if (dataType === 'product'){
            
            setProduct((product) => {
                return {
                    ...product, product: data
                }})}
        if(dataType === 'mainImgDelete'){
            setProduct((product) => {
                return {
                    ...product, mainImg: ''
                }})}
        if(dataType === 'detailImgDelete'){
            setProduct((product) => {
                return {
                    ...product, detailImg: product.detailImg.filter((item) => item !== data)
                }})}
    }

    const onClickUpdate = () => {
        console.log(product);
        if(product.category === '' && product.title === '' && product.cont === undefined && product.mainImg === '' && product.detailImg.length === 0 && product.product.length === 0){
            alert('수정할 내용이 없습니다.');
            return;
        }

        axios.post('/api/sellercenter/updateproduct',{
            sellerCenterCreateVo: product,
            productImg: exsitingProduct
        }).then((res) => {
            // alert('수정되었습니다.');
            console.log("수정되었습니다.")
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className="w-100">
            <div className="row">
                <div className="col-12 w-100">
                    <div className="alert alert-secondary" role={'alert'}>
                        <h1>상품 수정</h1>
                    </div>

                    <div className="alert alert-secondary" role={'alert'}>
                        <ProductUpdateSelect getProductData={setUpdateProduct} />
                    </div>
                </div>

                <div className="col-12 w-100">

                    <div className="alert alert-secondary" role={'alert'}>
                        <h3 className='m-0 d-inline-flex mb-3'>카테고리</h3>
                        <button className='alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#create-category' aria-expanded='false'></button>
                            <div className='collapse row' id='create-category'>
                                <CategorySelect getData={getData} UpdateData={updateproduct} />
                            </div>
                    </div>

                    <div className="alert alert-secondary" role={'alert'}>
                    <h3 className='m-0 d-inline-flex mb-3'>상품 페이지명</h3>
                    <button className='alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#product-name' aria-expanded='false'></button>
                        <div className='collapse row' id='product-name'>
                            <ProductName getData={getData} UpdateData={updateproduct}/>
                        </div>
                    </div>

                    <div className="alert alert-secondary" role={'alert'}>
                        <h3 className='m-0 d-inline-flex mb-3'>상품 이미지</h3>
                        <button className='alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#product-img' aria-expanded='false'></button>
                            <div className='collapse row' id='product-img'>
                                <ProductImg getData={getData} UpdateData={productDetail} />
                            </div>
                    </div>

                    <div className="alert alert-secondary" role={'alert'}>
                        <h3 className='m-0 d-inline-flex mb-3'>상세 설명</h3>
                        <button className='alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#product-content' aria-expanded='false'></button>
                            <div className='collapse row' id='product-content'>
                                <ProductContent getData={getData} UpdateData={updateproduct} />
                            </div>
                    </div>

                    <div className="alert alert-secondary" role={'alert'}>
                    <h3 className='m-0 d-inline-flex mb-3'>상품추가</h3>
                    <button className='alert-btn btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target='#product-add' aria-expanded='false'></button>
                        <div className='collapse row' id='product-add'>
                            <ProductAdd getData={getData} UpdateData={productDetail} />
                        </div>
                    </div>


                </div>
                
            </div>

            {/* 밑에 따라다니는 푸터 */}
            <div className='fixed-bottom'>
                <div className='row justify-content-center'>
                    <div className='col-12'>
                        <div className='p-3' style={{backgroundColor: '#dee2e6'}}>
                            <div className='row justify-content-center'>
                                <div className='col-3'>
                                    <button className='btn btn-primary w-100' onClick={onClickUpdate}>수정</button>
                                </div>

                                <div className='col-3'>
                                    <button className='btn btn-secondary w-100'>미리보기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductUpdate;