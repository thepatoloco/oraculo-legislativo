import React from 'react'

interface ReceiverMessageProps {
  message: string;
}

const ReceiverMessage = ({ message }: ReceiverMessageProps) => {
  return (
    <div className='text-left mx-3'>
      <div className='inline-block p-3 bg-[#E7DED9] rounded-xl'>
        {message}
      </div>
    </div>
  )
}

export default ReceiverMessage