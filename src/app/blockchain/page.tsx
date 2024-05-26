import React from 'react'
import styles from './page.module.css'
import CardBlockChain from '@/components/cardBlockChain/CardBlockChain'
import { Container } from 'postcss'


const block = [
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
]

const BlockchainPage = () => {
  return (
    <>
      <div className='flex flex-col items-center overflow-x-scroll'>
        <h1 className={styles.title}>
          Actividad del Senado
        </h1>

        <div className={styles.cardContainer}>
          {block.map((block, index) => (
            <CardBlockChain
              key={index}
              title={block.title}
              documentURL={block.DocumentURL}
              hash={block.hash}
              date={block.date}
              previousHash={block.previousHash} />
          ))}
        </div>

      </div>
    </>
  )
}

export default BlockchainPage;