import React from "react";
import styles from "./aler.module.css";
import { MdError } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import { BsFillCheckCircleFill, BsPencilSquare } from "react-icons/bs";

const Alert = ({
  isError,
  ErrorMSG = "Something Went Error ",
  EditMSG = "is changed successfully",
  isCreatedSuccess,
  isEdit,
  alertShow,
}) => {
  const identifyMessage = () => {
    if (isError) {
      return <p>{ErrorMSG}</p>;
    }
    if (isEdit) {
      return <p>{EditMSG}</p>;
    }
    if (isCreatedSuccess) {
      return <p>process is completed Success</p>;
    }
  };
  const identifyIcon = () => {
    if (isError) {
      return <MdError />;
    }
    if (isEdit) {
      return <BsPencilSquare />;
    }
    if (isCreatedSuccess) {
      return <BsFillCheckCircleFill />;
    }
  };

  const handleCloseMessage = (e) => {
    e.target
      .closest(`.${styles["alert-wrapper"]}`)
      .classList.remove(styles["alert-show"]);
  };
  return (
    <div
      className={`${styles["alert-wrapper"]} ${
        alertShow ? styles["alert-show"] : null
      }`}
      style={
        isCreatedSuccess
          ? { backgroundColor: "#00FFAB" }
          : { backgroundColor: "#F47C7C" }
      }
    >
      <button
        className={styles["closeBTN"]}
        type="button"
        onClick={(e) => handleCloseMessage(e)}
      >
        <FaWindowClose />
      </button>
      <div className={styles["alert-icon"]}>{identifyIcon()}</div>
      {identifyMessage()}
    </div>
  );
};
export default Alert;
