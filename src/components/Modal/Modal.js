import React from "react";
import styles from "./Modal.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Modal = (props) => {
  const clickHandler = () => {
    props.onModalClose();
  };

  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.errorMessage}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={clickHandler}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
