import React from "react";
import styles from "../appStyles.module.css";

function Header() {
  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.fancy_Header}>Art Gallery</h1>
        <h1 className={styles.title_name_2}>
          Creatives Sharing Work With Creatives
        </h1>
      </div>
    </>
  );
}

export default Header;
