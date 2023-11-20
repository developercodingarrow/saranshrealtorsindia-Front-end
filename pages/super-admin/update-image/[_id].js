import React from "react";
import SuperAdminPrivate from "../../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../../Components/layouts/super admin layout/SuperAdminLayout";
import ProjectImageUpdate from "../../../Components/admin/DashBoard/ProjectImageUpdate";

export default function UpdateImagePage() {
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <ProjectImageUpdate />
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
