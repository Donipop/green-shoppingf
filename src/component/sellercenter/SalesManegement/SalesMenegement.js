import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import SalesViewDate from "./SalesViewDate";
import SalesViewTable from "./SalesViewTable";

function SalesManageMent() {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  let refreshToken = cookies.refreshToken;
  const [user_id, setuser_id] = useState("");
  const [dateInfo, setDateInfo] = useState({
    start: "",
    end: "",
  });

  useEffect(() => {
    axios({
      method: "post",
      url: "/api/login/refreshTokenToAccessToken",
      data: {
        refreshToken: refreshToken,
      },
    })
      .then((res) => res.data)
      .then((res) => {
        if (res == null) {
          alert("다시 로그인 해주시길 바랍니다.");
          Navigate("/");
        } else {
          setuser_id(res.user_id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refreshToken]);

  return (
    <div className="w-100">
      <div className="row m-2">
        <div className="col-12">
          <div className="alert alert-secondary">
            <h6>{user_id}님의 매출현황 및 구매확정 확인</h6>
          </div>

          <div className="alert alert-secondary">
            <SalesViewDate getDate={setDateInfo} />
          </div>

          <div className="alert alert-secondary">
            <SalesViewTable getDate={[dateInfo, user_id]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesManageMent;
