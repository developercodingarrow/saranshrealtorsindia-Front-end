import React from "react";
import style from "../styles/NavBar.module.css";
// import userimage from "../../public/user-images/user-image.jpg"
import userimage from "../public/user-images/user-image.jpg";
import Link from "next/link";
import Image from "next/image";
import { TbLogout } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { AiFillSetting, AiOutlineDashboard } from "react-icons/ai";
import { singOut } from "../Actions/authAction";
import Router from "next/router";

export default function NavDropDown() {
  const handelLogOut = () => {
    singOut(() => {
      Router.replace("/login");
    });
  };

  return (
    <>
      <div className={style.dropDown_container}>
        <div className={style.DropDown_header}>
          <div className={style.DropDown_userImage}>
            <Image
              src={userimage}
              alt="project-1"
              width={500}
              height={500}
              className={style.user_image}
            />
          </div>
          <div className={style.user_infoBox}>
            <div className={style.user_nameBox}>Kanu sharma</div>
            <div>kanusharma@gmail.com</div>
          </div>
        </div>
        <div className={style.dropdown_optionBox}>
          <div className={style.dropdown_optionTab}>
            <Link href={"/"} className={style.dropdown_optionLink}>
              <span className={style.option_IconBox}>
                <FaUserAlt />
              </span>
              <span className={style.option_textBox}>Profile</span>
            </Link>
          </div>
          <div className={style.dropdown_optionTab}>
            <Link href={"/"} className={style.dropdown_optionLink}>
              <span className={style.option_IconBox}>
                <AiFillSetting />
              </span>
              <span className={style.option_textBox}>Account Seeting</span>
            </Link>
          </div>
          <div className={style.dropdown_optionTab}>
            <Link href={"/super-admin"} className={style.dropdown_optionLink}>
              <span className={style.option_IconBox}>
                <AiOutlineDashboard />
              </span>
              <span className={style.option_textBox}>Dash Board</span>
            </Link>
          </div>
        </div>
        <div className={style.dropDown_footer}>
          <Link href={"/"} className={style.dropdown_optionLink}>
            <span className={style.option_IconBox}>
              <TbLogout />
            </span>
            <span className={style.option_textBox} onClick={handelLogOut}>
              Log Out
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
