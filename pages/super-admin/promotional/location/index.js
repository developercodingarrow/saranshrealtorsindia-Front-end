import React from "react";
import SuperAdminPrivate from "../../../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../../../Components/layouts/super admin layout/SuperAdminLayout";
import PromotionalDeveloperList from "../../../../Components/admin/DashBoard/promotional/PromotionalDeveloperList";
import LocationPageList from "../../../../Components/admin/DashBoard/promotional/LocationPageList";

export default function PromotionalLocationPage() {
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <LocationPageList />
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
