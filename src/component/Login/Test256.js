import { useEffect, useState } from "react";

import Test123 from "./Test123";
import { useCookies } from "react-cookie";

function Test256() {
    const [cookies, setCookie, removeCookie] = useCookies(['refreshToken'])
    let refreshToken = cookies.refreshToken;

    const [data, setData] = useState([]);
    let user = useState(Test123(refreshToken));

    useEffect(() => {
        user[0].then((res) => {
            setData(res);
        })
    }, [])
    
    

    return (
        <div>
            <h2>{data.user_id}</h2>
        </div>
    )
}

export default Test256