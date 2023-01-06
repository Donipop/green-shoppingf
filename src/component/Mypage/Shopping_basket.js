import axios from "axios"
import { useEffect, useLayoutEffect, useRef } from "react"
import LoginInterceptor from "../LoginInterceptor"
import { useState } from "react"
import { Link, Navigate } from 'react-router-dom';
import Logininformation from "../Logininformation";
import { Prev } from "react-bootstrap/esm/PageItem";
import ProductInfo from "../ProductView/ProductInfo";
import { useNavigate } from "react-router-dom";

function Shopping_basket() {

    
    let user_id = Logininformation(); // 로그인된 유저의 아이디를 가져온다.
    const[shoppingBasket, set_shoppingBasket] = useState([]); // 장바구니 정보를 담을 배열
    const[orderprice, set_orderprice] = useState(0); // 총 상품 주문 금액
    const[deliveryFee, set_deliveryFee] = useState(new Map()); // 배송비를 담을 배열
    const[deliveryprice, set_deliveryprice] = useState(0); // 총 배송비
    const[finalprice, set_finalprice] = useState(0); // 총 결제 금액
    const [allChecked, setAllChecked] = useState(true); // 전체 체크박스
    const [isChecked, setIsChecked] = useState([]); // 개별 체크박스
    const Navigate = useNavigate();

    //////////////////////////////////////////// 장바구니 정보를 가져온다. 초기설정 ////////////////////////////////////////////
    useEffect(() => {
        
        axios({
            method: 'post',
            url: '/api/mypage/user_shopping_basket',
            params : {
                user_id: user_id
            }
        })
        .then(res => {
            set_shoppingBasket(res.data);
            setIsChecked(new Array(res.data.length).fill(true));
            
            
        })
        .catch(err => {
            console.log(err);
        })
        
        
    }, [user_id]);

    useEffect(() => {
        calculateOrderPrice();
        set_finalprice_calculator();
        
        }, [shoppingBasket, isChecked]);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    

    // 전체 체크박스를 눌렀을 때
    function allcheckedHandler() {
        setAllChecked(!allChecked);
        setIsChecked(new Array(shoppingBasket.length).fill(!allChecked));
    }

    // 개별 체크박스를 눌렀을 때
    function checkedHandler(e) {
        let index = e.target.getAttribute("indexid");
        let checked = [...isChecked];
        checked[index] = !checked[index];
        setIsChecked(checked);
        setAllChecked(checked.every((e) => e === true));
    }
    
        

    // 주문하기 버튼을 눌렀을 때
    function order_shopping_basket() {
        let FinalOrderList = [];
        let marketNamelist = new Set();
        for( let i = 0; i < shoppingBasket.length; i++) {
            if(isChecked[i] === true) {
                marketNamelist.add(shoppingBasket[i].marketName)
            }
        }

        let list1 = Array.from(marketNamelist);

        for( let j = 0; j < list1.length; j++) {
        
        let changeListItem = [];
        let data = {
            marketName: '',
            delivery : 2500,
            productId : 0,
            listItem : changeListItem,
        }   
        
        for( let i = 0; i < shoppingBasket.length; i++) {
            if(isChecked[i] === true) {
                if(shoppingBasket[i].marketName === list1[j]) {
                    
                    
                    data.marketName = shoppingBasket[i].marketName;
                    data.productId = parseInt(shoppingBasket[i].productId);
                    
                    let Item = {
                        name: '',
                        price: 0,
                        count: 0,
                        productDetailId: 0,
                    }

                    Item.name = shoppingBasket[i].name;
                    Item.price = shoppingBasket[i].price;
                    Item.count = shoppingBasket[i].count;
                    Item.productDetailId = shoppingBasket[i].productDetailId;

                    changeListItem.push(Item);


                }
            }
        }

        FinalOrderList.push(data);

    }
    
    Navigate('/Payment', {state:FinalOrderList});
    
    
    }

    // 체크 여부에 따른 주문금액 계산
    function calculateOrderPrice() {
        let finalorderprice = 0;

        for (var i = 0; i < shoppingBasket.length; i++) {
            if(isChecked[i] === true) {
                finalorderprice +=
                shoppingBasket[i].price * shoppingBasket[i].count;
            }
        }
        set_orderprice(finalorderprice);
        return finalorderprice;
    }

    // 최종 결제 금액 계산
    function set_finalprice_calculator() {
        let deliveryprice = calculateDeliveryFee();
        let finalprice = 0;
        finalprice = calculateOrderPrice() + deliveryprice;
        set_finalprice(finalprice);
    }

    // 배송비 계산
    function calculateDeliveryFee() {
        let deliveryprice = 0;
        let a = new Set();
        for (var i = 0; i < shoppingBasket.length; i++) {
            if (isChecked[i] === true) {
                a.add(shoppingBasket[i].marketName);
            }
        }
        
        let delivery_List = a.size;
        deliveryprice = delivery_List* 2500;

        set_deliveryprice(deliveryprice);

        return deliveryprice;
    }

    // 장바구니에서 삭제
    function delete_shopping_basket(e) {
        if(window.confirm("선택한 상품을 삭제하시겠습니까?")) {

        
        let shoppingBasket_deleteList = [];
        
        
        for(let i = 0; i < isChecked.length; i++) {
            if(isChecked[i] === true) {
                shoppingBasket_deleteList.push(shoppingBasket[i].productDetailId);
            }
            
        }

        axios({
            method: 'post',
            url: '/api/mypage/delete_shopping_basket',
            params : {
                user_id: user_id,
                shoppingBasket_deleteList: shoppingBasket_deleteList.toString(),
            }
        })
        .then(res => {
            alert("삭제되었습니다.");
            window.location.reload();
        })
        .catch(err => {
            console.log(err);
        })
    }

    }

    

    // 장바구니에서 수량 변경
    function count_up(e) {

        let index = e.target.getAttribute("indexid");
        if(shoppingBasket[index].count < 99) {
            shoppingBasket[index].count += 1;
            
        }
                
        console.log(shoppingBasket[index].count);
        
        


        // axios({
        //     method: 'post',
        //     url: '/api/mypage/update_shopping_basket',
        //     params : {
        //         user_id: user_id,
        //         productDetailId: shoppingBasket[index].productDetailId,
        //         count: shoppingBasket[index].count,
        //     }
        // })
        // .then(res => {
            
        // })
        

        

        

        


    }

    function count_down(e) {
        let index = e.target.getAttribute("indexid");
        if(shoppingBasket[index].count > 1) {
            shoppingBasket[index].count -= 1;
        }
        console.log(shoppingBasket[index].count);
        
    }

    function test123(){
        
      
        };
      
    


    
   




    return (
        <div>
        <LoginInterceptor/>
        <div>
            <h1>장바구니 / 로그인된 유저 : {user_id}</h1>
            <table>
                <tbody>
                <tr style={{width:"1270px", }}>
                    <th style={{width:"100px", fontWeight:"normal", borderTop:"3px solid black", borderBottom:"2px solid black", paddingBottom:"15px", paddingTop:"15px", paddingLeft:"10px"}}><input type="checkbox" onChange={allcheckedHandler} checked={allChecked}/></th>
                    <th style={{width:"500px", fontWeight:"normal", borderTop:"3px solid black", borderBottom:"2px solid black", textAlign:"center"}}>상품명</th>
                    <th style={{width:"120px", fontWeight:"normal", borderTop:"3px solid black", borderBottom:"2px solid black"}}>판매가</th>
                    <th style={{width:"70px", fontWeight:"normal", borderTop:"3px solid black", borderBottom:"2px solid black"}}>마켓이름</th>
                    <th style={{width:"150px", fontWeight:"normal", borderTop:"3px solid black", borderBottom:"2px solid black", paddingLeft:"80px"}}>수량</th>
                    <th style={{width:"150px", fontWeight:"normal", borderTop:"3px solid black", borderBottom:"2px solid black", paddingLeft:"80px"}}>주문금액</th>
                </tr>
                </tbody>
            </table>
            <table>
        <tbody>
        {shoppingBasket.map((List, index) => (
                <tr key={List.productDetailId}>
                    <td style={{width:"100px", paddingLeft:"10px", borderBottom:"1px solid #e9ecef", paddingBottom:"10px", paddingTop:"10px"}}><input type="checkbox" indexid={index} onChange={checkedHandler} checked={isChecked[index]}/></td>   
                    <td style={{width:"500px", borderBottom:"1px solid #e9ecef"}} >{List.name}</td>
                    <td style={{borderBottom:"1px solid #e9ecef", width:"120px"}} >{List.price}원</td> 
                    <td style={{borderBottom:"1px solid #e9ecef",  paddingLeft:"80px"}} >{List.marketName}</td>
                    <td style={{borderBottom:"1px solid #e9ecef",  paddingLeft:"80px"}} ><button indexid={index} onClick={count_down}>-</button>{List.count}<button indexid={index}onClick={count_up}>+</button></td>
                    <td style={{borderBottom:"1px solid #e9ecef",  paddingLeft:"80px"}} >{List.count * List.price}원</td>
                    
                </tr>
            ))} 
            </tbody>
            </table>
            <div>
                <h3>총 주문금액 : {orderprice}원</h3>
                <h3>총 배송비 : {deliveryprice}원</h3>
                <h3>총 결제금액 : {finalprice}원</h3>
                <div>
                    <button onClick={order_shopping_basket}>주문하기</button>
                    <button onClick={delete_shopping_basket}>삭제하기</button>
                    <button onClick={test123}>테스트</button>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Shopping_basket