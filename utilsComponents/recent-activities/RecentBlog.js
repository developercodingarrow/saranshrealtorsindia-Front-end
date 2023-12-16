import React from "react";
import styles from "./css/recentBlog.module.css";
import Link from "next/link";
import sampleImage from "../../public/Company-logo/banglore.jpg";
import Image from "next/image";
import useContentLength from "../../custome-hook/useCotentLength";

export default function RecentBlog(props) {
  const { items } = props;
  console.log(items);
  const truncateContent = useContentLength();
  let truncatedTitle;

  if (items.blogTitle) {
    truncatedTitle = truncateContent(items.blogTitle, 30);
  } else if (items.projectName) {
    truncatedTitle = truncateContent(items.projectName, 30);
  }

  return (
    <>
      <div className={styles.activity_mainContainer}>
        <div>
          <Link href={"#"} className={styles.link_box}>
            <div className={styles.image_box}>
              <Image
                src={sampleImage}
                alt="sample-image"
                className={styles.image_style}
              />
            </div>
            <div className={styles.link_text}>{truncatedTitle}</div>
          </Link>
        </div>
      </div>
    </>
  );
}
