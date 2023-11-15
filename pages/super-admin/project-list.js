import React from "react";
import SuperAdminPrivate from "../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../Components/layouts/super admin layout/SuperAdminLayout";
import ProjectListComponent from "../../Components/admin/DashBoard/ProjectListComponent";

export default function ProjectList() {
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <ProjectListComponent />
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
