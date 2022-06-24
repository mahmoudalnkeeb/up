import React from "react";
import { useRef } from "react";
import { useState } from "react";
import ImageLoading from "./ImageLoading";
import styles from "./postMedia.module.css";
import { nanoid } from "nanoid";

const PostMedia = ({ postMedia, showMore, isLoading }) => {
  const handleLoad = (e) => {
    console.log(e.complete);
  };

  return (
    <figure
      className={`${styles["media-wrapper"]}`}
      style={showMore ? { height: "100%" } : { height: "260px" }}
    >
      {isLoading ? (
        <ImageLoading />
      ) : (
        postMedia.map((media) => (
          <img
            onLoadStart={(e) => handleLoad(e)}
            src={media.url}
            alt="postMedia"
            key={nanoid(4)}
          />
        ))
      )}
    </figure>
  );
};

export default PostMedia;
