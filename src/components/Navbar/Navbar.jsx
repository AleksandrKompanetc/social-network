import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={styles.item}>
        <a href="/messages">Messages</a>
      </div>
      <div className={styles.item}>
        <a href="">News</a>
      </div>
      <div className={styles.item}>
        <a href="">Music</a>
      </div>
      <div className={styles.item}>
        <a href="">Settings</a>
      </div>
    </nav>
  )
}

export default Navbar