import React, { useEffect, useId } from "react";
import { useCallback } from "react";
import { nanoid } from "nanoid";

// redux
import { useSelector, useDispatch } from "react-redux";

// Redux Slice's
import { getAllPostsAction } from "../../../store/postSlice";
import Loading from "../../Loading/Loading";

//styles
import styles from "./postsList.module.css";

const PostsList = ({ children }) => {
  const {
    posts: { posts, isLoading, isError, isSent },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPostsAction());
  }, [dispatch]);

  const ClonedChildMaped = posts.map(
    ({
      id,
      author: { userName, userImage },
      postContentText: { postMedia, postText, postDate },
      reactions: { likes, dislikes },
      showComments,
      comments,
    }) => {
      return React.cloneElement(children, {
        key: nanoid(6),
        id,
        userName,
        userImage,
        likes,
        dislikes,
        comments,
        postDate,
        postMedia,
        postText,
        isLoading,
        showComments,
      });
    }
  );

  return (
    <div className={styles["posts-list"] + " " + "scroll-m-2"}>
      {isLoading ? <Loading /> : ClonedChildMaped}
    </div>
  );
};

export default PostsList;
