import React from "react";
import styles from "./css/blogcards.module.css";
import Image from "next/image";
import sampleIMage from "../../public/blog-images/blog-6540c1cf509b8635922ed807-1700563060356.jpeg";
import Link from "next/link";

export default function BlogCard(props) {
  const { blogTitle, blogDescreption, slug, blogimage } = props;
  console.log(blogimage[0]);

  const truncateContent = (content, maxLength) => {
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;
  };

  const truncatedDescription = truncateContent(blogDescreption || "", 150); // Change 50 to your desired length
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
        <h1 className={styles.card_title}>{blogTitle}</h1>
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
