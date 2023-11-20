import React, { useContext, useState, useEffect } from "react";
import Navbar from "../Navbar";
import style from "../../../styles/super-admin/superAdminLayout.module.css";
import TopHeader from "../TopHeader";
import SuperAdminSideBar from "./SuperAdminSideBar";
import { AppContext } from "../../../contextApi/AppContextApi";
import { FaExchangeAlt } from "../../../utilsComponents/ApplicationIcon";

export default function SuperAdminLayout({ children }) {
  const [isSticky, setIsSticky] = useState(false);
  const { toggleSideBar, handleToggleSidebar } = useContext(AppContext);

  const sideBarContainer = toggleSideBar
    ? style.sideBar_container
    : style.sideBar_container_close;

  const contentPart = toggleSideBar
    ? style.content_part
    : style.contentpart_full;

  // THIS LOGIC FOR STICY NAVBAR
  useEffect(() => {
    const handleScroll = () => {
      // When the user scrolls down 100px, set isSticky to true
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <div className={style.Header_part}>
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
