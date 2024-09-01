import React from 'react'
import { Stack } from '@mui/material'
import ChatItem from '../shared/ChatItem'


    const ChatList = ({w="100%",chats=[],chatId,onlineUsers=[],newMessagesAlert=[
        {
            chatId:"",
            count:0,
        },
    ],
    handleDeleteChat
    
    }) => {
      return (
        <Stack  width={w} direction={"column"}>
            {chats?.map((data,index)=>{
                const {avatar,name,_id,groupChat,members}=data;
                const newMessageAlert=newMessagesAlert.find(
                    ({chatId})=>chatId===_id
                )
                const isOnline=members?.some((member)=>onlineUsers.includes(_id));
                return (
                <ChatItem
                avatar={avatar}
                name={name}
                _id={_id}
                isOnline={isOnline}
                sameSender={chatId==_id}
                    index={index}
                    newMessageAlert={newMessageAlert}
                    key={_id}
                    handleDeleteChat={handleDeleteChat}
                />);
            })}
    
        </Stack>
      )
    }
  

export default ChatList