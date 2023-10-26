import React, { useContext } from "react";
import style from "../../styles/NavBar.module.css";
import { BiSolidUser } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { AppContext } from "../../contextApi/AppContextApi";
import Link from "next/link";

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

export default function Navbar() {
  const { handleToggleDrawer } = useContext(AppContext);
  return (
    <>
      <div className={style.navBar_mainContainer}>
        <div className={style.hangBurg_IconBox}>
          <AiOutlineMenu onClick={handleToggleDrawer} />
        </div>
        <div className={style.pageTab_Box}>
          {pages.map((el, i) => {
            return (
              <div key={i}>
                <div className={style.pageTab} key={i}>
                  <Link href={el.hrfLink} legacyBehavior>
                    <a className={style.tabLink}> {el.Page}</a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className={style.loginBox}>
          <div className={style.login_btn}>
            <BiSolidUser />
          </div>
        </div>
      </div>
    </>
  );
}
