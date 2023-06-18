import React, { Fragment } from "react";
import styles from "./UserList.module.css";
import UserItem from "./UserItem";

const UserList = (props) => {
  const removeHandler = (user) => {
    props.onRemove(user);
  };

  return (
    <Fragment>
      <h2>User(s)</h2>
      <ul className={styles["user-list"]}>
        {props.users.map((user) => (
          <UserItem onRemove={removeHandler} key={user.id} user={user}/>
        ))}
      </ul>
    </Fragment>
  );
};

export default UserList;
