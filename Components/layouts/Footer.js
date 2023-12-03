import React from "react";
import styles from "./css/footer.module.css";
import Link from "next/link";
import {
  IoMdHome,
  FaBuilding,
  FaWhatsappSquare,
  MdTipsAndUpdates,
} from "../../utilsComponents/ApplicationIcon";

export default function Footer() {
  return (
    <>
      <div className={styles.main_Container}>
        <div className={styles.mobile_view}>
          <Link href={"/"} className={styles.mobile_footerLink}>
            <div className={styles.linkBox}>
              <div className={styles.iconBox}>
                {" "}
                <IoMdHome />
              </div>
            </div>
          </Link>

          <Link href={"/"} className={styles.mobile_footerLink}>
            <div className={styles.linkBox}>
              <div className={styles.iconBox}>
                {" "}
                <FaBuilding />
              </div>
            </div>
          </Link>
          <Link href={"/"} className={styles.mobile_footerLink}>
            <div className={styles.linkBox}>
              <div className={styles.iconBox}>
                {" "}
                <MdTipsAndUpdates />
              </div>
            </div>
          </Link>

          <Link href={"/"} className={styles.mobile_footerLink}>
            <div className={styles.linkBox}>
              <div className={styles.iconBox}>
                {" "}
                <FaWhatsappSquare />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
