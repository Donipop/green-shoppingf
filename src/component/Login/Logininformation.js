import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const Logininformation = ({ getuserData }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  let refreshToken = cookies.refreshToken;
  const [userinformation, setuserinformation] = useState({
    user_address: "",
    user_brith: "",
    user_email: "",
    user_grade: "",
    user_id: "",
    user_money: "",
    user_name: "",
    user_nick: "",
    user_password: "",
    user_role: "",
    user_sex: "",
    user_signdate: "",
    user_state: "",
    user_tel: "",
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
        if (res.length !== 0) {
          setuserinformation({
            user_address: res.user_address,
            user_brith: res.user_brith,
            user_email: res.user_email,
            user_grade: res.user_grade,
            user_id: res.user_id,
            user_money: res.user_money,
            user_name: res.user_name,
            user_nick: res.user_nick,
            user_password: res.user_password,
            user_role: res.user_role,
            user_sex: res.user_sex,
            user_signdate: res.user_signdate,
            user_state: res.user_state,
            user_tel: res.user_tel,
          });
        }
      });
    
  }, [refreshToken, userinformation.user_email]);
  useEffect(() => {
    getuserData(userinformation);
  }, [userinformation]);
};

export default Logininformation;
