import React from "react";
import "./CategoriesCSS.css";

function Categories() {
  return (
    <div className="dropdown" style={{ marginTop: "60px", marginLeft: "5px" }}>
      <button
        className="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
        style={{ color: "white" }}
      >
        <span style={{ fontSize: "13px" }}>카테고리</span>
      </button>
      <ul
        className="dropdown-menu"
        id="categories"
        aria-labelledby="dropdownMenuButton"
      >
        <li>
          <a className="dropdown-item" href="/">
            패션의류/잡화
          </a>
          <ul className="dropdown-menu dropdown-submenu">
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=여성">
                여성
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a
                    className="dropdown-item"
                    href="/searchview?searchcont=&name=여성&category=01010100"
                  >
                    의류
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=여성&category=01010200">
                    속옷/잠옷
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=여성&category=01010300">
                    신발
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=남성">
                남성
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=남성&category=01020100">
                    의류
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=남성&category=01020200">
                    속옷/잠옷
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=남성&category=01020300">
                    신발
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=남여공용">
                남녀공용의류
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=남여공용&category=01030100">
                    티셔츠
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=남여공용&category=01030200">
                    맨투맨
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=남여공용&category=01030300">
                    후드티
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a className="dropdown-item" href="/searchview?searchcont=&name=뷰티">
            뷰티
          </a>
          <ul className="dropdown-menu dropdown-submenu">
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=뷰티&category=02010000">
                스킨케어
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=뷰티&category=02010100">
                    스킨
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=뷰티&category=02010200">
                    로션
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=뷰티&category=02010300">
                    에센스/세럼/앰플
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=뷰티&category=02020000">
                클린/비건뷰티
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=뷰티&category=02020100">
                    스킨케어
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=뷰티&category=02020200">
                    메이크업
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=뷰티&category=02020300">
                    네일/툴
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=뷰티&category=02030000">
                클렌징/필링
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=뷰티&category=02030100">
                    클렌징폼
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=뷰티&category=02030200">
                    클렌징젤/파우더
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=뷰티&category=02030300">
                    클렌징비누
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a className="dropdown-item" href="/searchview?searchcont=&name=출산/유아동">
            출산/유아동
          </a>
          <ul className="dropdown-menu dropdown-submenu">
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=출산/유아동&category=03010000">
                유아동패션
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=출산/유아동&category=03010100">
                    베이비
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=출산/유아동&category=03010200">
                    여아
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=출산/유아동&category=03010300">
                    남아
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=출산/유아동&category=03020000">
                기저귀
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=출산/유아동&category=03020100">
                    일회용기저귀
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=출산/유아동&category=03020200">
                    수영장기저귀
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=출산/유아동&category=03020300">
                    천기저귀/액세서리
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=출산/유아동&category=03030000">
                물티슈
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=출산/유아동&category=03030100">
                    물티슈
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=출산/유아동&category=03030200">
                    건티슈
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=출산/유아동&category=03020300">
                    물티슈액세서리
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a className="dropdown-item" href="/searchview?searchcont=&name=식품">
            식품
          </a>
          <ul className="dropdown-menu dropdown-submenu">
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=식품&category=04010000">
                과일
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=식품&category=04010100">
                    사과/배
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=식품&category=04010200">
                    귤/한라봉/감귤류
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=식품&category=04010300">
                    토마토/자두/복숭아/포도
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=식품&category=04020000">
                견과/건과
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=식품&category=04020100">
                    땅콩
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=식품&category=04020200">
                    호두
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=식품&category=04020300">
                    밤
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=식품&category=04030000">
                채소
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=식품&category=04030100">
                    두부
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=식품&category=04030200">
                    콩나물
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=식품&category=04030300">
                    감자
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a className="dropdown-item" href="/searchview?searchcont=&name=주방용품">
            주방용품
          </a>
          <ul className="dropdown-menu dropdown-submenu">
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=주방용품&category=05010000">
                주방가전
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=주방용품&category=05010100">
                    전기밥솥
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=주방용품&category=05010200">
                    전자레인지
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=주방용품&category=05010300">
                    오븐
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=주방용품&category=05020000">
                냄비/프라이팬
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=주방용품&category=05020100">
                    냄비/뚝배기
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=주방용품&category=05020200">
                    프라이팬
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=주방용품&category=05020300">
                    냄비/프라이팬세트
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=주방용품&category=05030000">
                주방조리도구
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=주방용품&category=05030100">
                    조리도구
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=주방용품&category=05030200">
                    조리도구세트
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=주방용품&category=05030300">
                    가위/슬라이서/스퀴져
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a className="dropdown-item" href="/searchview?searchcont=&name=생활용품">
            생활용품
          </a>
          <ul className="dropdown-menu dropdown-submenu">
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=생활용품&category=06010000">
                방한용품
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=생활용품&category=06010100">
                    손난로/핫팩
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=생활용품&category=06010200">
                    보온/난방텐트
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=생활용품&category=06010300">
                    단열에어캡/단열필름
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=생활용품&category=06020000">
                헤어
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=생활용품&category=06020100">
                    샴푸/린스
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=생활용품&category=06020200">
                    트리트먼트/팩/앰플
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=생활용품&category=06020300">
                    스타일링/케어/세트
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="/searchview?searchcont=&name=생활용품&category=06030000">
                바디세안
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=생활용품&category=06030100">
                    샤워/입욕용품
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=생활용품&category=06030200">
                    바디로션/크림
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/searchview?searchcont=&name=생활용품&category=06030300">
                    핸드/풋/데오
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
