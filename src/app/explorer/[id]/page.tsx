import React from 'react'
import ChatComponent from '@/components/chatComponent/ChatComponent';
import { db } from '@/utils/db';
import { notFound } from 'next/navigation';


interface ChatPageProps {
  params: { id: string }
}

const ChatPage = async ({ params }: ChatPageProps) => {
  const initiative = await db.initiative.findUnique({ where: { id: params.id } });
  if (!initiative) notFound();

  return (
    <>
      <div className='flex items-center flex-col'>
        <h1 className='text-black text-center text-2xl mt-4'> 
          Conversación sobre la iniciativa:
        </h1>
        <h2 className='text-black text-center text-md mb-4'>{ initiative.title }</h2>
        <ChatComponent id={initiative.id}/>
      </div>
    </>
    
  )
}

export default ChatPage;