import React from 'react'
import {Card, CardBody, Image} from "@nextui-org/react";
import { IconPhotoScan } from '@tabler/icons-react';

interface CardExplorer {
  id: string,
  title: string,
  description: string,
  political_party: string
}

const CardExplorer = ({id, title, description, political_party}: CardExplorer) => {

  return (
    <a href={`/explorer/${id}`}>
      <Card className='w-56 h-80 hover:bg-slate-100'>
        <CardBody className='text-center justify-between py-10 flex items-center overflow-hidden'>
          <h2 className='font-semibold text-large'>{title.length > 30 ? `${title.substring(0, 30)}...` : title}</h2>
          <div className="flex justify-center items-center gap-3 w-full">
            <Image
              src={`/party/${political_party}.jpg`}
              width={30}
              height={30}
              radius="none"
            />
            <p>{political_party}</p>
          </div>
          {/* <IconPhotoScan stroke={2} size={60} /> */}
          <p>{description.length > 110 ? `${description.substring(0, 110)}...` : description}</p>
        </CardBody>
      </Card>
    </a>
    
  )
}

export default CardExplorer