import React from "react";
import style from "./css/TopHeader.module.css";

import {
  BsTelephone,
  FiFacebook,
  BiLogoLinkedin,
  BsInstagram,
  AiOutlineYoutube,
  FaXTwitter,
} from "../../utilsComponents/ApplicationIcon";
import Image from "next/image";
import logo from "../../public/Company-logo/logo.png";

export default function TopHeader() {
  return (
    <>
      <div className={style.container}>
        <div className={style.lefttBox}>
          <div className={style.logoBox}>
            <Image src={logo} width={200} alt="saransh realtor logo" />
          </div>
        </div>

        {/* Right side start */}
        <div className={style.rightBox}>
          <div className={style.contactInfoBox}>
            <div className={style.iconBox}>
              <BsTelephone />
            </div>
            <div className={style.contactInformation}>
              <div className={style.mobileNumber}>+91-9717930806</div>
              <div>info@saranshrealtors.com</div>
            </div>
          </div>
          <div className={style.socila_mediaBox}>
            <div>
              <FiFacebook />
            </div>
            <div>
              <FaXTwitter />
            </div>
            <div>
              <BiLogoLinkedin />
            </div>
            <div>
              <BsInstagram />
            </div>
            <div>
              <AiOutlineYoutube />
            </div>
          </div>
        </div>
        {/* Right side End */}
      </div>
    </>
  );
}
