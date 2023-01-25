import { Navigate, useParams } from "react-router-dom";
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

function TalkTalk({user}){
    const {uuid} = useParams();
    const params = new URLSearchParams(window.location.search);
    const chatBody = useRef();
    const [chat, setChat] = useState([]);
    const client = useRef({});
    const [marketOwner, setMarketOwner] = useState();
    useEffect(() => {
        if(user === undefined || user === "undefine" || user === ''){return ;}
        connect();
        return () => disconnect();
    }, [user]);

    const connect = () => {
        client.current = new StompJs.Client({
            brokerURL: "ws://localhost:8080/api/ws", // 웹소켓 서버로 직접 접속
            connectHeaders: {
                "userId" : params.get("id"),
                "uuid": uuid,
                "loginCheck": user === '' || user === undefined ? "false" : "true",
            },
            onConnect: () =>{
                subscription();
            },
            debug: function (str) {
                // console.log(str);
            },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
        });
        client.current.activate();
    }
    
    client.current.onStompError = function (frame) {
    //   console.log('Broker reported error: ' + frame.headers['message']);
    //   console.log('Additional details: ' + frame.body);
    };

    const disconnect = () => {
        client.current.deactivate();
    };
    
    const subscription = () => {
        //채팅방 내역 구독
        client.current.subscribe(`/queue/user/${uuid}`, (msg) => {
            let data = JSON.parse(msg.body);
            if(data.length >= 0){return;}
            if(data.userId !== params.get('id')){
                setChat((chat) => [...chat, TalkMyMessage(data.message.toString(),1)]);
            }
        });
        //다이렉트 메시지 구독
        client.current.subscribe('/user/queue/message', (msg) => {
            let data = JSON.parse(msg.body);
            //console.log(data)
            console.log(data)
            if(data.type === 'marketOwner'){
                setMarketOwner(() => data.marketOwner);
            }
            if(data.type === 'error'){
                switch(data.code){
                    case "1":
                        console.log('정상적인 접근이 아닙니다.')
                        break;
                    case "2":
                        console.log('uuid틀림')
                        window.location.href = `/ct/${data.uuid}?id=${params.get('id')}`;
                        break;
                    case "3":
                        console.log('채팅방이 존재하지 않습니다. [채팅방 생성]')
                        break;
                    case "4":
                        console.log('마켓오너 잘못된 접속')
                        break;
                    default:
                        console.log('알수없는 에러')
                        break;
                }
            }
            if(data.type !== 'connect'){
                return ;
            }
            if(data.chatList === null){
                return;
            }
            setChat([]);
                data.chatList.map((item) => {
                    return setChat((chat) => [...chat, TalkMyMessage(item.message.toString(),item.sender === params.get('id') ? 0 : 1)]);
                })
        })

        let msgData = {
            'type': 'connect',
            'uuid' : uuid,
            'userId': params.get('id'),
            'marketOwner': '',
        }
        client.current.publish({
            destination: "/api/user",
            body: JSON.stringify(msgData)
        })
    }

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
                    'marketOwner': marketOwner,
                }
                if(msgData.message === ''){
                    return;
                }
                client.current.publish({
                    destination: "/api/queue",
                    body: JSON.stringify(msgData)
                    // binaryBody: binaryData,
                    // headers: { 'content-type': 'application/octet-stream' },
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