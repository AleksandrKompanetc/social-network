import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='content'>
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
        <div className='posts'>
          <div className='post'>
            Post 1
          </div>
          <div className='post'>
            Post 2
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile