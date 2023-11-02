import React, { useState } from "react";
import Navbar from "../Navbar";
import style from "../../../styles/super-admin/superAdminLayout.module.css";
import TopHeader from "../TopHeader";

export default function SuperAdminLayout({ children }) {
  const [toggleSideBar, settoggleSideBar] = useState(false);
  const handleClick = () => {
    settoggleSideBar(!toggleSideBar);
  };

  const sideBarArrow = toggleSideBar ? style.sidBarArrow : style.sidBarClose;
  const sideBar = toggleSideBar
    ? style.SuperAdminLayout_sideBar
    : style.SuperAdminLayout_sideBarClose;

  const containerBox = toggleSideBar
    ? style.SuperAdminLayout_contentPart
    : style.SuperAdminLayout_contentPartClose;

  return (
    <>
      <div>
        <TopHeader />
        <Navbar />
      </div>
      <div className={style.SuperAdminLayout_mainContainer}>
        <div className={sideBar}>
          <div className={sideBarArrow} onClick={handleClick}></div>
        </div>
        <div className={containerBox}>{children}</div>
      </div>
      <div>Footer</div>
    </>
  );
}
