import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import defaultImage from "../../assets/images/profile-user-image.png";
import FriendsList from "./FriendsList/FriendsList";
import styles from "./overview.module.css";
import { PAGE_DIRECTION } from "../../store/appSlice";

function Overview({ userImage }) {
  const {
    app: { pageDirection, userName },
  } = useSelector((state) => state);
  const hideOverview = useRef(null);
  useEffect(() => {
    hideOverview.current = `hide-overview-${pageDirection}`;
  }, []);

  return (
    <div className={`${styles["overview"]} ${styles[hideOverview.current]}`}>
      <div
        className={styles["Profile-image-wrapper"]}
        style={{ backgroundImage: "url(https://picsum.photos/500/800)" }}
      >
        <img src={userImage || defaultImage} alt="profile image" />
        <ul className={styles["statistics"]}>
          <li className={styles["followers"]}>
            <strong>10000</strong>
            <b>followers</b>
          </li>
          <li className={styles["follow"]}>
            <strong>18000</strong>
            <b>follow</b>
          </li>
          <li className={styles["friends"]}>
            <strong>3000</strong>
            <b>friends</b>
          </li>
        </ul>
      </div>
      <div className={styles["overview-dashboard"]}>
        <FriendsList />
      </div>
    </div>
  );
}

export default Overview;
