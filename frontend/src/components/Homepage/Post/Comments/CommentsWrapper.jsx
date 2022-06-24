import React, { useEffect, useRef } from "react";
import Comment from "./Comment";
import NewComment from "../NewComment/NewComment";
import styles from "./comments.module.css";
import { useSelector } from "react-redux";
const CommentsWrapper = ({ comments, id }) => {
  const {
    app: { userName, userImage },
  } = useSelector((state) => state);

  console.log(comments.length);
  return (
    <div className={styles["comments-wrapper"]}>
      <NewComment id={id} comments={comments} user={{ userName, userImage }} />
      {comments.length > 0 ? <Comment comments={comments} /> : null}
    </div>
  );
};

export default React.memo(CommentsWrapper);
