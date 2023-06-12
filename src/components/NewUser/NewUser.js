import React, { useState } from "react";
import styles from "./NewUser.module.css";
import Button from "../UI/Button";

const NewUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const changeHandler = (event) => {
    if (event.target.type === "text") {
      setName(event.target.value.toString());
    } else {
      setAge(+event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const isNameValid = name.trim().length !== 0;
    const isAgeValid = age > 0;

    let errorMessage = "";

    if (!isNameValid && !isAgeValid) {
      errorMessage += "Name field can not be empty!, Age field cannot be 0 or less!";
    } else if (!isNameValid) {
      errorMessage += " Name field can not be empty!";
    } else if (!isAgeValid) {
      errorMessage += " Age field cannot be 0 or less!";
    }

    if(errorMessage !== ""){
      props.onOpenModal(errorMessage);
      return;
    }

    const user = { id: Math.random().toString(), name: name, age: age };
    props.onAddUser(user);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={`${styles["form-control"]}`}>
          <label>Name</label>
          <input onChange={changeHandler} type="text" value={name} />
        </div>

        <div className={`${styles["form-control"]}`}>
          <label>Age</label>
          <input onChange={changeHandler} type="number" value={age} />
        </div>

        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default NewUser;
