let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 5 },
      { id: 2, message: "It's my first post", likesCount: 10 },
      { id: 3, message: "Hello world", likesCount: 11 },
      { id: 4, message: "New post", likesCount: 11 }
    ]
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Let's meet up!" }
    ],
    dialogs: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Viktor" }
    ]
  },
  sidebar: {}
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost);
}

export default state;