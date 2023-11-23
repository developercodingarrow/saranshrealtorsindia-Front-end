import React, { useContext } from "react";
import { BlogContext } from "../../contextApi/BlogContextApi";
import Image from "next/image";
import styles from "./css/blogListComponent.module.css";
import BlogCard from "./BlogCard";
import SideEnquireForm from "../../utilsComponents/form/SideEnquireForm";

export default function BlogListComponent() {
  const { allblogsList, setallblogsList } = useContext(BlogContext);

  console.log(allblogsList);

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.Blog_mainContainer}>
          <div className={styles.Blog_Container}>
            {allblogsList.map((el, i) => {
              return (
                <BlogCard
                  key={i}
                  blogTitle={el.blogTitle}
                  blogDescreption={el.blogDescreption}
                  slug={el.slug}
                  blogimage={el.image}
                />
              );
            })}
          </div>
          <div className={styles.formSide_container}>
            <div className={styles.form_section}>
              <SideEnquireForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//    {/* <div dangerouslySetInnerHTML={{ __html: el.blogDescreption }} /> */}
