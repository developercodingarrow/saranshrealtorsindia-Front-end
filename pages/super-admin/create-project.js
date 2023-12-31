import React from "react";
import SuperAdminPrivate from "../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../Components/layouts/super admin layout/SuperAdminLayout";
import style from "../../styles/super-admin/createProject.module.css";
import AddNewProjectForm from "../../utilsComponents/form/AddNewProjectForm";

export default function Createproject() {
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <div className={style.Createproject_mainContainer}>
            <div className={style.Createproject_TitleBox}>Add New Project</div>
            <div className={style.Createproject_formContainer}>
              <AddNewProjectForm />
            </div>
          </div>
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
