import { useEffect,useState } from "react";
function ClientInfo({user}){
    const [userInfo, setUserInfo] = useState({
        user_name: "",
        user_email: "",
        user_tel: "",
    });
    useEffect(() => {
        if(user === undefined){return;}
        setUserInfo((userInfo) => {
            return {
                ...userInfo,
                user_name: user.user_name,
                user_email: user.user_email,
                user_tel: user.user_tel,
                }
                    });
     }, [user])
    return (
        <div className="client-info">
            <div className="col-12">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <p className="line">이름</p>
                                <p className="line">이메일</p>
                                <p className="line">휴대폰번호</p>
                            </div>
                            <div className="col-8">
                                <p>{userInfo.user_name}</p>
                                <p>{userInfo.user_email}</p>
                                <p>{userInfo.user_tel}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientInfo;