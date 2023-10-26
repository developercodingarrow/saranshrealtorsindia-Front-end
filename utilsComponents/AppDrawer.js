import React, { useContext } from "react";
import style from "../styles/AppDrawe.module.css";
import Link from "next/link";
import { AppContext } from "../contextApi/AppContextApi";

const pages = [
  {
    Page: "home",
    hrfLink: "/",
  },

  {
    Page: "About Us",
    hrfLink: "/about-us",
  },

  {
    Page: "Contact Us",
    hrfLink: "/contact-us",
  },
  {
    Page: "Blogs",
    hrfLink: "/blog",
  },
];

export default function AppDrawer() {
  const { handleToggleDrawer, toggleDrawer } = useContext(AppContext);

  const drawerContainerClasses = toggleDrawer
    ? `${style.AppDrawer_container}`
    : `${style.hideAppDrawer_container}`;
  return (
    <>
      <div className={drawerContainerClasses} onClick={handleToggleDrawer}>
        <div
          className={
            toggleDrawer
              ? style.AppDrawer_innerContainer
              : style.AppDrawer_innerContainer_Hide
          }
        >
          {pages.map((el, i) => {
            return (
              <div key={i}>
                <div className={style.Drawer_tab}>
                  <Link href={el.hrfLink} legacyBehavior>
                    <a className={style.linkStyle}>{el.Page}</a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
