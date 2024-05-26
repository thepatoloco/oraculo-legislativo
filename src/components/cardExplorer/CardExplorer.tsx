import React from 'react'
import {Card, CardBody} from "@nextui-org/react";
import { IconPhotoScan } from '@tabler/icons-react';

interface CardExplorer {
  title: string,
  description: string,
  political_party: string,
  date: string
}

const CardExplorer = ({title, description, political_party, date}: CardExplorer) => {

  return (
    <a href="/explorer/chat">
      <Card className='w-56 h-80'>
        <CardBody className='text-center justify-between py-10 flex items-center'>
          <h2 className='font-semibold'>{title}</h2>
          <IconPhotoScan stroke={2} size={60} />
          <p>{description}</p>
          <p>{date}</p>
        </CardBody>
      </Card>
    </a>
    
  )
}

export default CardExplorer