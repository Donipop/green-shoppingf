import axios from "axios"
import { useEffect } from "react"
import { useCookies } from 'react-cookie';
import { Navigate, useNavigate } from "react-router-dom";

function Logout() {

    const [ cookies, setCookies, removeCookie] = useCookies('vo');
    const [ cookies1, setCookies1, removeCookie1] = useCookies(['refreshToken']);

    const Navigate = useNavigate();  
    
    const Logout = () => {
        const refreshToken = cookies.refreshToken;

        axios({
            method: "post",
            url: "/api/login/logout",
            data: {
                refreshToken: refreshToken
            },
        })
        .then(res => res.data)
        .then(sessionStorage.removeItem("login"))
        .then(localStorage.removeItem("login"))
        .then(removeCookie('vo'))
        .then(removeCookie('refreshToken'))
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