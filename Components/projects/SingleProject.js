import React, { useContext } from "react";
import styles from "./css/singleProject.module.css";
import SingleProjectWrapper from "./singleProjectSection/SingleProjectWrapper";
import { ProjectContext } from "../../contextApi/ProjectContextApi";

export default function SingleProject() {
  const { singleProject } = useContext(ProjectContext);

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
          <div className={styles.form_part}>For part</div>
        </div>
      </div>
    </>
  );
}
