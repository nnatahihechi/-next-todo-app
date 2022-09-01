import React from 'react'
import styles from "./style.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const index = () => {

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>
          {/* title */}
         Basic Photography
        </p>
        <span>
          {/* date */}
          9AM-11AM
        </span>
      </div>
      <div className={styles.icon} >
        <CheckCircleOutlineIcon />
      </div>
    </div>
  );
}

export default index





