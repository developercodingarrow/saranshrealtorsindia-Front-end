import React, { useEffect } from "react";
import styles from "./css/blogcards.module.css";
import Image from "next/image";
import useContentLength from "../../custome-hook/useCotentLength";
import sampleIMage from "../../public/blog-images/blog-6540c1cf509b8635922ed807-1700563060356.jpeg";
import Link from "next/link";

export default function BlogCard(props) {
  const { blogTitle, blogDescreption, slug, blogimage } = props;

  const truncateContent = useContentLength();

  const truncatedTitle = truncateContent(blogTitle, 30);
  const truncatedDescription = truncateContent(blogDescreption, 150);
  return (
    <div className={styles.card_Container}>
      <div className={styles.card_imageBox}>
        {blogimage[0] && (
          <Image
            src={`/blog-images/${blogimage[0].url}`}
            alt="blog-image"
            width={500}
            height={500}
            className={styles.blog_imageStyle}
          />
        )}
      </div>
      <div className={styles.card_body}>
        <h1 className={styles.card_title}>{truncatedTitle}</h1>
        <div className={styles.sort_descreptionBox}>
          <div
            className={styles.card_sortDescreption}
            dangerouslySetInnerHTML={{
              __html: truncatedDescription,
            }}
          />
        </div>

        <div className={styles.card_Btn}>
          <Link href={`/blogs/${slug}`} className={styles.linstyle}>
            Read
          </Link>
        </div>
      </div>
    </div>
  );
}
