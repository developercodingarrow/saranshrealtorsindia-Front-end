import React from "react";
import SuperAdminPrivate from "../../../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../../../Components/layouts/super admin layout/SuperAdminLayout";

export default function UpdateProjectPage() {
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <div>project List</div>
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
