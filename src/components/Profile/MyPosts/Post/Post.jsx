import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="./ava.jpg" alt="Post 1" />
      {props.message}
      <div>
        <span>Like</span>{props.likesCount}
      </div>
    </div>
  )
}

export default Post;