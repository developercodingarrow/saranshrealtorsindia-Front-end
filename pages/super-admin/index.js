import React from "react";
import SuperAdminPrivate from "../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../Components/layouts/super admin layout/SuperAdminLayout";
import SuperAdminHome from "../../Components/admin/DashBoard/SuperAdminHome";

export default function SuperAdminDashboard() {
  return (
    <>
      <div>
        <SuperAdminPrivate>
          <SuperAdminLayout>
            <SuperAdminHome />
          </SuperAdminLayout>
        </SuperAdminPrivate>
      </div>
    </>
  );
}
