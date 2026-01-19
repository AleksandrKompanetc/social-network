import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="./ava.jpg" alt="Post 1" />
      Post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  )
}

export default Post;