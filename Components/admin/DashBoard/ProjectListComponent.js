import React, { useContext } from "react";
import styles from "../../../styles/super-admin/projects/projectList.module.css";
import ProjectListTable from "../../../utilsComponents/Table/ProjectListTable";
import toast, { Toaster } from "react-hot-toast";
import ModelBox from "../../../utilsComponents/model/ModelBox";
import { ProjectContext } from "../../../contextApi/ProjectContextApi";
export default function ProjectListComponent() {
  const { handelDeleteSingleProject } = useContext(ProjectContext);

  return (
    <>
      <ModelBox
        actionHandel={handelDeleteSingleProject}
        ModelMesg="Are you sure to delect this Project if yes then Click on Yes Otherwise No"
      />
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
