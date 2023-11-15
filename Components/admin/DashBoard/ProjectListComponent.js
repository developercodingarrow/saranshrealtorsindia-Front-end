import React, { useContext } from "react";
import styles from "../../../styles/super-admin/projects/projectList.module.css";
import ProjectListTable from "../../../utilsComponents/Table/ProjectListTable";
import { ProjectContext } from "../../../contextApi/ProjectContextApi";
import toast, { Toaster } from "react-hot-toast";

export default function ProjectListComponent() {
  return (
    <>
      <div className={styles.ProjectListComponent_mainContainer}>
        <div className={styles.ProjectListComponent_titleBox}>
          {" "}
          Project List
        </div>
        <div className={styles.ProjectListComponent_TableContainer}>
          <Toaster position="top-right" />
          <ProjectListTable />
        </div>
      </div>
    </>
  );
}
