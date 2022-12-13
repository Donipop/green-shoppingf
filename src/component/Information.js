import axios from "axios"
import { useEffect } from "react"
import { Navigate, redirect, useNavigate } from "react-router-dom"
import Header from "./Header"


function Information() {

    let login_information = sessionStorage.getItem("login")
    login_information = JSON.parse(login_information);
    let user_id = ""
    function start() {

        if (login_information === null) {
            user_id = "로그인 된 정보가 없습니다."
        }
        else if (login_information != null) {
            user_id = login_information.user_id
        }
    
        return user_id
    }    
    
        user_id = start()

    const Navigate = useNavigate();  
    
    useEffect(() => {
        if(sessionStorage.getItem("login") == null) {
            alert("로그인이 되어있지 않습니다.")
            Navigate("/login")
        }
        
    }, [Navigate])

    return (
        <div>
            <div>
                <Header/>
            </div>
            <h2>ㅎㅇ</h2>
            <h3>{user_id}</h3>
        </div>
    )   
}


export default Information