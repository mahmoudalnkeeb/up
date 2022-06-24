import React, { useState } from "react";
import styles from "./newComment.module.css";
import UserImage from "../../../../assets/images/user.png";
import { FiSend } from "react-icons/fi";
import { useDispatch } from "react-redux";

import { postUpdateAction } from "../../../../store/postSlice";

const NewComment = ({ id, comments, user: { userName, userImage } }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addComment = (e) => {
    const commentData = {
      id,
      newData: {
        comments: [
          ...comments,
          {
            auther: {
              name: userName,
              image: userImage,
              date: new Date().toLocaleString(),
            },
            comment: [...comments[0].comment, input],
          },
        ],
      },
    };
    dispatch(postUpdateAction(commentData));
  };

  return (
    <form className={styles["new-comment-wrapper"]}>
      <div className={styles["admin-label-image"]}>
        <img src={userImage || UserImage} alt="adminImage" />
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="write comment ..."
      />
      <button type="button" onClick={() => addComment()}>
        <FiSend />
      </button>
    </form>
  );
};

export default NewComment;
