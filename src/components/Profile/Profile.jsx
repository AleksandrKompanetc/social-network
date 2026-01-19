import React from 'react'
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src="./beach.jpg" width={700} alt="" />
      </div>
      <div>
        IMG
      </div>
      <div>
        AVA + Description
      </div>
    </div>

  )
}

export default Profile