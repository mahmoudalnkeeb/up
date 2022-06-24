import React from "react";
import noDataError from "../../assets/images/server-down.svg";
import styles from "./connectionError.module.css";

const ConnectionError = () => {
  return (
    <div className={styles["connection-error-wrapper"]}>
      <img src={noDataError} alt="connection-error" />
    </div>
  );
};

export default ConnectionError;
