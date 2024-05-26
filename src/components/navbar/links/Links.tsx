import React from 'react'
import styles from './links.module.css'
import NavLink from './navLink/navLink'

const links = [
  {
    title: "Iniciativas gubernamentales",
    path: "/explorer"
  },
  {
    title: "Actividad Senado",
    path: "/blockchain"
  },
]

const Links = () => {

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link => (
          <NavLink item={link} key={link.title} />
        )))}
      </div>

    </div>

  )
}

export default Links