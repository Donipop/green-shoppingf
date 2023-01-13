import React from "react";

function TalkMyMessage(message,type){
    let randomKey = Math.random();
    if(type === 0){
        return(
            <div className="d-flex flex-row justify-content-end mb-4" key={randomKey}>
                <div
                    className="p-3 me-3 border"
                    style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}
                >
                    <pre className="small mb-0">
                   {message}
                    </pre>
                </div>
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                />
            </div>
        )
    }else if(type===1){
        return(
                <div className="d-flex flex-row justify-content-start mb-4" key={randomKey}>
                    <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                    />
                    <div
                    className="p-3 ms-3"
                    style={{
                        borderRadius: "15px",
                        backgroundColor: "rgba(57, 192, 237,.2)",
                    }}
                    >
                    <pre className="small mb-0">
                        {message}
                    </pre>
                    </div>
                </div>
        )
    }
    
}

export default TalkMyMessage;