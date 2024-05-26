import React from 'react'
import styles from './footer.module.css'
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className='flex'>
      <Image src="/canguro.png" alt="Canguros" width={40} height={25}></Image>
      <div className={styles.firma}>Canguros 2024</div>

      </div>
      
    </div>
  )
}

export default Footer