import React from 'react';

interface SenderMessageProps {
  message: string;
}

const SenderMessage = ({ message }: SenderMessageProps) => {
  return (
    <div className='text-right mx-3'>
      <div className='inline-block p-3 bg-[#4B3426] rounded-xl'>
        {message}
      </div>
    </div>
  );
};

export default SenderMessage;