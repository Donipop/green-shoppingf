import React, {useState, useEffect} from "react";
import styled from "styled-components";

export default function ProductAdd() {
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState({
        start: '',
        end: ''
    });
    const [discount, setDiscount] = useState(0);
    const [productCount, setProductCount] = useState(0);
    const [productName, setProductName] = useState('');
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        buttonEvent(document.getElementById('discount-fasle-add'),null);
        buttonEvent(document.getElementById('date-fasle-add'),null);
    }, []);

    const onClickAdd = (e) => {
        if(productName === ''){
            alert('상품명을 입력해주세요.');
            return;
        }
        if(price === 0){
            alert('판매가를 입력해주세요.');
            return;
        }
        if(productCount === 0){
            alert('재고를 입력해주세요.');
            return;
        }
        let product = {
            name: productName,
            price: price,
            count: productCount,
            discount: discount,
            datestart: date.start,
            dateend: date.end
        }
        setProductList((productList) => [...productList, product]);
        setProductName('');
        setPrice(0);
        setProductCount(0);
        setDiscount(0);
        setDate(0);
        document.getElementById('product-name-add').value = '';
        document.getElementById('product-price-add').value = '';
        document.getElementById('product-count-add').value = '';
        document.getElementById('product-discount-add').value = '';
        document.getElementById('product-date-start-add').value = '';
        document.getElementById('product-date-end-add').value = '';

        document.getElementById('discount-fasle-add').classList.add('active');
        document.getElementById('discount-true-add').classList.remove('active');
        document.getElementById('discount-true-add-collapse').classList.remove('show');
        document.getElementById('date-fasle-add').classList.add('active');
        document.getElementById('date-true-add').classList.remove('active');
        document.getElementById('date-true-add-collapse').classList.remove('show');
    }

    const onClickDelete = (e) =>{
        let index = e.target.id;
        let list = productList;
        list.splice(index,1);
        setProductList((productList) => [...list]);
    }

    const oncChangeName = (e) => {
        setProductName((productName) => productName = e.target.value);
    }

    const onChangeDate = (e) => {
        if(e.target.id === 'product-date-start-add'){
            setDate((date) => date = {...date, start: e.target.value});
            console.log("datestart: ",e.target.value)
        }
        if(e.target.id === 'product-date-end-add'){
            setDate((date) => date = {...date, end: e.target.value});
            console.log("dateend: ",date)
        }
    }

    const onChangePrice = (e) => {        
        let price2 = e.target.value.replace(/,/g,'');
        //숫자만 입력받기 ,제외
        if(price2.match(/[^0-9]/g)){
            alert('숫자만 입력해주세요.');
            e.target.value = e.target.value.replace(/[^0-9]/g,'');
            e.target.value = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return;
        }
        //숫자에 , 넣기
        e.target.value = e.target.value.replace(/[^0-9]/g,'');
        e.target.value = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
        if(e.target.id === 'product-price-add'){
            setPrice((price) => price = price2);
        }
        if(e.target.id === 'product-discount-add'){
            setDiscount((discount) => discount = price2);
            //할인가가 판매가보다 크면
            if(Number(price) < Number(price2)){
                alert('판매가보다 할인가가 큽니다.');
                e.target.value = '';
                setDiscount(0);
                return;
            }
        }
        if(e.target.id === 'product-count-add'){
            setProductCount((productCount) => productCount = price2);
        }
    }

    const onClickButton = (e) => {
        //할인가 버튼 클릭시
        if(e.target.id === 'discount-true-add'){
            //스타일 변경
            buttonEvent(e.target,document.getElementById('discount-fasle-add'));
            //콜랩스 열기
            document.getElementById('discount-true-add-collapse').classList.add('show');
        }
        if(e.target.id === 'discount-fasle-add'){
            //스타일 변경
            buttonEvent(e.target,document.getElementById('discount-true-add'));
            //콜랩스 닫기
            document.getElementById('discount-true-add-collapse').classList.remove('show');
        }

        //판매기간 버튼 클릭시
        if(e.target.id === 'date-true-add'){
            setDate(1);
            //스타일 변경
            buttonEvent(e.target,document.getElementById('date-fasle-add'));
            //콜랩스 열기
            document.getElementById('date-true-add-collapse').classList.add('show');
        }
        if(e.target.id === 'date-fasle-add'){
            setDate(0);
            //스타일 변경
            buttonEvent(e.target,document.getElementById('date-true-add'));
            //콜랩스 닫기
            document.getElementById('date-true-add-collapse').classList.remove('show');
        }
    }
    /**
     * 
     * m = 클릭한 버튼
     * y = 클릭하지 않은 버튼
     * 버튼 클릭시 스타일 변경
     * @param {Element} m 
     * @param {Element} y 
     */
    const buttonEvent = (m,y) =>{
        if(m !== null){
            m.style.backgroundColor = '#007bff';
            m.style.color = '#fff';
        }
        if(y !== null){
            y.style.backgroundColor = '#fff';
            y.style.color = '#000';
        }
        
    }
    return(
        <>
            <Div>
                <input type="text" id="product-name-add" className="form-control" placeholder="상품이름을 입력해주세요." onChange={oncChangeName} />
            </Div>

            <Hr />

            <Div className="input-group">
                <span className="input-group-text">판매가</span>
                <input type="text" id="product-price-add" className="form-control" placeholder="판매가격을 입력해주세요." onChange={onChangePrice} />
                <span className="input-group-text">원</span>
            </Div>

            <Hr/>

            <Div>
                <h6 className='m-0 d-inline-flex mb-3'>할인가</h6>
                <br/>
                <Button onClick={onClickButton} id='discount-true-add'>설정함</Button>
                <Button onClick={onClickButton} id='discount-fasle-add'>설정안함</Button>
                <div className="collapse" id="discount-true-add-collapse">
                    <div className="input-group mt-3">
                        <span className="input-group-text">할인가</span>
                        <input type="text" id="product-discount-add" className="form-control" placeholder="할인가격을 입력해주세요." onChange={onChangePrice}/>
                        <span className="input-group-text">원</span>
                    </div>
                </div>
            </Div>

            <Hr/>

            <div>
                <h6 className='m-0 d-inline-flex mb-3'>판매기간</h6>
                <br/>
                <Button onClick={onClickButton} id='date-true-add'>설정함</Button>
                <Button onClick={onClickButton} id='date-fasle-add'>설정안함</Button>
                <div className="collapse" id="date-true-add-collapse">
                    <div className="input-group mt-3">
                        <span className="input-group-text">시작날짜</span>
                        <input type="date" id='product-date-start-add' className="form-control" onChange={onChangeDate} />
                        <span className="input-group-text">종료날짜</span>
                        <input type="date" id='product-date-end-add' className="form-control" onChange={onChangeDate} />
                    </div>
                </div>
            </div>

            <Hr/>

            <div>
                <h6 className='m-0 d-inline-flex mb-3'>제고수량</h6>
                <br/>
                <div className="input-group">
                    <span className="input-group-text">수량</span>
                    <input type="text" id="product-count-add" className="form-control" placeholder="제고수량을 입력해주세요." onChange={onChangePrice}/>
                    <span className="input-group-text" onChange={onChangePrice}>개</span>
                </div>
            </div>

            <Hr/>

            <div>
                <button type="button" className="btn btn-primary" onClick={onClickAdd}>추가</button>
            </div>

            {/* 추가된 목록 */}

            <Hr/>

            <div>
                <h6 className='m-0 d-inline-flex mb-3'>추가된 목록</h6>
                <br/>
                <table className="table table-hover bg-white">
                    <thead>
                        <tr>
                            <th scope="col">상품명</th>
                            <th scope="col">판매가</th>
                            <th scope="col">할인가</th>
                            <th scope="col">판매기간</th>
                            <th scope="col">제고수량</th>
                            <th scope="col">삭제</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {productList.map((product, index) => {
                            return(
                                <tr key={index} id={index}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.discount}</td>
                                    <td>{product.datestart} ~ {product.dateend}</td>
                                    <td>{product.count}</td>
                                    <td><button type="button" className="btn btn-danger" onClick={onClickDelete}>삭제</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

const Div = styled.div`
    width: 40rem;
`
const Hr = styled.hr`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
`
const Button = styled.button`
    margin-right: 1rem;
    width: 10rem;
    height: 3rem;
    border-radius: 0.5rem;
    border: 1px solid #ced4da;
    background-color: #fff;
    color: #495057;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    padding: 0.375rem 0.75rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`
