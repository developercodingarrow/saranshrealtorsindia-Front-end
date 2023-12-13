import React from "react";
import SuperAdminPrivate from "../../../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../../../Components/layouts/super admin layout/SuperAdminLayout";
import UpdateProjectComponent from "../../../../Components/admin/DashBoard/projects/UpdateProjectComponent";

export default function UpdateProjectPage() {
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <UpdateProjectComponent />
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
