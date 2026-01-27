import React from "react";
import { NavLink as Navlink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogItem = ( props ) => {
  return (
    <div className={styles.dialog + ' ' + styles.active}>
      <Navlink to={'/dialogs/' + props.id}>{props.name}</Navlink>
    </div>
  );
};

const Dialogs = () => {
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
        <div className={styles.message}>Hi!</div>
        <div className={styles.message}>How are you?</div>
        <div className={styles.message}>Let's meet up!</div>
      </div>
    </div>
  );
};

export default Dialogs;