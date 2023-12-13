import React, { useContext, useState, useEffect, useRef } from "react";
import style from "./css/NavBar.module.css";
import {
  AiOutlineMenu,
  AiFillSetting,
  AiOutlineDashboard,
  BiSolidUser,
  FaUserAlt,
  TbLogout,
} from "../../utilsComponents/ApplicationIcon";

import { AppContext } from "../../contextApi/AppContextApi";
import { UserContext } from "../../contextApi/UserContextApi";
import Link from "next/link";
import Image from "next/image";
import userimage from "../../public/user-images/user-image.jpg";
import NavDropDown from "../../utilsComponents/NavDropDown";
import Search from "../../utilsComponents/search/Search";

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
    hrfLink: "/blogs",
  },
  {
    Page: "Projects",
    hrfLink: "/project",
  },
];

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const { handleToggleDrawer } = useContext(AppContext);
  const { loginUser } = useContext(UserContext);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    console.log("Before toggle:", isDropDownOpen);
    setIsDropDownOpen(!isDropDownOpen);
    console.log("After toggle:", isDropDownOpen);
  };

  // THIS LOGIC FOR DROPDOWN
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        isDropDownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropDownOpen(false);
      }
    };

    if (isDropDownOpen) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isDropDownOpen]);

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
      <div
        className={
          isSticky
            ? `${style.navBar_mainContainer} ${style.sticky}`
            : style.navBar_mainContainer
        }
      >
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
        <div className={style.NavBar_serachBox}>
          <Search />
        </div>
        <div className={style.loginBox} ref={dropdownRef}>
          {loginUser ? (
            <>
              <div className={style.login_btn} onClick={toggleDropdown}>
                <p>{loginUser.name} </p>
              </div>
            </>
          ) : (
            <>
              <div className={style.login_btn}>
                <Link href={"/login"} className={style.linkStyle}>
                  <BiSolidUser />
                </Link>
              </div>
            </>
          )}
          {isDropDownOpen && (
            <div>
              <NavDropDown />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
