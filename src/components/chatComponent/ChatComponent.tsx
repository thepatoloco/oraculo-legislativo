'use client'
import React, { useEffect, useRef, useState } from 'react'
import SenderMessage from './senderMessage/SenderMessage'
import ReceiverMessage from './receiverMessage/ReceiverMessage'
import { IconSend2 } from '@tabler/icons-react';
import { CoreMessage, TextPart } from 'ai';
import { continueConversation } from '@/app/explorer/[id]/actions';
import { readStreamableValue } from 'ai/rsc';

interface ChatComponentProps {
  id: string
}

const ChatComponent = ({ id }: ChatComponentProps) => {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [previousScrollHeight, setPreviousScrollHeight] = useState(0);

  async function handleSubmit() {
    const newMessages: CoreMessage[] = [
        ...messages,
        { role: "user", content: input }
    ];

    setInput("");
    setMessages(newMessages);
    setIsSubmitting(true);
    
    const result = await continueConversation(newMessages, id);
    for await (const content of readStreamableValue(result)) {
        setMessages([
            ...newMessages,
            ...content??[]
        ])
    }

    setIsSubmitting(false);
  }

  useEffect(() => {
    if (!scrollRef.current) return;
    if (scrollRef.current.scrollTop + scrollRef.current.clientHeight + 5 > previousScrollHeight) scrollRef.current.scrollTop = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
    setPreviousScrollHeight(scrollRef.current.scrollHeight);

  }, [scrollRef.current?.scrollHeight]);

  return (
    <>
      <div className='w-[700px] border border-slate-800 rounded-lg'> 

        <div className='border-b-1 border-[#CBB6A5] h-12 flex items-center rounded-t-lg mb-1'>
          <h2 className='pl-8 text-black'>
            Asistente virtual
          </h2>
        </div>

        <div className='px-2'>
          <div className='h-72 overflow-y-scroll mb-1 flex flex-col gap-3' ref={scrollRef}>
            {messages.map((msg, index) => {
              switch (msg.role) {
                case "user":
                  return <SenderMessage key={index} message={msg.content as string} />;
                case "assistant":
                  const messageContent = (msg.content[0] as TextPart).text;
                  return messageContent.length <= 0 ? <></> : <ReceiverMessage key={index} message={messageContent} />;
                default:
                  return <></>;
              }
            })}
          </div>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault();
          if (isSubmitting) return;
          handleSubmit();
        }} className='flex p-2'>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ width: 'calc(100% - 60px)', padding: '10px' }}
            className='border border-[#CBB6A5] rounded-lg text-black'
          />
          <button type="submit" disabled={isSubmitting} className='px-2 py-2 ml-2 text-black bg-[#CBB6A5] rounded-lg'>
            <IconSend2 stroke={2} size={23}/>
          </button>

        </form>
      </div>

    </>
  )
}

export default ChatComponent