import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import styles from "./postHeader.module.css";
import defaultImage from "../../../../assets/images/user.png";
import { deletePostAction } from "../../../../store/postSlice";
import SideNavbarIcon from "../../../StyledComponent/SideNavbarIcons";
import SideNavbarText from "../../../StyledComponent/SideNavbarText";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { RiUserUnfollowLine } from "react-icons/ri";
import { BiHide, BiBlock, BiSave } from "react-icons/bi";

const PostHeader = ({
  id,
  userImage,
  userName,
  postDate,
  editPost,
  seteditPost,
}) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  // liften state up
  const handleeditPost = () => {
    seteditPost(!editPost);
  };

  const handleDeletePost = () => {
    dispatch(deletePostAction(id));
  };
  return (
    <header className={styles["post-header"]}>
      <div className={styles["user-lable"]}>
        <div className={styles["user-image"]}>
          <img src={userImage || defaultImage} alt="user image" />
        </div>
        <div className={styles["user-details"]}>
          <span className={styles["user-name"]}>{userName}</span>
          <span className={styles["post-date"]}>{postDate}</span>
        </div>
      </div>
      <div className={styles["more-options"]}>
        <label onClick={() => setToggle(!toggle)}>
          <BsThreeDots />
        </label>
        <ul
          className={`${styles["opthons-wrapper"]} ${
            toggle ? styles.openOptions : ""
          }`}
        >
          <li>
            <SideNavbarIcon>
              <BiSave />
            </SideNavbarIcon>
            <SideNavbarText>save post</SideNavbarText>
          </li>
          <li onClick={() => handleeditPost()}>
            <SideNavbarIcon>
              <BsPencilSquare />
            </SideNavbarIcon>
            <SideNavbarText>Edit post</SideNavbarText>
          </li>
          <li onClick={() => handleDeletePost()}>
            <SideNavbarIcon>
              <BsTrash />
            </SideNavbarIcon>
            <SideNavbarText>Delete post</SideNavbarText>
          </li>
          <li>
            <SideNavbarIcon>
              <RiUserUnfollowLine />
            </SideNavbarIcon>
            <SideNavbarText>unfollow</SideNavbarText>
          </li>
          <li>
            <SideNavbarIcon>
              <BiHide />
            </SideNavbarIcon>
            <SideNavbarText>hide post</SideNavbarText>
          </li>
          <li>
            <SideNavbarIcon>
              <BiBlock />
            </SideNavbarIcon>
            <SideNavbarText>Block</SideNavbarText>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default React.memo(PostHeader);
