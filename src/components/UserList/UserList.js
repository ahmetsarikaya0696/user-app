import React from "react";
import styles from "./UserList.module.css";
import UserItem from "./UserItem";

const UserList = (props) => {
  return (
    <div>
      <h2>User(s)</h2>
      <ul className={styles["user-list"]}>
        {props.users.map((user) => (
          <UserItem key={user.id} user={user}/>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
