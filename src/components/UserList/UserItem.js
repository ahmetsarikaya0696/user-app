import React from "react";
import styles from "./UserItem.module.css";

const UserItem = (props) => {
  const userInfo = `${props.user.name} (${props.user.age})`;
  return (
    <li className={styles["user-item"]} title={`Delete ${userInfo}`}>
      {userInfo}
    </li>
  );
};

export default UserItem;
