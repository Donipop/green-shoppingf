import axios from "axios";
import React,{useState, useHistory, useEffect} from "react";
import './Reviewcss.css';
import {useParams} from "react-router-dom";

const QnApopup = () => {
    const {page} = useParams();
    const [letter, setletter] = useState(0);
    const [aria, setaria] = useState(false);
    const [account, setAccount] = useState({
        cont: '',
        product_num: page,
        user_id: "admin",
        id: 14,
        product_name: "아이패드"
    })
        
    console.log(page)
    const ariacheck = () => {
        setaria(!aria);
        if(aria === true){

        }
    }
    const close = () => {
        window.close();
    }
    const QnaCont = (e) => {
        setAccount({...account, [e.target.name]: e.target.value,});
        setletter(e.target.value.replace(/<br\s*\/?>/gm, "\n").length)
    }

    const ContSend = (e) => {
        
        axios({
            method: 'post',
            url: `/api/view/QnA/write/${page}`,
            data: {
                ...account
            }
        })
         .then(alert("문의가 접수되었습니다."), window.close(), window.opener.location.reload())
         
    }

    

   

    return(
        <div>
                <form id= "Subm"onSubmit={ContSend}>
            <div className="QnAWrite">
                <h1 className="QnAHeader">상품 Q&A 작성하기</h1>
            </div>
            <div className="QnAWrite2">
                    <div className="QnAContBox">
                        <textarea id = "asd" className="QnAcont" placeholder="문의하실 내용을 입력하세요." onChange={QnaCont} name="cont"></textarea>
                            <div className="letterNum">
                                <span className="letter1">{letter}</span>
                                <span>/1000</span>
                            </div>
                    </div>
            </div>
                          <p className="QnACheck">
                        문의하신 내용에 대한 답변은 해당 상품의 상세페이지에서 확인하실 수 있습니다.
                          </p>
            <div className="QnAButton">
                <button className="cancle"  onClick={close}>취소</button>
                <button className="add"  type="submit" >등록</button>
            </div>
            <div className="Toggle">
                <h2 className="HH2"><a role="button" className="danger" onClick={ariacheck}aria-expanded={aria}>상품 Q&A작성 유의사항</a></h2>
                <ul className={aria ? "Before":"after"} >
                    <li className="li1">
                        상품 Q&A는 상품 및 상품 구매 과정(배송, 반품/취소, 교환/변경)에 대해 판매자에게 문의하는 게시판 입니다.
                    </li>
                    <li className="li2">
                        상품 및 상품 구매 과정과 관련 없는 비방/욕설/명예훼손성 게시글 및 상품과 관련 없는 광고글 등 부적절한 게시글 등록 시 글쓰기 제한 및 게시글이 삭제 조치 될 수 있습니다.
                    </li>
                    <li className="li3">
                    전화번호, 이메일 등 개인 정보가 포함된 글 작성이 필요한 경우 판매자만 볼 수 있도록 비밀글로 문의해 주시기 바랍니다.
                    </li>
                    <li className="li4">
                    상품에 대한 이용 후기는 리뷰에 남겨 주세요.
                    </li>
                </ul>
               
            </div>
            </form>
        </div>
    )

}


export default QnApopup;
