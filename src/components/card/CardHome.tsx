import React from 'react'
import {Card, CardBody} from "@nextui-org/react";
import { IconMessage2Question } from '@tabler/icons-react';
import { IconEyeExclamation } from '@tabler/icons-react';
import { IconBulb } from '@tabler/icons-react';

interface CardHome {
  title: string,
  message: string,
  icon: string
}

const CardHome = ({title, message, icon}: CardHome) => {

  let IconComponent;

  if (icon.toLowerCase() === 'question') {
    IconComponent = <IconMessage2Question stroke={2} size={50} />;
  } else if (icon.toLowerCase() === 'alert') {
    IconComponent = <IconEyeExclamation stroke={2} size={50} />;
  } else if (icon.toLowerCase() === 'idea') {
    IconComponent = <IconBulb stroke={2} size={50} />;
  }

  return (
    <Card className='w-52 h-60'>
      <CardBody className='text-center justify-between py-10 flex items-center'>
        {IconComponent}
        <h2 className='font-semibold'>{title}</h2>
        <p>{message}</p>
      </CardBody>
    </Card>
  )
}

export default CardHome