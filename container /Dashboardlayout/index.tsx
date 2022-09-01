import { useEffect, useState } from "react";
import styles from "./style.module.css";
import SiderBar from "../SideBar";
import TopBar from "../TopBar";
import { useRouter } from "next/router";
import TodoCard from "../TodoCard";
import TodaySchedule from "../TodaySchedule";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const [login, setLogin] = useState({
    loggedin: false,
  });
  console.log("here");

  useEffect(() => {
    let token: string | null = null;
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
    }
    if (!token) {
      setLogin({
        loggedin: false,
      });
      router.push("/login");
      return;
    }
    setLogin({
      loggedin: true,
    });
  }, []);
  if (!login.loggedin) return <div></div>;
  return (
    <div className={styles.container}>
      <SiderBar />
      <TopBar />
      <TodoCard />
      <TodaySchedule />
      {/* {children} */}
    </div>
  );
};

function DashboardLayout({ children }: React.PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>;
}

export default DashboardLayout;
