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
      <div>
        My posts
        <div>
          New posts
        </div>
        <div className={styles.posts}>
          <div className={styles.item}>
            Post 1
          </div>
          <div className={styles.item}>
            Post 2
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile