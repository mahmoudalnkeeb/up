import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  BsFillCalendar3WeekFill,
  BsThreeDots,
  BsPinMapFill,
} from "react-icons/bs";
import { FaJoint } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import styles from "./aboutTap.module.css";

const AboutTap = () => {
  return (
    <div className={styles["about-tap"]}>
      <h3 className={styles["section-title"]}>Profile info</h3>
      <div className={styles["overview"]}>
        <h5>overview</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
          consequatur, placeat earum suscipit vitae veritatis, perferendis rem
          enim molestias maiores velit saepe a quae voluptatibus similique qui
          voluptatum, error nulla?
        </p>
      </div>
      <ul className={styles["informations-list"]}>
        <li>
          <span className={styles["icon"]}>
            <BsFillCalendar3WeekFill />
          </span>
          <p>brithday : Jan 10 1998</p>
          <span className={styles["icon"]}>
            <BsThreeDots />
          </span>
        </li>
        <li>
          <span className={styles["icon"]}>
            <AiOutlineHeart />
          </span>
          <p>status : single</p>
          <span className={styles["icon"]}>
            <BsThreeDots />
          </span>
        </li>
        <li>
          <span className={styles["icon"]}>
            <BsPinMapFill />
          </span>
          <p>lives : alexandria , egypt</p>
          <span className={styles["icon"]}>
            <BsThreeDots />
          </span>
        </li>
        <li>
          <span className={styles["icon"]}>
            <BsFillCalendar3WeekFill />
          </span>
          <p>brithday : Jan 10 1998</p>
          <span className={styles["icon"]}>
            <BsThreeDots />
          </span>
        </li>
        <li>
          <span className={styles["icon"]}>
            <MdWorkOutline />
          </span>
          <p>working : frontend - web developer</p>
          <span className={styles["icon"]}>
            <BsThreeDots />
          </span>
        </li>
        <li>
          <span className={styles["icon"]}>
            <FaJoint />
          </span>
          <p>joined on : October 10 2022</p>
          <span className={styles["icon"]}>
            <BsThreeDots />
          </span>
        </li>
        <li>
          <span className={styles["icon"]}>
            <BsFillCalendar3WeekFill />
          </span>
          <p>Email : admin@mail.com</p>
          <span className={styles["icon"]}>
            <BsThreeDots />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default AboutTap;
