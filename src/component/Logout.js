import axios from "axios"
import { useEffect } from "react"
import { useCookies } from 'react-cookie';
import { Navigate, useNavigate } from "react-router-dom";

function Logout() {

    const [ cookies, setCookies, removeCookie] = useCookies('vo');
    const Navigate = useNavigate();  
    const Logout = () => {
        axios({
            method: "post",
            url: "/api/logout",
            data: {
                login : sessionStorage.getItem("login")
                
            },
        })
        .then(res => res.data)
        .then(sessionStorage.removeItem("login"))
        .then(removeCookie('vo'))
        .then(res => alert(res))
        .then(Navigate('/'))
    }

    useEffect(() => {
        Logout()
    })

    return (
        <div>
        <h2>삭제중</h2>
        </div>
    )
}

export default Logout