import { GoogleLogin, googleLogout } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import React from 'react'
import { useState, useEffect } from 'react';
import styles from '../../styles/signin.module.css'
import createorGetUser from '../../utils';

const login = () => {
  const [user, setUser] = useState({
    loggedin: false,
    name: "",
    email: "",
    picture: "",
    sub: ""
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded: {
        name: string,
        email: string,
        picture: string,
        sub: string
      } = jwt_decode(token)

      setUser({
        loggedin: true,
        ...decoded
      })
    }
  }, []);

  return (
    <div className={styles.container}>
      {user.loggedin ? (
        <div className={styles.userContainer}>
          <div className={styles.userdetail}>
            <img src={user.picture}
              width={62}
              height={62}
              className="round-full"
              alt="profil picture"
              border-radius={50}
              // layout="responsive"
            />
          </div>
          <div className={styles.userdetail}> {user.name} </div>

        <button>log out</button>

        </div>

      ) : (
        <GoogleLogin
          onSuccess={(response) => {
            createorGetUser(response)
          }}
          onError={() => { console.log("error") }}
        />
      )
      }
    </div>
  )
}

export default login


