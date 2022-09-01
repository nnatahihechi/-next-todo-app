import React from 'react'
import styles from "./style.module.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <LibraryBooksIcon />
      </div>

      <div className={styles.title}>
        Basic Photograph
        <p> 9 - 11 AM</p>
      </div>

      
    </div>
  );
}

export default index