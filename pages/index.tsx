import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import AddTodo from "../src/Component/AddTodo";
import Login from "./login";
import TodoList from "../src/Component/TodoList";
import SideBar from "../container /SideBar";
import TopBar from "../container /TopBar/index";
import { useState, useEffect } from "react";
import DashboardLayout from "../container /Dashboardlayout";
import { ReactElement, ReactNode } from "react";
import { useRouter } from "next/router";
import TodoCard from "../container /TodoCard";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TODOAPP nextjs</title>
        <meta name="description" content="how to create todoApp with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement, style: any) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Home;
