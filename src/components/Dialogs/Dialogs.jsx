import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import styles from "./Dialogs.module.css";
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from "../../redux/state.js";

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let newMessage = React.createRef();

  let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)
  let messagesElements = state.messages.map( message => <Message message={message.message} />)

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyActionCreator(body));
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={styles.messages}>
        <div>
          <textarea 
            value={newMessageBody} 
            ref={newMessage} 
            onChange={onNewMessageChange}
          />
          <button onClick={onSendMessageClick}>Send</button>
        </div>
        <div>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;