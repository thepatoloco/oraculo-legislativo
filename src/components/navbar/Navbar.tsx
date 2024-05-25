import React from 'react'
import styles from './navbar.module.css'
import Links from './links/Links'


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Navbar