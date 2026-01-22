import React from 'react'
import styles from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
  return (
    <div>
      <div>
        <img src="./beach.jpg" width={700} alt="" />
      </div>
      <div>
        IMG
      </div>
      <div>
        AVA + Description
      </div>
      <MyPosts />
    </div>

  )
}

export default Profile