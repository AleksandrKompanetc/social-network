import React from 'react';
import Post from './Post/Post.jsx';
import styles from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        New posts
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={styles.posts}>
        <Post likesCount={5} />
        <Post likesCount={10} />
      </div>
    </div>
  )
}

export default MyPosts;