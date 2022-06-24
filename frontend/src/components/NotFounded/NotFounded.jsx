import React from "react";
import Sidebar from "../Sidebar/Siderbar";
import notFounded from "../../assets/images/page-not-found.svg";
import styles from "./notfounded.module.css";
const NotFounded = () => {
  console.log("render NotFounded Page");
  return (
    <main className={styles["notfounded"]}>
      <Sidebar />
      <section className="container justify-content-center align-items-center">
        <h2 className={styles["title"]}>page not founded </h2>
        <div className={styles["notfound-wrapper"]}>
          <img src={notFounded} alt="not found image" />
        </div>
      </section>
    </main>
  );
};

export default NotFounded;
