import React from "react";
import SuperAdminPrivate from "../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../Components/layouts/super admin layout/SuperAdminLayout";
import AddCity from "../../Components/admin/DashBoard/AddCity";

export default function AddCityPage() {
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <AddCity />
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
