import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header2 from "../Header2";
import ProductInfo from "./ProductInfo";
import styled from "styled-components";
import Review from "./Review";
import QnAList from "./QnAList";

function View(){
    const {page} = useParams();
    const [productinfo, setProductinfo] = useState([]);
    const [divNaviState, setDivNaviState] = useState(['상품정보', '상품후기', '상품문의', '배송/교환/반품','#info','#review','#qna','#delivery']);
    const [divNaviStateClass, setDivNaviStateClass] = useState(['', '', '', '']);
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

    const onClickDivnavi = (e) => {
        let key = e.target.innerText;
        let arr = ['', '', '', ''];
        divNaviState.map((item, index) => {
            if(item === key){
                arr[index] = 'acti';
            }
            return null;
        })
        setDivNaviStateClass(arr);
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header2 />
                    </div>
                    <div className="pt-5"></div>
                    <ProductInfo product={productinfo} />
                    <div className="pt-5"></div>
                </div>
                <UL className="d-block m-0 p-0" style={{borderLeft: `1px solid #000`}}>
                    {divNaviState.map((item, index) => {      
                            if(index < 4){
                                return (
                                    <a href={divNaviState[index+4]} key={index+4}>
                                        <DIVNAVI onClick={onClickDivnavi} key={index} className={divNaviStateClass[index]}>{item}</DIVNAVI>
                                    </a>
                                )
                            }else{
                                return null;
                            }
                    })}
                </UL>
                <div className="pt-5"></div>
                <div dangerouslySetInnerHTML={{__html: productinfo.cont }}>
                </div>

                <div>
                    <Review />
                </div>
                { <div>
                    <QnAList page={page} />
                </div> }
            </div>
        </>
    )
}
export default View;

const LINE = styled.div`
    width: 100%;
    border-bottom: 1px solid #000;
    margin: 10px 0;
    display: block;
`;

const DIVNAVI = styled.li`
    width: 25%;
    height: 40px;
    display: inline-block;
    text-align: center;
    padding: 7px 0;
    margin: 0;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    cursor: pointer;
`;

const UL = styled.ul`
    display: block;
    margin: 0;
    padding: 0;
    .acti{
        background-color: #000;
        color: #fff;
        border-bottom: 0;
    }
    a:link {text-decoration:none; color:#000;}
    a:visited {text-decoration:none; color:#000;}
    a:hover {text-decoration:none; color:#000;}
`;
