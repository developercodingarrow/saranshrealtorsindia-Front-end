import React from "react";
import SuperAdminPrivate from "../../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../../Components/layouts/super admin layout/SuperAdminLayout";
import EnquiresListComponent from "../../../Components/enquies/EnquiresListComponent";

export default function EnquirePage() {
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <EnquiresListComponent />
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
