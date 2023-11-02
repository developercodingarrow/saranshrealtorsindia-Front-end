import React from "react";
import SuperAdminPrivate from "../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../Components/layouts/super admin layout/SuperAdminLayout";

export default function SuperAdminDashboard() {
  return (
    <>
      <div>
        <SuperAdminPrivate>
          <SuperAdminLayout>
            <h1>Super admin</h1>
          </SuperAdminLayout>
        </SuperAdminPrivate>
      </div>
    </>
  );
}
