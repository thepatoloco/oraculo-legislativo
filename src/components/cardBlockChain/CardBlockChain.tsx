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
        <strong><p>{title}</p></strong>
      </CardHeader>
      <Divider />
      <CardBody className='overscroll-none text-start justify-evenly py-8 flex items-start'>
        <p className='break-normal'><strong>Doc:</strong> {documentURL}</p>
        <br />
        <p style={{ wordBreak: 'break-all' }}><strong>Hash:</strong> {hash}</p>
        <br />
        <p className='break-normal'><strong>Fecha:</strong> {date}</p>
        <br />
        <p style={{ wordBreak: 'break-all' }}><strong>Hash anterior:</strong> {previousHash}</p>
      </CardBody>
      <Divider />
    </Card>
  );
}

export default CardBlockChain