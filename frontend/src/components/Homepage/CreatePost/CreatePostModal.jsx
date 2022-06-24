import React, { useState, useRef } from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { postPostAction } from "../../../store/postSlice";
import styles from "./createPost.module.css";

const CreatePost = ({ setShowModal }) => {
  const {
    users: { users },
    posts: { isSent },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [postText, setpostText] = useState("");
  const [postMedia, setpostMedia] = useState(null);
  const [isEmptyField, setIsEmptyField] = useState(true);
  const [radioOne, setRadioOne] = useState("white");
  console.log(radioOne);
  const handlepostTextChange = (e) => {
    const contentText = e.target.value;
    contentText.length >= 1 ? setIsEmptyField(false) : setIsEmptyField(true);
    setpostText(contentText);
  };

  const handlepostMediaChange = (e) => {
    const contentMedia = e.target.files[0];
    const mediaURL = URL.createObjectURL(contentMedia);
    const mediaData = {
      url: mediaURL,
      name: contentMedia.name,
    };
    setpostMedia(mediaData);
    console.log(postMedia);
  };

  const handleCloseModal = (e) => {
    if (e.target.className === styles["backdrop-wrapper"]) {
      setShowModal(false);
    }
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    const postData = {
      id: nanoid(3),
      author: {
        userName: users.username,
        userImage: users.userImage,
      },
      showComments: false,
      comments: [],
      postContentText: {
        postMedia: [postMedia],
        postText: postText,
        postDate: new Date().toDateString(),
      },
      reactions: {
        likes: 0,
        dislikes: 0,
      },
    };

    dispatch(postPostAction(postData));
    setpostText("");
    setpostMedia(null);
    setpostText("");
    isSent && setShowModal(false);
  };
  return (
    <div
      className={styles["backdrop-wrapper"]}
      onClick={(e) => handleCloseModal(e)}
    >
      <form
        onSubmit={(e) => handleCreatePost(e)}
        className={styles["create-post-wrapper"]}
      >
        <textarea
          className={styles["writable-area"]}
          placeholder="what's in your mind ?"
          value={postText}
          onChange={(e) => handlepostTextChange(e)}
        />

        {postMedia ? (
          <div className={styles["mediaPreview"]}>
            <img src={postMedia.url} alt="mediaPreview" />
          </div>
        ) : null}
        <ul className={styles["post-methods"]}>
          <li className={styles["method"]}>
            <button type="button">
              <label htmlFor="fileInput" className="text-ellipsis">
                {postMedia !== null ? postMedia.name : "select Image"}
              </label>
              <input
                type="file"
                onChange={(e) => handlepostMediaChange(e)}
                id="fileInput"
              />
            </button>
          </li>
          <li className={styles["method"]}>
            <button type="button">soon ..</button>
          </li>
          <li className={styles["method"]}>
            <button type="button">soon ..</button>
          </li>
        </ul>
        <div className={styles["sendButton-wrapper"]}>
          <button type="submit" disabled={isEmptyField}>
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
