'use client'
import React, { useState } from 'react'
import SenderMessage from './senderMessage/SenderMessage'
import ReceiverMessage from './receiverMessage/ReceiverMessage'
import { IconSend2 } from '@tabler/icons-react';

interface ChatComponent {
  id: number
}

const ChatComponent = ({ id }: ChatComponent) => {

  const [messages, setMessages] = useState<{ sender: boolean, text: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: true, text: input }]);
      setInput('');
    }
  };

  return (
    <>
      <div className='flex items-center flex-col'>
        <h1 className='text-black text-center text-2xl my-4'> 
          Conversación sobre la iniciativa LOREM IPSUM
        </h1>
        <div className='w-[700px] mx-11 border border-slate-800 rounded-lg'> 

          <div className='border-b-1 border-[#CBB6A5] h-12 flex items-center rounded-t-lg mb-1'>
            <h2 className='pl-8 text-black'>
              Asistente virtual
            </h2>
          </div>

          <div className='px-2'>
            <div className='h-64 overflow-y-auto mb-1'>
              {messages.map((msg, index) => (
                msg.sender ? <SenderMessage key={index} message={msg.text} /> : <ReceiverMessage key={index} message={msg.text} />
              ))}
            </div>
          </div>

          <div className='flex p-2'>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ width: 'calc(100% - 60px)', padding: '10px' }}
              className='border border-[#CBB6A5] rounded-lg text-black'
            />
            <button onClick={handleSend} className='px-2 py-2 ml-2 text-black bg-[#CBB6A5] rounded-lg'>
              <IconSend2 stroke={2} size={23}/>
            </button>

          </div>
        </div>
      </div>

    </>
  )
}

export default ChatComponent