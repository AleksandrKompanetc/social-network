import React from 'react';
import Post from './Post/Post.jsx';
import styles from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        New posts
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={styles.posts}>
       <Post likesCount={5} />
       <Post likesCount={10} />
      </div>
    </div>
  )
}

export default MyPosts;