import React, { useState } from "react";
import styles from "./post.module.css";
import CommentsWrapper from "./Comments/CommentsWrapper";
import PostHeader from "./PostHeader/PostHeader";
import { nanoid } from "nanoid";
import PostContent from "./PostContent/PostContent";
import PostMedia from "./PostMedia/PostMedia";
import Reactions from "./Reactions/Reactions";
import { useDispatch, useSelector } from "react-redux";

const Post = ({
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
}) => {
  const [editPost, seteditPost] = useState(false);
  // const [showComments, setShowComments] = useState(false);
  // const [showMore, setshowMore] = useState(false);

  return (
    <article
      className={`${styles["post"]} ${
        postMedia[0] === null ? styles["no-media"] : null
      }`}
      id={id}
      key={nanoid(8)}
    >
      <PostHeader
        id={id}
        userImage={userImage}
        userName={userName}
        postDate={postDate}
        editPost={editPost}
        seteditPost={seteditPost}
        isLoading={isLoading}
      />

      <PostContent
        id={id}
        postMedia={postMedia}
        postText={postText}
        editPost={editPost}
        seteditPost={seteditPost}
      />
      {postMedia[0] !== null && (
        <PostMedia postMedia={postMedia} isLoading={isLoading} />
      )}
      <Reactions key={nanoid(3)} id={id} likes={likes} dislikes={dislikes} />
      {showComments ? <CommentsWrapper comments={comments} id={id} /> : null}
    </article>
  );
};

export default React.memo(Post);
