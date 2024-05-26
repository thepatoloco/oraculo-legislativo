import React from 'react'
import ChatComponent from '@/components/chatComponent/ChatComponent';

const ChatPage = () => {
  return (
    <>
      {/* se pasa el id que se seleccione en el explorer */}
      <ChatComponent id={1}/>
    </>
    
  )
}

export default ChatPage;