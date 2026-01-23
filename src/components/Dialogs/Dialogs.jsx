import React from "react";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className="dialogs">
      <div className="dialogs-items">
        <div className="dialog">
          Dima
        </div>
        <div className="dialog">
          Andrey
        </div>
        <div className="dialog">
          Sveta
        </div>
        <div className="dialog">
          Sasha
        </div>
        <div className="dialog">
          Viktor
        </div>
      </div>
      <div className="messages">
        <div className="message">Hi!</div>
        <div className="message">How are you?</div>
        <div className="message">Let's meet up!</div>
      </div>
    </div>
  );
};

export default Dialogs;