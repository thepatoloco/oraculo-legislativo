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
        <h2 className='text-black text-center text-md mb-4 px-2'>{ initiative.title }</h2>
        <div className="flex justify-center items-stretch gap-4 w-full">
          <iframe
            src={initiative.file_url}
            className="w-96 rounded border border-slate-800"
          />
          <ChatComponent id={initiative.id}/>
        </div>
      </div>
    </>
    
  )
}

export default ChatPage;