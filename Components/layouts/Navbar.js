import React, { useContext, useState, useEffect, useRef } from "react";
import style from "../../styles/NavBar.module.css";
import { BiSolidUser } from "react-icons/bi";
import {
  AiOutlineMenu,
  AiFillSetting,
  AiOutlineDashboard,
} from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { AppContext } from "../../contextApi/AppContextApi";
import { UserContext } from "../../contextApi/UserContextApi";
import Link from "next/link";
import Image from "next/image";
import userimage from "../../public/user-images/user-image.jpg";
import NavDropDown from "../../utilsComponents/NavDropDown";

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
  const { loginUser } = useContext(UserContext);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    console.log("Before toggle:", isDropDownOpen);
    setIsDropDownOpen(!isDropDownOpen);
    console.log("After toggle:", isDropDownOpen);
  };

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
        <div className={style.loginBox} ref={dropdownRef}>
          {loginUser?.email ? (
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
