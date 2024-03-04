import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="user avater" />
                </div>
            </div>
            <div className='chat-bubble text-white bg-blue-400'>Hi! What's up..</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
        </div>
    )
}

export default Message