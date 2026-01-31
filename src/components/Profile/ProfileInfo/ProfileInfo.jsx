import React from 'react'
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="./beach.jpg" width={700} alt="" />
      </div>
      <div className={styles.descriptionBlock}>
        <div>
          IMG
        </div>
        <div>
          AVA + Description
        </div>
      </div>
    </div>

  )
}

export default ProfileInfo