import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import styles from "./Dialogs.module.css";

const Dialogs = () => {

  let dialogs = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" }
  ]

  let messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Let's meet up!" }
  ]

  let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)
  let messagesElements = messages.map( message => <Message message={message.message} />)

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;