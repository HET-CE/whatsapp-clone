import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import { React, useState, useEffect, useParams} from 'react'
import db from '../firebase';

import "./Chat.css";
function Chat() {

    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const {roomId} = useParams();
    const [ roomName, setRoomName] = useState("");

    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.date().name)
            })
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 1000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        setInput("");
    };

    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className="chat__name">Het</span>
                    Hey guys
                    <span className = "chat__timestamp">3:52pm</span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder = "Type a Message" />
                    <button onClick={sendMessage} type = "submit">Send a message</button>
                </form>
                <Mic />
            </div>

        </div>
    )
}

export default Chat
