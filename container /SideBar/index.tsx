import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/sideBar.module.css";
import { SideBarData } from "./SideBarData";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { AiOutlineLogout } from "react-icons/ai";
import { useUserContext } from "../../src/content/userContext";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoDisplayTypeState } from "../../src/state/todoState";


const SideBar = () => {
  //   const [user, setUser] = useState(true);
  const currentRoute = useRouter();
  const router = useRouter();

  const isPath = (link: string) => {
    return currentRoute?.pathname === link;
  };
  //   const [showSidebar, setShowSidebar] = useState(true);
  const [logOut, setLogOut] = useState(false);
  const { removeUser, user } = useUserContext();
  const setTodoDisplayType = useSetRecoilState(todoDisplayTypeState);
  const todoType = useRecoilValue(todoDisplayTypeState);

  return (
    <>
      <div className={styles.container}>
        <span className={styles.planner}>Day Planner</span>
        <ul className={styles.sideBarlist}>
          {SideBarData.map((val, key) => {
            return (
              <li
                key={key}
                className={styles.row}
                // id={ window.location.pathname == val.link ? "active" : "" }
                onClick={() => {
                  val.link
                    ? (window.location.pathname = val.link)
                    : setTodoDisplayType(
                        todoType == "all" ? "important" : "all"
                      );
                }}

                // className={isPath(SideBarData.link) ? styles?.active : ''}
              >
                <div className={styles.icon}>{val.icon}</div>
                {""}
                <div className={styles.title}>{val.title}</div>
              </li>
            );
          })}
        </ul>
        {user && (
          <div className={styles.logout}>
            <button
              type="button"
              onClick={() => {
                googleLogout();
                removeUser();
                router.push("/login");
                setLogOut(false);
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );

 
};

export default SideBar;
