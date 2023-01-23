import React, { useState } from 'react';
import './CategoriesCSS.css';

function Categories() {
    

    return (

        <div className="dropdown" style={{marginTop:"60px",marginLeft:"5px"}}>
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
            data-mdb-toggle="dropdown" aria-expanded="false" style={{color:"white"}} >
            <span style={{fontSize:"13px"}}>카테고리</span>
            </button>
                <ul className="dropdown-menu" id="categories" aria-labelledby="dropdownMenuButton">
                    <li>
                        <a className="dropdown-item" href="/">패션의류/잡화</a>
                        <ul className="dropdown-menu dropdown-submenu">
                            <li>
                                <a className="dropdown-item" href="/">여성</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/searchview?searchcont=후드티&name=여성">의류</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">속옷/잠옷</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">신발</a>
                                    </li>   
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/">남성</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">의류</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">속옷/잠옷</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">신발</a>
                                    </li>   
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-item" href=".">남녀공용의류</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">티셔츠</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">맨투맨</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">후드티</a>
                                    </li>   
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a className="dropdown-item" href="/">뷰티</a>
                        <ul className="dropdown-menu dropdown-submenu">
                            <li>
                                <a className="dropdown-item" href="/">스킨케어</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">스킨</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">로션</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">에센스/세럼/앰플</a>
                                    </li>   
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/">클린/비건뷰티</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">스킨케어</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">메이크업</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">네일/툴</a>
                                    </li>   
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-item" href=".">클렌징/필링</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">클렌징폼</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">클렌징폼/파우더</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">클렌징비누</a>
                                    </li>   
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a className="dropdown-item" href="/">출산/유아동</a>
                        <ul className="dropdown-menu dropdown-submenu">
                            <li>
                                <a className="dropdown-item" href="/">유아동패션</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">베이비</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">여아</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">남아</a>
                                    </li>   
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/">기저귀</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">일회용기저귀</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">수영장기저귀</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">천기저귀/액세서리</a>
                                    </li>   
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-item" href=".">물티슈</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">물티슈</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">건티슈</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">물티슈액세서리</a>
                                    </li>   
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a className="dropdown-item" href="/">식품</a>
                        <ul className="dropdown-menu dropdown-submenu">
                            <li>
                                <a className="dropdown-item" href="/">과일</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">사과/배</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">귤/한라봉/감귤류</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">토마토/자두/복숭아/포도</a>
                                    </li>   
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/">견과/건과</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">땅콩</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">호두</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">밤</a>
                                    </li>   
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-item" href=".">채소</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">두부</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">콩나물</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">감자</a>
                                    </li>   
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a className="dropdown-item" href="/">주방용품</a>
                        <ul className="dropdown-menu dropdown-submenu">
                            <li>
                                <a className="dropdown-item" href="/">주방가전</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">전기밥솥</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">전자레인지</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">오븐</a>
                                    </li>   
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/">냄비/프라이팬</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">냄비/뚝배기</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">프라이팬</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">냄비/프라이팬세트</a>
                                    </li>   
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-item" href=".">주방조리도구</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">조리도구</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">조리도구세트</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">가위/슬라이서/스퀴져</a>
                                    </li>   
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a className="dropdown-item" href="/">생활용품</a>
                        <ul className="dropdown-menu dropdown-submenu">
                            <li>
                                <a className="dropdown-item" href="/">방한용품</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">손난로/핫팩</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">보온/난방텐트</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">단열에어캡/단열필름</a>
                                    </li>   
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/">헤어</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">샴푸/린스</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">트리트먼트/팩/앰플</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">스타일링/케어/세트</a>
                                    </li>   
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-item" href=".">바디세안</a>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <a className="dropdown-item" href="/">샤워/입욕용품</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">바디로션/크림</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">핸드/풋/데오</a>
                                    </li>   
                                </ul>
                            </li>
                        </ul>
                    </li>
                    
                </ul>
        </div>

    ) 
}

export default Categories;


