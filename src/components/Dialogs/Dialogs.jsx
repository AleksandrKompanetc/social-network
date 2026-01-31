import React from "react";
import { NavLink as Navlink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogItem = ( props ) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={styles.dialog + ' ' + styles.active}>
      <Navlink to={path}>{props.name}</Navlink>
    </div>
  );
};

const Message = ( props ) => {
  return (
    <div className={styles.dialog}>{props.message}</div>
  )
}

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
  let messagesElements = messages.map( messages => <Message message={message.message} />)

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