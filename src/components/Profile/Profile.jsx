import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost} />
    </div>

  )
}

export default Profile