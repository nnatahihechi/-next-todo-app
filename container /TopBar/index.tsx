import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import styles from "./style.module.css";

const TopBar = () => {
    
  return (
    <div className={styles.container}>
      <form className={styles.search}>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {}}
          label="Enter a todo"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton
          type="submit"
          aria-label="search"
          className={styles.iconButton}
        >
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </form>
    </div>
  );
};

export default TopBar;
