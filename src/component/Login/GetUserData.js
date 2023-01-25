import axios from "axios";


function GetUserData(refreshToken) {
    let userInformation = {
        user_address : "",
        user_brith : "",
        user_email : "",
        user_grade : "",
        user_id : "",
        user_money : "",
        user_name : "",
        user_nick : "",
        user_password : "",
        user_role : "",
        user_sex : "",
        user_signdate : "",
        user_state : "", 
        user_tel : ""
    }
    return axios({
        method: 'post',
            url: '/api/login/refreshTokenToAccessToken',
            data: {
                refreshToken : refreshToken
            }
        })
        .then((res) => {
            if (res.data.length === 0) {
                console.log("없음")
                return userInformation
            } else {
            userInformation = res.data;
            console.log("있음")
            return userInformation
            }
        })
        
    
}

export default GetUserData;