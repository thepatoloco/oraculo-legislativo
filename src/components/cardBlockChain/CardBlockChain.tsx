import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Link } from "@nextui-org/react";

interface CardBlockChain {
  title: string,
  documentURL: string,
  hash: string,
  date: string,
  previousHash: string
}

const CardBlockChain = ({ title, documentURL, hash, date, previousHash }: CardBlockChain) => {
  return (
    <Card className='w-64 h-96 mt-10'>
      <CardHeader className='flex justify-center'>
        <p>{title}</p>
      </CardHeader>
      <Divider />
      <CardBody className='overscroll-none text-center justify-evenly py-8 flex items-center'>
        <p className='break-normal'>Doc: {documentURL}</p>
        <br />
        <p style={{ wordBreak: 'break-all' }}>Hash: {hash}</p>
        <br />
        <p className='break-normal'>Fecha: {date}</p>
        <br />
        <p style={{ wordBreak: 'break-all' }}>Hash anterior: {previousHash}</p>
      </CardBody>
      <Divider />
    </Card>
  );
}

export default CardBlockChain