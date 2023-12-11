import React from "react";
import SuperAdminPrivate from "../../../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../../../Components/layouts/super admin layout/SuperAdminLayout";
import PromotionalDeveloperList from "../../../../Components/admin/DashBoard/promotional/PromotionalDeveloperList";

export default function DevloperPormotinalPage() {
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <PromotionalDeveloperList />
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
