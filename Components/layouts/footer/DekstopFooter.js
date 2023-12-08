import React from "react";
import styles from "../css/footer.module.css";
import footerLogo from "../../../public/Company-logo/logo-sample.png";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineYoutube,
  FaXTwitter,
  IoIosArrowRoundForward,
  CiLocationOn,
  FaPhoneAlt,
  MdMessage,
} from "../../../utilsComponents/ApplicationIcon";
import Link from "next/link";

export default function DekstopFooter() {
  return (
    <>
      <div className={styles.DekstopFooter_mainContainer}>
        {/* Colum One Start */}
        <div className={styles.DekstopFooter_columOne}>
          <div className={styles.DekstopFooter_coumn_logoBox}>
            <Image
              src={footerLogo}
              className={styles.footerLogo_Style}
              width={500}
              height={500}
            />
          </div>
          <div className={styles.DekstopFooter_sortAbout}>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div className={styles.social_mediaPart}>
            <div className={styles.DekstopFooter_iconBox}>
              <AiOutlineInstagram />
            </div>
            <div className={styles.DekstopFooter_iconBox}>
              <AiOutlineFacebook />
            </div>
            <div className={styles.DekstopFooter_iconBox}>
              <AiOutlineYoutube />
            </div>
            <div className={styles.DekstopFooter_iconBox}>
              <FaXTwitter />
            </div>
          </div>
        </div>
        {/* Column One End */}
        {/* Colum Two start */}
        <div className={styles.DekstopFooter_columTwo}>
          <h3 className={styles.DekstopFooter_columTitle}>Explore</h3>
          <div className={styles.DekstopFooter_columListBox}>
            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <IoIosArrowRoundForward />
              </div>
              <div className={styles.link_textBox}>About Us</div>
            </Link>

            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <IoIosArrowRoundForward />
              </div>
              <div className={styles.link_textBox}>Contact us</div>
            </Link>

            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <IoIosArrowRoundForward />
              </div>
              <div className={styles.link_textBox}>Projects</div>
            </Link>

            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <IoIosArrowRoundForward />
              </div>
              <div className={styles.link_textBox}>Blogs</div>
            </Link>
            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <IoIosArrowRoundForward />
              </div>
              <div className={styles.link_textBox}>Home</div>
            </Link>
          </div>
        </div>
        {/* Colum Two End */}

        {/* Colum Two start */}
        <div className={styles.DekstopFooter_columTwo}>
          <h3 className={styles.DekstopFooter_columTitle}>Feature Projects</h3>
          <div className={styles.DekstopFooter_columListBox}>
            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <IoIosArrowRoundForward />
              </div>
              <div className={styles.link_textBox}>About Us</div>
            </Link>

            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <IoIosArrowRoundForward />
              </div>
              <div className={styles.link_textBox}>Contact us</div>
            </Link>

            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <IoIosArrowRoundForward />
              </div>
              <div className={styles.link_textBox}>Projects</div>
            </Link>

            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <IoIosArrowRoundForward />
              </div>
              <div className={styles.link_textBox}>Blogs</div>
            </Link>
            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <IoIosArrowRoundForward />
              </div>
              <div className={styles.link_textBox}>Home</div>
            </Link>
          </div>
        </div>
        {/* Colum Two End */}

        {/* Colum Two start */}
        <div className={styles.DekstopFooter_columTwo}>
          <h3 className={styles.DekstopFooter_columTitle}>Upcoming Projects</h3>
          <div className={styles.DekstopFooter_columListBox}>
            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <IoIosArrowRoundForward />
              </div>
              <div className={styles.link_textBox}>About Us</div>
            </Link>

            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <IoIosArrowRoundForward />
              </div>
              <div className={styles.link_textBox}>Contact us</div>
            </Link>

            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <IoIosArrowRoundForward />
              </div>
              <div className={styles.link_textBox}>Projects</div>
            </Link>

            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <IoIosArrowRoundForward />
              </div>
              <div className={styles.link_textBox}>Blogs</div>
            </Link>
            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <IoIosArrowRoundForward />
              </div>
              <div className={styles.link_textBox}>Home</div>
            </Link>
          </div>
        </div>
        {/* Colum Two End */}

        {/* Colum Two start */}
        <div className={styles.DekstopFooter_columTwo}>
          <h3 className={styles.DekstopFooter_columTitle}>Have a Questions?</h3>
          <div className={styles.DekstopFooter_columListBox}>
            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <FaPhoneAlt />
              </div>
              <div className={styles.link_textBox}>
                {" "}
                +91-9717930806 Office : +91-7503255000 CRM : 0124-5181141
              </div>
            </Link>

            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <MdMessage />
              </div>
              <div className={styles.link_textBox}>
                info@saranshrealtors.com
              </div>
            </Link>

            <Link href={"#"} className={styles.DekstopFooter_linkBox}>
              <div className={styles.linkIcon_Box}>
                <CiLocationOn />
              </div>
              <div className={styles.link_textBox}>
                416, Tower 4, DLF Corporate Greens, Sector 74A, Gurgaon - 122004
              </div>
            </Link>
          </div>
        </div>
        {/* Colum Two End */}
      </div>
    </>
  );
}
