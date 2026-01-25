import React from "react";
import { NavLink as Navlink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogItem = ({ name, isActive }) => {
  return (
    <div className={`${styles.dialog} ${isActive ? styles.active : ""}`}>
      <Navlink>{name}</Navlink>
    </div>
  );
};

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog + ' ' + styles.active}>
          <Navlink>Dima</Navlink>
        </div>
        <div className={styles.dialog}>
          <Navlink>Andrey</Navlink>
        </div>
        <div className={styles.dialog}>
          <Navlink>Sveta</Navlink>      
        </div>
        <div className={styles.dialog}>
          <Navlink>Sasha</Navlink>
        </div>
        <div className={styles.dialog}>
          <Navlink>Viktor</Navlink> 
        </div>
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