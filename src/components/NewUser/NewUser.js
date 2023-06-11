import React, { useState } from "react";
import styles from "./NewUser.module.css";
import Button from "../UI/Button";

const NewUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onChangeHandler = (event) => {
    if (event.target.type === "text") {
      setName(event.target.value.toString());
    } else {
      setAge(+event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const user = { id: Math.random().toString(), name: name , age: age };
    props.onAddUser(user);
  };

  return (
    <div className={styles.todoForm}>
      <form onSubmit={submitHandler}>
        <div className={`${styles["form-control"]}`}>
          <label>Name</label>
          <input onChange={onChangeHandler} type="text" value={name} />
        </div>

        <div className={`${styles["form-control"]}`}>
          <label>Age</label>
          <input onChange={onChangeHandler} type="number" value={age} />
        </div>

        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default NewUser;
