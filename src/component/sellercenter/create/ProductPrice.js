import React,{useState} from 'react';
import styled from 'styled-components';




export default function ProductPrice() {
    const [price, setPrice] = useState(0);

    const onChangePrice = (e) => {

        let price = e.target.value.replace(/,/g,'');
        //숫자만 입력받기 ,제외
        if(price.match(/[^0-9]/g)){
            alert('숫자만 입력해주세요.');
            e.target.value = e.target.value.replace(/[^0-9]/g,'');
            e.target.value = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return;
        }
        //숫자에 , 넣기
        e.target.value = e.target.value.replace(/[^0-9]/g,'');
        e.target.value = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        setPrice(price);
    }

    return(
        <>
            <Div className="input-group">
                <span className="input-group-text">판매가</span>
                <input type="text" className="form-control" placeholder="판매가격을 입력해주세요." onChange={onChangePrice} />
                <span className="input-group-text">원</span>
            </Div>
            {/* 가로선 */}
            <Hr/>
            <Div className="input-group">
                <span className="input-group-text">판매가</span>
                <input type="text" className="form-control" placeholder="판매가격을 입력해주세요." onChange={onChangePrice} />
                <span className="input-group-text">원</span>
            </Div>
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