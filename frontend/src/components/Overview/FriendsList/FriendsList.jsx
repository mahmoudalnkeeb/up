import React from "react";
import styles from "./friendsList.module.css";
import defaultImage from "../../../assets/images/user.png";

const FriendsList = () => {
  return (
    <div className={styles["friendsList-wrapper"]}>
      <h3>Friends</h3>
      <ul className={styles["friendsList"]}>
        <li>
          <div className={styles["friend-image"]}>
            <img src={defaultImage} alt="friend image" />
          </div>
          <div className={styles["friend-name"]}>
            <p>john due</p>
          </div>
        </li>
        <li>
          <div className={styles["friend-image"]}>
            <img src={defaultImage} alt="friend image" />
          </div>
          <div className={styles["friend-name"]}>
            <p>john due</p>
          </div>
        </li>
        <li>
          <div className={styles["friend-image"]}>
            <img src={defaultImage} alt="friend image" />
          </div>
          <div className={styles["friend-name"]}>
            <p>john due</p>
          </div>
        </li>
        <li>
          <div className={styles["friend-image"]}>
            <img src={defaultImage} alt="friend image" />
          </div>
          <div className={styles["friend-name"]}>
            <p>john due</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FriendsList;
