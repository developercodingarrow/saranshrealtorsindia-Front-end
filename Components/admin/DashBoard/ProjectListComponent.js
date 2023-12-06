import React, { useContext } from "react";
import styles from "../../../styles/super-admin/projects/projectList.module.css";
import ProjectListTable from "../../../utilsComponents/Table/ProjectListTable";
import toast, { Toaster } from "react-hot-toast";
import ModelBox from "../../../utilsComponents/model/ModelBox";
import { ProjectContext } from "../../../contextApi/ProjectContextApi";
import { AppContext } from "../../../contextApi/AppContextApi";

export default function ProjectListComponent() {
  const { handelDeleteSingleProject } = useContext(ProjectContext);
  const { setmodelBox } = useContext(AppContext);

  const handelbtnAction = async (id) => {
    try {
      const result = await handelDeleteSingleProject(id);
      console.log(result.data.status);
      if (result.data.status === "Success") {
        toast.success(result.data.message);
        setmodelBox(false);
      } else if (result.data.status === "Error") {
        toast.error(result.data.message);
        setmodelBox(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ModelBox
        actionHandel={handelbtnAction}
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
