import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Link } from "@nextui-org/react";
import { BlockInfo } from '@/utils/types';

interface CardBlockChain {
  hash: string,
  block_data: BlockInfo
}

const CardBlockChain = ({ hash, block_data }: CardBlockChain) => {
  return (
    <Card className='w-64 h-96 mt-10'>
      <CardHeader className='flex justify-center'>
        <strong><p>{`${hash.substring(0, 6)}...${hash.substring(hash.length - 6, hash.length)}`}</p></strong>
      </CardHeader>
      <Divider />
      <CardBody className='overflow-hidden text-start justify-evenly py-8 flex items-start'>
        {block_data.type === "initiative" ? (
          <>
            <p className='break-normal'><strong>Doc:</strong> <a href={block_data.file_url}>{block_data.file_url}</a></p>
            <br />
            <p style={{ wordBreak: 'break-all' }}><strong>Hash:</strong> {block_data.file_hash}</p>
            <br />
            <p className='break-normal'><strong>Fecha:</strong> {(new Date(block_data.date)).toLocaleDateString('es-ES')}</p>
            <br />
            <p style={{ wordBreak: 'break-all' }}><strong>Hash anterior:</strong> {block_data.previous_block_hash}</p>
          </> 
        ) : (
          <>
            <p className='break-normal'><strong>Content:</strong> {(new TextEncoder().encode(block_data.content)).length}</p>
            <br />
            <p style={{ wordBreak: 'break-all' }}><strong>Hash:</strong> {block_data.content_hash}</p>
            <br />
            <p className='break-normal'><strong>Fecha:</strong> {(new Date(block_data.date)).toLocaleDateString('es-ES')}</p>
            <br />
            <p style={{ wordBreak: 'break-all' }}><strong>Hash anterior:</strong> {block_data.previous_block_hash}</p>
          </> 
        )}
        
      </CardBody>
      <Divider />
    </Card>
  );
}

export default CardBlockChain