import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/signin.module.css";
// import createorGetUser from "../../utils";
import { useUserContext } from "../../src/content/userContext";

const Login = () => {
  const { user, createorGetUser } = useUserContext();
  console.log(user, createorGetUser);
  const [login, setLogin] = useState({
    loggedin: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLogin({
        loggedin: true,
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      {login.loggedin ? (
        <div className={styles.userContainer}>
          <div className={styles.userdetail}>
          </div>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={(response) => {
            createorGetUser!(response);
          }}
          onError={() => {
            console.log("error");
          }}
        />
      )}
    </div>
  );
};

export default Login;
