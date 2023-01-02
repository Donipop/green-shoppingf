

function Logininformation() {
    let user_id = ''

    let login_information = sessionStorage.getItem("login")
    login_information = JSON.parse(login_information);


    if (login_information === null) {
        user_id = "로그인 된 정보가 없습니다."
        }

    else if (login_information != null) {
        user_id = login_information.user_id
        }
        return user_id;
    }    

export default Logininformation