import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./style.module.css";
import { InputAdornment, OutlinedInput } from "@material-ui/core";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useUserContext } from "../../src/content/userContext";

const TopBar = () => {
  const { user } = useUserContext();
  const [userProfile, setUserProfile] = useState({
    loggedin: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    //  const id = localStorage.getItem("id");

    if (token) {
      setUserProfile({
        loggedin: true,
      });
    }
  }, []);
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <OutlinedInput
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "15px",
            outline: "none",
          }}
          id="search-bar"
          className={styles.textField}
          onInput={(e) => {}}
          placeholder="Search..."
          startAdornment={
            <InputAdornment position="start">
              <IconButton type="submit" aria-label="search" edge="start">
                <SearchIcon style={{ fill: "black" }} />
              </IconButton>
            </InputAdornment>
          }
        />
      </form>

      <div className={styles.leftSide}>
        <div className={styles.notificationIcon}>
          <NotificationsIcon />
        </div>

        <div className={styles.profilePicture}>
          {userProfile?(
            <img
              src={user.picture}
              alt=""
              width="30px"
              height="30px"
              style={{
              objectFit: "cover",
              borderRadius: "50px"
              }}
            />
          ):null}

          <p className={styles.topName}>
            {user.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
