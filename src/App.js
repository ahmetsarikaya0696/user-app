import React, { useState } from "react";
import styles from "./App.module.css";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([
    { id: "u1", name: "ahmet", age: 27 },
    { id: "u2", name: "aleyna", age: 22 },
  ]);

  const addUserHandler = (user) => {
    setUsers((prevState) => [user, ...prevState]);    
  };

  return (
    <div>
      <section className={styles["new-user"]}>
        <NewUser onAddUser={addUserHandler} />
      </section>
      <section className={styles["user-list"]}>
        <UserList users={users} />
      </section>
    </div>
  );
}

export default App;
