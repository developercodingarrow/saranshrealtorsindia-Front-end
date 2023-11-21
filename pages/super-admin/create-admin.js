import React from "react";
import SuperAdminPrivate from "../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../Components/layouts/super admin layout/SuperAdminLayout";
import CreateAdminComponent from "../../utilsComponents/create-admin-components/CreateAdminComponent";

export default function CreateAdminPage() {
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <CreateAdminComponent />
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
