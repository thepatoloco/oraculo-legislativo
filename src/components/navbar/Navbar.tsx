import React from 'react'
import styles from './navbar.module.css'
import Links from './links/Links'
import Link from 'next/link'
import Image from "next/image";


const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.imgContainer}>
        <Image src="/logo.png" alt="Logo" fill/>
      </Link>
      
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Navbar