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

  let dialogsData = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" }
  ]

  let messagesData = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Let's meet up!" }
  ]

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Viktor" id="5" />
      </div>
      <div className={styles.messages}>
        <Message message="Hi!" />
        <Message message="How are you?" />
        <Message message="Let's meet up!" />
      </div>
    </div>
  );
};

export default Dialogs;