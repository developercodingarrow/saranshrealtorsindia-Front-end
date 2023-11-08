import React from "react";
import style from "../../../styles/super-admin/projects/projectList.module.css";
import ProjectListTable from "../../../utilsComponents/Table/ProjectListTable";

export default function ProjectLists() {
  return (
    <>
      <div className={style.ProjectLists_mainContainer}>
        <div className={style.page_HeadingBox}>
          <h1>Project Lists</h1>
        </div>

        <div className={style.projectTable_conatiner}>
          <ProjectListTable />
        </div>
      </div>
    </>
  );
}
