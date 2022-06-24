import React from "react";
import Sidebar from "../Sidebar/Siderbar";
import notFounded from "../../assets/images/under_construction.svg";
import styles from "./underConstruction.module.css";
const UnderConstruction = () => {
  return (
    <main className={styles["underConstruction"]}>
      <Sidebar />
      <section className="container justify-content-center align-items-center">
        <h2 className={styles["title"]}>page is Under Construction now </h2>
        <div className={styles["underConstruction-wrapper"]}>
          <img src={notFounded} alt="underConstruction image" />
        </div>
      </section>
    </main>
  );
};

export default UnderConstruction;
