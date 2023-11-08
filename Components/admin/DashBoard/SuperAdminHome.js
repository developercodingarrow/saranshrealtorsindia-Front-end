import React, { useState } from "react";
import style from "../../../styles/super-admin/superAdminHome.module.css";
import AddNewProjectForm from "../../../utilsComponents/form/AddNewProjectForm";
import ProjectLists from "./ProjectLists";

export default function SuperAdminHome() {
  return (
    <>
      <div>
        <ProjectLists />
      </div>
    </>
  );
}
