import React from "react";
import styles from "./comments.module.css";
import { BsThreeDots } from "react-icons/bs";
import defaultImage from "../../../../assets/images/user.png";
import { nanoid } from "nanoid";

const Comment = ({ comments }) => {
  const commentsList = comments.map(
    ({ auther: { name, image, date }, comment }) => (
      <div className={styles["comment-box"]} key={nanoid(8)}>
        <header className={styles["comment-header"]}>
          <div className={styles["comment-details"]}>
            <div className={styles["commentAuther-image"]}>
              <img src={image || defaultImage} alt="userImage" />
            </div>
            <div className={styles["user-details"]}>
              <h6>{name}</h6>
              <small>{date}</small>
            </div>
          </div>
          <div className={styles["comment-options"]}>
            <BsThreeDots />
          </div>
        </header>
        <ul className={styles["comment"]}>
          {comment.map((comment) => (
            <li key={nanoid(4)}>
              <p>{comment}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  );

  return <>{commentsList}</>;
};

export default Comment;
