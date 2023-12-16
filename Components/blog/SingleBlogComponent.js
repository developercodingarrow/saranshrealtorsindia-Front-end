import React, { useContext } from "react";
import SideEnquireForm from "../../utilsComponents/form/SideEnquireForm";
import styles from "./css/singleBlog.module.css";
import SingleBlog from "./SingleBlog";
import RecentBlog from "../../utilsComponents/recent-activities/RecentBlog";
import { BlogContext } from "../../contextApi/BlogContextApi";
import { ProjectContext } from "../../contextApi/ProjectContextApi";
import useLimitedList from "../../custome-hook/useLimitedList";
import RecentProjects from "../../utilsComponents/recent-activities/RecentProjects";
export default function SingleBlogComponent() {
  const { blogListData } = useContext(BlogContext);
  const { projects } = useContext(ProjectContext);

  const limitedBlogList = useLimitedList(blogListData, 5);
  const limitedProjectList = useLimitedList(projects, 10);
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
              <div className={styles.recent_BlogBox}>
                <div className={styles.list_heading}>RECENT BLOG</div>
                {limitedBlogList.map((el, i) => {
                  return <RecentBlog items={el} />;
                })}
              </div>

              <div className={styles.recent_BlogBox}>
                <div className={styles.list_heading}>RECENT PROJECTS</div>
                {limitedProjectList.map((el, i) => {
                  return <RecentProjects items={el} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
