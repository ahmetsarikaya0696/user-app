import React, { useState } from "react";
import styles from "./App.module.css";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserList/UserList";
import Modal from "./components/Modal/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const openModalHandler = (errorMessage) => {
    setErrorMessage(errorMessage);
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setErrorMessage("");
    setShowModal(false);
  };

  const addUserHandler = (user) => {
    setUsers((prevState) => [user, ...prevState]);
  };

  const removeHandler = (user) => {
    setUsers((prevState) => {
      let index = prevState.indexOf(user);
      if (index !== -1) {
        prevState.splice(index, 1);
      }

      return [...prevState];
    });
  };

  return (
    <div>
      <section className={styles["new-user"]}>
        <NewUser onOpenModal={openModalHandler} onAddUser={addUserHandler} />
      </section>
      <section className={styles["user-list"]}>
        <UserList onRemove={removeHandler} users={users} />
      </section>
      {showModal && <Modal onModalClose={closeModalHandler} title="Invalid User!" errorMessage={errorMessage} />}
    </div>
  );
}

export default App;
