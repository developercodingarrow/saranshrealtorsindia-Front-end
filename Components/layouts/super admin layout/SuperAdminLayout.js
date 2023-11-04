import React, { useContext, useState } from "react";
import Navbar from "../Navbar";
import style from "../../../styles/super-admin/superAdminLayout.module.css";
import TopHeader from "../TopHeader";
import SuperAdminSideBar from "./SuperAdminSideBar";
import { AppContext } from "../../../contextApi/AppContextApi";
import { FaExchangeAlt } from "react-icons/fa";

export default function SuperAdminLayout({ children }) {
  const { toggleSideBar, handleToggleSidebar } = useContext(AppContext);

  const sideBarContainer = toggleSideBar
    ? style.sideBar_container
    : style.sideBar_container_close;

  const contentPart = toggleSideBar
    ? style.content_part
    : style.contentpart_full;

  return (
    <>
      <div className={style.Header_part}>
        <TopHeader />
        <Navbar />
      </div>
      <div className={style.superAdmin_mainContainer}>
        <div className={sideBarContainer}>
          <div
            className={style.SideBar_toogle_iconBox}
            onClick={handleToggleSidebar}
          >
            <FaExchangeAlt />
          </div>
          <SuperAdminSideBar />
        </div>
        <div className={contentPart}>{children}</div>
      </div>
    </>
  );
}
