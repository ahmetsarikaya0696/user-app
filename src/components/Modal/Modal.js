import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onModalClose} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.errorMessage}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onModalClose}>Ok</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onModalClose={props.onModalClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          errorMessage={props.errorMessage}
          onModalClose={props.onModalClose}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
