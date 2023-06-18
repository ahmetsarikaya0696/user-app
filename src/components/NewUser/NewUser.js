import React, { Fragment, useRef } from "react";
import styles from "./NewUser.module.css";
import Button from "../UI/Button";

const NewUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    const isNameValid = enteredName.trim().length !== 0;
    const isAgeValid = enteredAge > 0;

    let errorMessage = "";

    if (!isNameValid && !isAgeValid) {
      errorMessage +=
        "Name field can not be empty!, Age field cannot be 0 or less!";
    } else if (!isNameValid) {
      errorMessage += " Name field can not be empty!";
    } else if (!isAgeValid) {
      errorMessage += " Age field cannot be 0 or less!";
    }

    if (errorMessage !== "") {
      props.onOpenModal(errorMessage);
      return;
    }

    const user = { id: Math.random().toString(), name: enteredName, age: enteredAge };
    props.onAddUser(user);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div className={`${styles["form-control"]}`}>
          <label>Name</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
        </div>

        <div className={`${styles["form-control"]}`}>
          <label>Age</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
        </div>

        <Button type="submit">Add User</Button>
      </form>
    </Fragment>
  );
};

export default NewUser;
