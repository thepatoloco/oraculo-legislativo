import React from 'react'
import styles from './page.module.css'
import CardBlockChain from '@/components/cardBlockChain/CardBlockChain'
import { Container } from 'postcss'
import { IconArrowLeft } from '@tabler/icons-react';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import { db } from '@/utils/db';
import { BlockInfo } from '@/utils/types';

const block = [
  {
    title: "8dcf...abf5 First",
    DocumentURL: "https://votos.doc.example.com",
    hash: "8dcfb299ac08d9b430026191fdbfa1fac6d16cc588c9fc3efeccae8a37caabf5",
    date: '01/05/2024',
    previousHash: '36b33dc6d79d754b9aef65cca93bdd81e92cb0078fa81211a8b42a3804583e4d'
  },
  {
    title: "8dcf...abf5",
    DocumentURL: "https://votos.doc.example.com",
    hash: "8dcfb299ac08d9b430026191fdbfa1fac6d16cc588c9fc3efeccae8a37caabf5",
    date: '01/05/2024',
    previousHash: '36b33dc6d79d754b9aef65cca93bdd81e92cb0078fa81211a8b42a3804583e4d'
  },
  {
    title: "8dcf...abf5",
    DocumentURL: "https://votos.doc.example.com",
    hash: "8dcfb299ac08d9b430026191fdbfa1fac6d16cc588c9fc3efeccae8a37caabf5",
    date: '01/05/2024',
    previousHash: '36b33dc6d79d754b9aef65cca93bdd81e92cb0078fa81211a8b42a3804583e4d'
  },
  {
    title: "8dcf...abf5",
    DocumentURL: "https://votos.doc.example.com",
    hash: "8dcfb299ac08d9b430026191fdbfa1fac6d16cc588c9fc3efeccae8a37caabf5",
    date: '01/05/2024',
    previousHash: '36b33dc6d79d754b9aef65cca93bdd81e92cb0078fa81211a8b42a3804583e4d'
  },
  {
    title: "8dcf...abf5",
    DocumentURL: "https://votos.doc.example.com",
    hash: "8dcfb299ac08d9b430026191fdbfa1fac6d16cc588c9fc3efeccae8a37caabf5",
    date: '01/05/2024',
    previousHash: '36b33dc6d79d754b9aef65cca93bdd81e92cb0078fa81211a8b42a3804583e4d'
  },
  {
    title: "8dcf...abf5",
    DocumentURL: "https://votos.doc.example.com",
    hash: "8dcfb299ac08d9b430026191fdbfa1fac6d16cc588c9fc3efeccae8a37caabf5",
    date: '01/05/2024',
    previousHash: '36b33dc6d79d754b9aef65cca93bdd81e92cb0078fa81211a8b42a3804583e4d'
  },
  {
    title: "8dcf...abf5 Last",
    DocumentURL: "https://votos.doc.example.com",
    hash: "8dcfb299ac08d9b430026191fdbfa1fac6d16cc588c9fc3efeccae8a37caabf5",
    date: '01/05/2024',
    previousHash: '36b33dc6d79d754b9aef65cca93bdd81e92cb0078fa81211a8b42a3804583e4d'
  },
]

const BlockchainPage = async () => {
  const blocks = await db.block.findMany({ orderBy: { created_at: "desc" } });
  
  return (
    <>
      <h1 className={styles.title}>
        Actividad del Senado
      </h1>
      <div className='flex justify-between px-8'>
        <p className="text-black flex">
          <IconArrowLeft stroke={2} />
          Más antigüos
        </p>
        <p className="text-black flex">
          Más recientes
          <IconArrowRight stroke={2} />
        </p>
      </div>
      <div className='flex flex-col items-start overflow-x-scroll p-8' dir='rtl'>
        <div className={styles.cardContainer}>
          {blocks.map((block, index) => (
            <div dir='ltr' key={index} className='flex items-center'>
              <Image src="/chain.png" alt="Cadena" width={50} height={30} className={index < blocks.length - 1 ? '' : 'opacity-0'} />
              <CardBlockChain
                key={index}
                hash={block.hash}
                block_data={block.data as any}
              />
            </div>

          ))}
        </div>
      </div>
    </>
  )
}

export default BlockchainPage;