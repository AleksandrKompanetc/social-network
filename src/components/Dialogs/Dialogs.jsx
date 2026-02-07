import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {

  let newMessage = React.createRef();

  let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)
  let messagesElements = props.state.messages.map( message => <Message message={message.message} />)

  let addMessage = () => {
    let text = newMessage.current.value;
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={styles.messages}>
        <div>
          <textarea ref={newMessage}></textarea>
          <button onClick={addMessage}>Add message</button>
        </div>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;