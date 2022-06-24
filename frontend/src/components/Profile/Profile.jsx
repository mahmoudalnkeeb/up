import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar/Siderbar";
import styles from "./profile.module.css";
import { FcBinoculars, FcBusinessman, FcCamera } from "react-icons/fc";
import { AiFillSafetyCertificate } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import { getUsersAction } from "../../store/userSlice";
import UserImage from "../../assets/images/user.png";
import Container from "../StyledComponent/Container";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoBagRemoveOutline } from "react-icons/io5";
import { CgPin } from "react-icons/cg";
import { FaJoint } from "react-icons/fa";

const Profile = () => {
  const {
    app,
    users: { users },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [pageScrollY, setpageScrollY] = useState(0);
  const profileImage = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsersAction());
    navigate("about");
  }, [dispatch]);

  const hoverColor = useRef(
    getComputedStyle(document.documentElement)
      .getPropertyValue("--var-hover-color")
      .trim()
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setpageScrollY(window.scrollY);
      if (pageScrollY >= 310) {
        profileImage.current.parentElement.classList.add("w-0");
        !profileImage.current.classList.contains("image-noFloating") &&
          profileImage.current.classList.add("image-noFloating");
      } else {
        profileImage.current.classList.remove("image-noFloating");
      }
    });
  }, [pageScrollY]);

  const galleryPhotosList =
    users["gallery-photos"] &&
    users["gallery-photos"].map((photo) => (
      <li className="gallery-children">
        <img src={photo} alt="user image" />
      </li>
    ));

  return (
    <div className={`${styles["profile-wrapper"]} bg-slate-200`}>
      <Container>
        <Sidebar />
        <section className={styles["profile-scroll-box"]}>
          <div className={styles["profile"]}>
            <div
              className={styles["profile-cover"]}
              style={
                users.coverBackground
                  ? { backgroundImage: `url(${users.coverBackground})` }
                  : { backgroundImage: "url(https://picsum.photos/1400/501)" }
              }
            >
              <div
                className={`${styles["profile-cover-change"]} bg-gray-300 opacity-70 transition-opacity hover:opacity-100`}
              >
                <label htmlFor="change-profile-cover">
                  <FcCamera />
                  <b>change cover</b>
                </label>
                <input type="file" id="change-profile-cover" />
              </div>
            </div>

            <div className={styles["user-pio"]}>
              <div className={styles["pio-wrapper"]}>
                <figure className={styles["profile-personal-image"]}>
                  <img
                    ref={profileImage}
                    src={users.userImage || UserImage}
                    alt="user profile image"
                  />
                </figure>
                <ul className={styles["user-pio-list"]}>
                  <li className={styles["pio-children"]}>
                    <h3 className={styles["username"]}>{users.username}</h3>
                    {users.certificate && <AiFillSafetyCertificate />}
                  </li>
                  <li className={styles["pio-children"]}>
                    <p>
                      {users.followers} <b>followers</b>
                    </p>
                  </li>
                </ul>
              </div>
              <ul className={styles["user-info-list"]}>
                <li>
                  <span>
                    <IoBagRemoveOutline />
                  </span>
                  <p>{users.workingAt}</p>
                </li>
                <li>
                  <span>
                    <CgPin />
                  </span>
                  <p>
                    {users.lives} - {users.country}
                  </p>
                </li>
                <li>
                  <span>
                    <FaJoint />
                  </span>
                  <p>{users.JoinedDate}</p>
                </li>
              </ul>
              <ul className={styles["taps"]}>
                <li className={styles["taps-children"] + " " + "active"}>
                  <NavLink to="about">about</NavLink>
                </li>
                <li className={styles["taps-children"]}>
                  <NavLink to="posts">posts</NavLink>
                </li>
                <li className={styles["taps-children"]}>
                  <NavLink to="friends">friends</NavLink>
                </li>
                <li className={styles["taps-children"]}>
                  <NavLink to="pages">pages</NavLink>
                </li>
              </ul>
            </div>
            <Outlet />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Profile;
