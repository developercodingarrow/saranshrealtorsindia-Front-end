import React, { useContext } from "react";
import styles from "./css/singleBlog.module.css";
import sampleImage from "../../public/blog-images/blog-6540c1cf509b8635922ed807-1700560727282.png";
import Image from "next/image";
import { BlogContext } from "../../contextApi/BlogContextApi";
import { useRouter } from "next/router";

export default function SingleBlog() {
  const router = useRouter();
  const { slug } = router.query;
  const { singleBlog } = useContext(BlogContext);

  //   console.log(singleBlog.image[0].url);

  return (
    <>
      <div className={styles.SingleBlog_mainContainer}>
        <div className={styles.featureImage_Container}>
          {singleBlog && singleBlog.image && singleBlog.image[0] && (
            <Image
              src={`/blog-images/${singleBlog.image[0].url}`}
              width={800}
              height={800}
              className={styles.feature_imageStyle}
            />
          )}
        </div>
        <div className={styles.Blog_contentBox}>
          <div className={styles.blog_titleBox}>{singleBlog.blogTitle}</div>
          <div
            className={styles.Blog_content}
            dangerouslySetInnerHTML={{
              __html: singleBlog.blogDescreption || "",
            }}
          />
        </div>
      </div>
    </>
  );
}
