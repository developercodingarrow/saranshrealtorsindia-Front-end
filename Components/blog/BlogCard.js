import React from "react";
import styles from "./css/blogcards.module.css";
import Image from "next/image";
import sampleIMage from "../../public/blog-images/blog-6540c1cf509b8635922ed807-1700563060356.jpeg";

export default function BlogCard() {
  return (
    <div className={styles.card_Container}>
      <div className={styles.card_imageBox}>
        <Image
          src={sampleIMage}
          alt="blog-image"
          width={500}
          height={500}
          className={styles.blog_imageStyle}
        />
      </div>
      <div className={styles.card_body}>
        <h1 className={styles.card_title}>
          Why is the Sports cars so well so well Designed
        </h1>
        <div className={styles.sort_descreptionBox}>
          <p className={styles.card_sortDescreption}>
            Pens taggedcard · Card-move · Boostrap Card Slider · Card-Hover
            Design · hover effect card · Emoji Keyboard · Flexbox Grid Card Item
            and Slick carousel.
          </p>
        </div>

        <div className={styles.card_Btn}>
          <button className={styles.btn}>Read</button>
        </div>
      </div>
    </div>
  );
}
