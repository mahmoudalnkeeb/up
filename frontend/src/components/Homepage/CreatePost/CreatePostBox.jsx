import React from "react";
import styles from "./createPost.module.css";
import defaultImage from "../../../assets/images/user.png";

const CreatePostBox = ({ setShowModal, showModal, userImage }) => {
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className={`${styles["box-wrapper"]} mx-auto`}>
      <div className={styles["userImage"]}>
        <img src={userImage || defaultImage} alt="userImage" />
      </div>
      <label
        className={styles["foucus-ariea"]}
        onClick={() => handleToggleModal()}
      >
        <p className="text-sm font-medium text-gray-600">
          what are you thinking about ? ...
        </p>
      </label>
    </div>
  );
};

export default CreatePostBox;
