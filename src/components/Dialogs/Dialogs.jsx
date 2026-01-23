import React from "react";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog + ' ' + styles.active}>
          Dima
        </div>
        <div className={styles.dialog}>
          Andrey
        </div>
        <div className={styles.dialog}>
          Sveta
        </div>
        <div className={styles.dialog}>
          Sasha
        </div>
        <div className={styles.dialog}>
          Viktor
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