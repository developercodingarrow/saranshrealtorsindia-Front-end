import React, { useContext } from "react";
import { BlogContext } from "../../contextApi/BlogContextApi";
import Image from "next/image";
import styles from "./css/blogListComponent.module.css";
import BlogCard from "./BlogCard";

export default function BlogListComponent() {
  const { allblogsList, setallblogsList } = useContext(BlogContext);

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.Blog_mainContainer}>
          <div className={styles.Blog_Container}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
              return <BlogCard key={i} />;
            })}
          </div>
          <div className={styles.formSide_container}>
            <div className={styles.form_section}>
              <p>Enquire form</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//    {/* <div dangerouslySetInnerHTML={{ __html: el.blogDescreption }} /> */}
