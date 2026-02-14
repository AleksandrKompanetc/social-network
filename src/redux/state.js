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
  },
  _callSubscriber() {
    console.log('State');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  dispatch() {

  }
}

window.store = store;

export default store;