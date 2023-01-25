import axios from "axios";


async function GetUserData(refreshToken) {
    // let userInformation = {
    //     user_address : "",
    //     user_brith : "",
    //     user_email : "",
    //     user_grade : "",
    //     user_id : "",
    //     user_money : "",
    //     user_name : "",
    //     user_nick : "",
    //     user_password : "",
    //     user_role : "",
    //     user_sex : "",
    //     user_signdate : "",
    //     user_state : "", 
    //     user_tel : ""
    // }
    return axios({
            method: 'post',
                url: '/api/login/refreshTokenToAccessToken',
                data: {
                    refreshToken : refreshToken
                }
            })
            .then((res) => {
                return res.data;
            })
}

export default GetUserData;