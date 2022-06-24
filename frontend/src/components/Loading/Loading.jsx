import { nanoid } from "nanoid";
import React from "react";
import LoadingImage from "../../assets/images/loading.svg";
import ImageLoading from "../Homepage/Post/PostMedia/ImageLoading";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <article className={`${styles["post"]}`} key={nanoid(8)}>
      <figure className={`${styles["media-wrapper"]}`}>
        <ImageLoading />
      </figure>
      <header className={styles["post-header"]}>
        <div className={styles["user-lable"]}>
          <div className={styles["user-image"]}>
            <img className="w-12 h-12 bg-gray-400 rounded-full animate-pulse"></img>
          </div>
          <div className={styles["user-details"]}>
            <span className="w-24 h-3 bg-gray-600 rounded-lg animate-pulse"></span>
            <span className="w-24 h-3 bg-gray-500 rounded-lg animate-pulse"></span>
          </div>
        </div>
        <div className={styles["more-options"] + "animate-pulse"}>
          <img className="w-5 h-5 bg-gray-400 rounded-full animate-pulse"></img>
        </div>
      </header>
      <div className={`${styles["post-content"]}`}>
        <div className="w-24 h-3 bg-gray-500 rounded-lg"></div>
        <div className="w-60 h-3 bg-gray-500 rounded-lg"></div>
        <div className="w-6 h-3 bg-gray-500 rounded-lg"></div>
        <div className="w-24 h-3 bg-gray-500 rounded-lg"></div>
        <div className="w-24 h-3 bg-gray-500 rounded-lg"></div>
        <div className="w-64 h-3 bg-gray-500 rounded-lg"></div>
        <div className="w-64 h-3 bg-gray-500 rounded-lg"></div>
        <div className="w-14 h-3 bg-gray-500 rounded-lg"></div>
        <div className="w-10 h-3 bg-gray-500 rounded-lg"></div>
        <div className="w-12 h-3 bg-gray-500 rounded-lg"></div>
      </div>

      <div className={styles["reactions"]}>
        <button type="button" className={styles["likes"]}>
          <div className="w-5 h-5 animate-pulse bg-gray-500 rounded-full"></div>
          <p>likes</p>
        </button>
        <button type="button" className={styles["disLike"]}>
          <div className="w-5 h-5 animate-pulse bg-gray-500 rounded-full"></div>
          <p>dislikes</p>
        </button>
        <button type="button" className={styles["comments"]}>
          <div className="w-5 h-5 animate-pulse bg-gray-500 rounded-full"></div>
          <p>comments</p>
        </button>
        <button type="button" className={styles["share"]}>
          <div className="w-5 h-5 animate-pulse bg-gray-500 rounded-full"></div>
          <p>share</p>
        </button>
      </div>
    </article>
  );
};

export default Loading;
