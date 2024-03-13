import React, { useEffect, useRef } from 'react'

import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeleton/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {

  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMesRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lastMesRef.current) {
        lastMesRef.current?.scrollIntoView({ behaviour: "smooth" })
      }
    }, 100);
  }, [messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>

      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id}
          ref={lastMesRef}>
          <Message message={message} />
        </div>
      ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start conversation</p>
      )}

    </div>
  )
}

export default Messages