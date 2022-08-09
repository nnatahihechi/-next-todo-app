import { useState } from 'react'
import react from 'react'
import styles from "./style.module.css";
import SiderBar from '../SideBar'
import TopBar from '../TopBar'

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <TopBar />
      <SiderBar />
    </div>
  )
}

function DashboardLayout({
  children,
}: React.PropsWithChildren) {

  return (
      <MainLayout>{children}</MainLayout>
  );
}

export default DashboardLayout;


