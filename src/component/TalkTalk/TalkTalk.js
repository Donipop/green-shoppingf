import { json, useParams } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBTextArea,
} from "mdb-react-ui-kit";
import TalkMyMessage from "./TalkMyMessage";
import "./TalkTalk.css";
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";

function TalkTalk(){
    const {uuid} = useParams();
    const params = new URLSearchParams(window.location.search);
    const chatBody = useRef();
    // console.log(params.get('frm'));
    // console.log(uuid);
    const [chat, setChat] = useState([]);
    const client = useRef({});
    const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState("");

    const onKeyUpInput = (e) => {
        //shift + enter는 가능하게
        if(e.code === 'Enter' && !e.shiftKey){
            if(e.code === 'Enter'){
                if(e.target.value === '\n'){
                    e.target.value = '';
                    return;
                }

                let msgData = {
                    'message' : e.target.value.trim(),
                    'uuid' : uuid,
                    'userId': params.get('id'),
                    'marketOwner': params.get('frm'),
                }
                // sendJsonMessage(msgData);
                client.current.publish({
                    destination: "/api/topic",
                    body: JSON.stringify(msgData)
                })
                setChat([...chat, TalkMyMessage(msgData.message.toString(),0)]);
                e.target.value = '';
            }
        }
        // 자동 스크롤 제일 아래로
    }
    useEffect(() =>{
        chatBody.current.scrollTop = chatBody.current.scrollHeight;
    },[chat])


    useEffect(() => {
        connect();
        return () => disconnect();
    }, []);

    const disconnect = () => {
        client.current.deactivate();
    };

    const connect = () => {
        client.current = new StompJs.Client({
          brokerURL: "ws://localhost:8080/api/ws", // 웹소켓 서버로 직접 접속
        //   webSocketFactory: () => new SockJS("/api/ws"), // proxy를 통한 접속
          connectHeaders: {
            "auth-token": "spring-chat-auth-token",
          },
          debug: function (str) {
            console.log(str);
          },
          reconnectDelay: 5000,
          heartbeatIncoming: 4000,
          heartbeatOutgoing: 4000,
          onConnect: () => {
            subscribe();
          },
          onStompError: (frame) => {
            console.error(frame);
          },
        });
    
        client.current.activate();
      };


    const subscribe = () => {
        let msgData = {
            'message' : '안녕',
            'uuid' : uuid,
            'userId': params.get('id'),
            'marketOwner': params.get('frm'),
        }

        client.current.subscribe(`/topic/user`, ({ body }) => {
          setChatMessages((_chatMessages) => [..._chatMessages, msgData]);
        });
      };
    
    const publish = (message) => {
    if (!client.current.connected) {
        return;
    }

    client.current.publish({
        destination: "/queue/chat",
        body: 'hello'
        // body: JSON.stringify({ roomSeq: 1, message }),
    });

    setMessage("");
    };



// useEffect(() => {
//     console.log(lastJsonMessage);
//     if(lastJsonMessage === null) return;
//     if(lastJsonMessage.uuid !== uuid) return;
//     if(lastJsonMessage.userId === null) return;
//     if(lastJsonMessage.userId === params.get('id')) return;
//     setChat([...chat, TalkMyMessage(lastJsonMessage.message.toString(),1)]);
// }, [lastJsonMessage])

    return (
        <MDBContainer className="py-5">
        <MDBRow className="d-flex justify-content-center">
            <MDBCol md="8" lg="6" xl="4">
            <MDBCard id="chat1" style={{ borderRadius: "15px" }}>
                <MDBCardHeader
                className="d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
                style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                }}
                >
                <MDBIcon fas icon="angle-left" />
                <p className="mb-0 fw-bold">Live chat</p>
                <MDBIcon fas icon="times" />
                </MDBCardHeader>
                    <div className='scrollarea' ref={chatBody}>
                        <MDBCardBody className='w-auto h-auto'>

                        {chat.map((item, index) => {
                            return item;

                        })}
                        </MDBCardBody>
                    </div>
                <MDBTextArea
                            className="form-outline"
                            label="Type your message"
                            id="textAreaExample"
                            rows={2}
                            style={{ resize: "none" }}
                            onKeyUp={(e) => onKeyUpInput(e) }
                        />
            </MDBCard>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
    );

}

export default TalkTalk;