import React, { useContext, useState } from "react";
import style from "../../../styles/super-admin/superAdminSideBar.module.css";
import { AppContext } from "../../../contextApi/AppContextApi";
import Link from "next/link";
import { superAdminOptions } from "../../../jsonData/FormInput_data";

export default function SuperAdminSideBar() {
  const { toggleSideBar, handleToggleSidebar } = useContext(AppContext);

  const sideBarWrapper = toggleSideBar
    ? style.sideBar_wrapper
    : style.sideBar_wrapper_close;

  return (
    <>
      <div className={sideBarWrapper}>
        <div className={style.sideBar_header}>
          <h4>ADMIN DASHBOARD</h4>
        </div>
        <div className={style.sideBar_optionContainer}>
          {superAdminOptions.map((el, i) => {
            return (
              <div key={i}>
                <Link href={el.hrf} className={style.sideBar_optionLink}>
                  <div className={style.sideBar_optionTab}>{el.page}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
