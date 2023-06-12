import React from "react";
import styles from "./Modal.module.css";
import Button from "../UI/Button";

const Modal = (props) => {
  const clickHandler = () => {
    props.onModalClose();
  };

  return <div className={styles.modal}>
    <div className={styles.title}>{props.title}</div>
    <div>
      <p className={styles.errorMessage}>{props.errorMessage}</p>
      <Button onClick={clickHandler} className={styles.btn}>Ok</Button>
    </div>
  </div>;
};

export default Modal;
