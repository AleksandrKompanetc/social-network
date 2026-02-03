import React from 'react';
import Post from './Post/Post.jsx';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {

  // let posts = [
  //   { id: 1, message: "Hi, how are you?", likesCount: 5 },
  //   { id: 2, message: "It's my first post", likesCount: 10 },
  //   { id: 3, message: "Hello world", likesCount: 11 },
  //   { id: 4, message: "New post", likesCount: 11 }
  // ];

  let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

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
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;