import React, { useRef, useState } from "react";
import { IoIosHeart } from "react-icons/io";
import {
  IoHeartDislike,
  IoHeartOutline,
  IoHeartDislikeOutline,
} from "react-icons/io5";
import { FcDislike, FcLike, FcComments, FcShare } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { postUpdateAction } from "../../../../store/postSlice";
import { TOGGLE_COMMENTS } from "../../../../store/appSlice";
import styles from "./reaction.module.css";

const Reactions = ({ id, likes, dislikes }) => {
  const {
    posts: { posts },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const increaseCount = useRef(0);

  const getPostTarget = (id, postsArray, keyToReturn) => {
    const postTarget = postsArray.filter((post) => post.id === id);
    return postTarget[0][keyToReturn];
  };

  const handleLikeClick = (e) => {
    const button = e.target;
    button.classList.add(styles["clicked"]);

    const likeIncreaseRequest = {
      id,
      requestType: "reaction-update",
      newData: {
        reactions: {
          likes: likes + 1,
          dislikes: dislikes,
        },
      },
    };
    increaseCount.current += 1;
    dispatch(postUpdateAction(likeIncreaseRequest));
  };

  const handledislikeClick = (e) => {
    const button = e.target;
    button.classList.add(styles["clicked"]);

    const dislikeIncreaseRequest = {
      id,
      requestType: "reaction-update",
      newData: {
        reactions: {
          likes: likes,
          dislikes: dislikes + 1,
        },
      },
    };
    increaseCount.current += 1;
    if (increaseCount.current <= 1) {
      dispatch(postUpdateAction(dislikeIncreaseRequest));
    }

    console.log(button);
  };

  const openComments = () => {
    let openComments = {
      id,
      newData: {
        showComments: !getPostTarget(id, posts, "showComments"),
      },
    };
    dispatch(postUpdateAction(openComments));
  };
  return (
    <div className={styles["reactions"]}>
      <button
        type="button"
        className={styles["likes"]}
        onClick={(e) => handleLikeClick(e)}
      >
        {likes >= 1 ? <FcLike /> : <IoHeartOutline />}
        {likes >= 1 ? <p> {`${likes} like`}</p> : <p>like</p>}
      </button>
      <button
        type="button"
        className={styles["disLike"]}
        onClick={(e) => handledislikeClick(e)}
      >
        {dislikes >= 1 ? <FcDislike /> : <IoHeartDislikeOutline />}
        {dislikes >= 1 ? <p> {`${dislikes} dislikes`}</p> : <p>dislike</p>}
      </button>
      <button
        type="button"
        className={styles["comments"]}
        onClick={() => openComments()}
      >
        <FcComments />
        <p>comment</p>
      </button>
      <button type="button" className={styles["share"]}>
        <FcShare />
        <p>share</p>
      </button>
    </div>
  );
};

export default React.memo(Reactions);
