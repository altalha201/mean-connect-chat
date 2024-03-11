// import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';

const Message = (message) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.message.senderId === authUser.payload.id;
    const formatedTime = extractTime(message.message.createdAt)
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.payload.profilePic : selectedConversation?.profilePic;
    const bubbleBg = fromMe ? 'bg-blue-400' : '';
    const messageCon = message.message.message

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={profilePic} alt="user avater" />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBg}`}>{messageCon}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formatedTime} </div>
        </div>
    )
}

export default Message