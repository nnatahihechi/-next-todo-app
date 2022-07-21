
import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/sideBar.module.css';
import { SideBarData } from '../Component/SideBarData'
import CloseIcon from '@material-ui/icons/Close';
import App from '../../pages/_app'
import { GoogleLogin, googleLogout } from '@react-oauth/google';



const SideBar = () => {
    const [user, setUser] = useState(false)
    const currentRoute = useRouter()

    const isPath = (link: string) => {
        return currentRoute?.pathname === link
      }
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <>
            <div className={styles.container}

            // onClick={() => setShowSidebar((prev) => !prev)}
            >
                <ul className={styles.sideBarlist}>
                    {SideBarData.map((val, key) => {
                        return (
                            <li 
                            key={key}
                            className={styles.row}
                            // id={ window.location.pathname == val.link ? "active" : "" }
                            onClick={() =>{ 
                                window.location.pathname = val.link;
                            }}

                            // className={isPath(SideBarData.link) ? styles?.active : ''}
                            >
                                <div></div>
                               
                                <div className={styles.icon}>{val.icon}</div>{""}
                                <div className={styles.title}>{val.title}</div>
                            </li>
                        )
                    })}
                </ul>
                {!user && (
                    <>
                    <div>Login in to add a task </div>
                    <div> 
                        
                    
                    </div>
                    </>
                    )}
            </div>


        </>
    )
}

export default SideBar