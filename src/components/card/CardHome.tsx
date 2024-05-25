import React from 'react'
import {Card, CardBody} from "@nextui-org/react";

interface CardHome {
  title: string,
  message: string
}

const CardHome = ({title, message}: CardHome) => {
  return (
    <Card className='w-52 h-60'>
      <CardBody className='text-center justify-between py-10'>
        <h2 className='font-semibold'>{title}</h2>
        <p>{message}</p>
      </CardBody>
    </Card>
  )
}

export default CardHome