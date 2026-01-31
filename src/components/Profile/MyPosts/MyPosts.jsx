import React from 'react';
import Post from './Post/Post.jsx';
import styles from './MyPosts.module.css';

const MyPosts = () => {

  let postsData = [
    { id: 1, message: "Hello, world!", likesCount: 5 },
    { id: 2, message: "My first post", likesCount: 10 }
  ];

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