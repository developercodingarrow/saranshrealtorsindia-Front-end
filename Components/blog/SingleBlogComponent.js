import React from "react";
import SideEnquireForm from "../../utilsComponents/form/SideEnquireForm";
// import styles from "./css/blogListComponent.module.css";
import styles from "./css/singleBlog.module.css";
import SingleBlog from "./SingleBlog";

export default function SingleBlogComponent() {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.Blog_mainContainer}>
          <div className={styles.Blog_Container}>
            <SingleBlog />
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
