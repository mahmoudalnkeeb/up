// React Library
import React, { useEffect, useState, useId, useCallback } from "react";
import ReactDOM from "react-dom";

// 3rd party libraries
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";

// Redux Slice's
import { getUsersAction } from "../../store/userSlice";
import { SET_USER } from "../../store/appSlice";

// Css Styles Files
import styles from "./homePage.module.css";

// Comonents
import Sidebar from "../Sidebar/Siderbar";
import CreatePostBox from "./CreatePost/CreatePostBox";
import CreatePost from "./CreatePost/CreatePostModal";
import PostsList from "./PostsList/PostsList";
import Post from "./Post/Post";
import ConnectionError from "../ConnectionError/ConnectionError";
import Loading from "../Loading/Loading";
import Overview from "../Overview/Overview";
import background from "../../assets/images/background.svg";
import Container from "../StyledComponent/Container";

const HomePage = ({ setToggleMessage, toggleMessage }) => {
  const {
    users: { users, isLoading },
  } = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getUsersAction());
  }, [dispath]);

  useEffect(() => {
    dispath(SET_USER({ name: users.username, image: users.userImage }));
  }, [isLoading]);

  const createPostModal = ReactDOM.createPortal(
    <CreatePost setShowModal={setShowModal} showModal={showModal} />,
    document.getElementById("create-post-container")
  );

  return (
    <main className={styles["home"]}>
      <Container className="flex justify-between items-start">
        <Sidebar />
        {showModal ? createPostModal : null}
        <section className={styles["posts-wrapper"]}>
          <CreatePostBox
            userImage={users.userImage}
            setShowModal={setShowModal}
            showModal={showModal}
          />
          <PostsList styles={styles}>
            <Post />
          </PostsList>
        </section>
        <Overview userImage={users.userImage} />
      </Container>
    </main>
  );
};

export default HomePage;
