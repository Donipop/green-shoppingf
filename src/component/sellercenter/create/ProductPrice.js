import React,{useEffect, useState} from 'react';
import styled from 'styled-components';




export default function ProductPrice() {
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [product, setProduct] = useState({
        product_count: '',
    });
    useEffect(() => {
        buttonEvent(document.getElementById('discount-false'),null);
        buttonEvent(document.getElementById('date-false'),null);
    }, []);

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
        
        if(e.target.id === 'price'){
            setPrice((price) => price = price2);
        }
        if(e.target.id === 'discount'){
            setDiscount((discount) => discount = price2);
            //할인가가 판매가보다 크면
            if(Number(price) < Number(price2)){
                alert('판매가보다 할인가가 큽니다.');
                e.target.value = '';
                setDiscount(0);
                return;
            }
        }
        if(e.target.id === 'product-count'){
            setProduct((product) => product = {...product, product_count: price2});
        }
        
    }

    const onClickButton = (e) => {
        //할인가 버튼 클릭시
        if(e.target.id === 'discount-true'){
            //스타일 변경
            buttonEvent(e.target,document.getElementById('discount-false'));
            //콜랩스 열기
            document.getElementById('discount-true-collapse').classList.add('show');
        }
        if(e.target.id === 'discount-false'){
            //스타일 변경
            buttonEvent(e.target,document.getElementById('discount-true'));
            //콜랩스 닫기
            document.getElementById('discount-true-collapse').classList.remove('show');
        }

        //판매기간 버튼 클릭시
        if(e.target.id === 'date-true'){
            setDate(1);
            //스타일 변경
            buttonEvent(e.target,document.getElementById('date-false'));
            //콜랩스 열기
            document.getElementById('date-true-collapse').classList.add('show');
        }
        if(e.target.id === 'date-false'){
            setDate(0);
            //스타일 변경
            buttonEvent(e.target,document.getElementById('date-true'));
            //콜랩스 닫기
            document.getElementById('date-true-collapse').classList.remove('show');
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
            <Div className="input-group">
                <span className="input-group-text">판매가</span>
                <input type="text" id="price" className="form-control" placeholder="판매가격을 입력해주세요." onChange={onChangePrice} />
                <span className="input-group-text">원</span>
            </Div>

            <Hr/>

            <Div>
                <h6 className='m-0 d-inline-flex mb-3'>할인가</h6>
                <br/>
                <Button onClick={onClickButton} id='discount-true'>설정함</Button>
                <Button onClick={onClickButton} id='discount-false'>설정안함</Button>
                <div className="collapse" id="discount-true-collapse">
                    <div className="input-group mt-3">
                        <span className="input-group-text">할인가</span>
                        <input type="text" id="discount" className="form-control" placeholder="할인가격을 입력해주세요." onChange={onChangePrice}/>
                        <span className="input-group-text">원</span>
                    </div>
                </div>
            </Div>

            <Hr/>

            <div>
                <h6 className='m-0 d-inline-flex mb-3'>판매기간</h6>
                <br/>
                <Button onClick={onClickButton} id='date-true'>설정함</Button>
                <Button onClick={onClickButton} id='date-false'>설정안함</Button>
                <div className="collapse" id="date-true-collapse">
                    <div className="input-group mt-3">
                        <span className="input-group-text">시작날짜</span>
                        <input type="date" id='start-date' className="form-control" />
                        <span className="input-group-text">종료날짜</span>
                        <input type="date" id='end-date' className="form-control" />
                    </div>
                </div>
            </div>

            <Hr/>
            <div>
                <h6 className='m-0 d-inline-flex mb-3'>제고수량</h6>
                <br/>
                <div className="input-group">
                    <span className="input-group-text">수량</span>
                    <input type="text" id="product-count" className="form-control" placeholder="제고수량을 입력해주세요." onChange={onChangePrice}/>
                    <span className="input-group-text" onChange={onChangePrice}>개</span>
                </div>
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