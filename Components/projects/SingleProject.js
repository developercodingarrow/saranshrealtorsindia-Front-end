import React, { useContext } from "react";
import styles from "./css/singleProject.module.css";
import SingleProjectWrapper from "./singleProjectSection/SingleProjectWrapper";
import { ProjectContext } from "../../contextApi/ProjectContextApi";
import SideEnquireForm from "../../utilsComponents/form/SideEnquireForm";
import useLimitedList from "../../custome-hook/useLimitedList";
import RecentBlog from "../../utilsComponents/recent-activities/RecentBlog";
import { BlogContext } from "../../contextApi/BlogContextApi";
import RecentProjects from "../../utilsComponents/recent-activities/RecentProjects";

export default function SingleProject() {
  const { singleProject, projects } = useContext(ProjectContext);
  const { blogListData } = useContext(BlogContext);
  const limitedBlogList = useLimitedList(blogListData, 5);
  const limitedProjectList = useLimitedList(projects, 10);
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.header_part}>
          <h1>{singleProject.projectName}</h1>
        </div>
        <div className={styles.inner_Container}>
          <div className={styles.content_part}>
            <SingleProjectWrapper />
          </div>
          <div className={styles.formSide_container}>
            <div className={styles.form_section}>
              <SideEnquireForm />

              <div className={styles.recent_BlogBox}>
                <div className={styles.list_heading}>RECENT BLOGS</div>
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
