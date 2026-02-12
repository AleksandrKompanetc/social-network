let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 5 },
        { id: 2, message: "It's my first post", likesCount: 10 },
        { id: 3, message: "Hello world", likesCount: 11 },
        { id: 4, message: "New post", likesCount: 11 }
      ],
      newPostText: 'it-kamasutra'
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
}

let rerenderEntireTree = () => {
  console.log('State');
}

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;