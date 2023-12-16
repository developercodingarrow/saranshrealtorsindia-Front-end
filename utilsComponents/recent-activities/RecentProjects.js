import React from "react";
import styles from "./css/recentBlog.module.css";
import Link from "next/link";
import sampleImage from "../../public/Company-logo/banglore.jpg";
import Image from "next/image";
import useContentLength from "../../custome-hook/useCotentLength";

export default function RecentProjects(props) {
  const { items } = props;
  const truncateContent = useContentLength();
  let truncatedTitle = truncateContent(items.projectName, 30);

  return (
    <>
      <div className={styles.activity_mainContainer}>
        <div>
          <Link href={"#"} className={styles.link_box}>
            <div className={styles.image_box}>
              {items && items.ProjectThumblin && (
                <Image
                  src={`/project-feature-images/${items.ProjectThumblin[0].url}`}
                  alt="sample-image"
                  className={styles.image_style}
                  width={100}
                  height={100}
                />
              )}
            </div>
            <div className={styles.link_text}>{truncatedTitle}</div>
          </Link>
        </div>
      </div>
    </>
  );
}
