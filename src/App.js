import React, { useState } from "react";
import styles from "./App.module.css";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);

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
        <NewUser onAddUser={addUserHandler} />
      </section>
      <section className={styles["user-list"]}>
        <UserList onRemove={removeHandler} users={users} />
      </section>
    </div>
  );
}

export default App;
