import React from "react";
import SuperAdminPrivate from "../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../Components/layouts/super admin layout/SuperAdminLayout";
import AddLocation from "../../Components/admin/DashBoard/AddLocation";

export default function AddLocationPage() {
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <AddLocation />
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
