import React, { useState, useRef, Children } from "react";
import styles from "./postContent.module.css";
import { postUpdateAction } from "../../../../store/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io";

const PostContent = ({
  id,
  postText,
  editPost,
  seteditPost,
  children,
  showMore,
  setshowMore,
}) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);
  const textwillEdit = useRef(null);
  const [input, setInput] = useState(postText);

  const handleSaveEdit = () => {
    const postTarget = posts.posts.filter((post) => post.id === id);
    seteditPost(false);
    uploadChanges(postTarget);
  };
  const uploadChanges = (postTarget) => {
    const postPayload = {
      id,
      requestType: "post-content-update",
      newData: {
        postContentText: {
          postMedia: postTarget[0].postContentText.postMedia,
          postText: input,
          postDate: postTarget[0].postContentText.postDate,
          postUpdateDate: new Date().toDateString(),
        },
      },
    };
    dispatch(postUpdateAction(postPayload));
  };

  return (
    <div className={`${styles["post-content"]}`}>
      {children}
      {editPost ? (
        <div className={styles["editPost-wrapper"]}>
          <textarea
            value={input}
            type="text"
            name="editPost"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="button" onClick={() => handleSaveEdit()}>
            save
          </button>
        </div>
      ) : (
        <h5 className={showMore ? "post-text h-24" : "post-text h-fit"}>
          {postText}
        </h5>
      )}
      <button type="button" onClick={() => setshowMore(!showMore)}>
        {showMore ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}
      </button>
    </div>
  );
};

export default React.memo(PostContent);
