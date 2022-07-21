import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/signin.module.css";
import Link from 'next/link';
import { useUserContext } from "../../src/content/userContext";
import { useRouter } from "next/router";

const Login = () => {
const router = useRouter();
  const { user, createorGetUser } = useUserContext();
  const [login, setLogin] = useState({
    loggedin: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    
    if (token) {
      setLogin({
        loggedin: true,
      });
      setTimeout(() => {
        router.push("/");
      }, 3000);

    }
  }, []);

  return (
    <div className={styles.container}>
      {login.loggedin ? (
        <div className={styles.userContainer}>
          <div className={styles.redirect}>
        <h1>wow......</h1>
      <h2>welcome back </h2>
        <p>see your plans for the day <Link href="/"><a> Home </a></Link></p>
          </div>

          {/* <div className={styles.userdetail}> {user.name} </div> */}

         
        </div>
      ) : (
        <GoogleLogin
          onSuccess={(response) => {
            createorGetUser!(response);
            router.push("/");
          }}
          onError={() => {
            console.log("error");
          }}
        />

      )
      
      }
      
    </div>


  );
};

export default Login;
