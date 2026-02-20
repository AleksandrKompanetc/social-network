import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import styles from "./Dialogs.module.css";
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from "../../redux/state.js";

const Dialogs = (props) => {

  let newMessage = React.createRef();

  let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)
  let messagesElements = props.state.messages.map( message => <Message message={message.message} />)

  let newMessageBody = props.state.newMessageBody;

  let onSendMessageClick = () => {
    let text = newMessage.current.value;
    props.dispatch(updateNewMessageBodyActionCreator(text));
    props.dispatch(sendMessageActionCreator());
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={styles.messages}>
        <div>
          <textarea value={newMessageBody} ref={newMessage}></textarea>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
        <div>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;