import React from 'react';
import { NavLink as Navlink } from "react-router-dom";
import styles from './DialogItem.module.css';

const DialogItem = ( props ) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={styles.dialog + ' ' + styles.active}>
      <Navlink to={path}>{props.name}</Navlink>
    </div>
  );
};

export default DialogItem;