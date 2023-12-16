import React from "react";
import SuperAdminPrivate from "../../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../../Components/layouts/super admin layout/SuperAdminLayout";
import FloorPlanComponent from "../../../Components/admin/DashBoard/floorPlan/FloorPlanComponent";

export default function FloorPlanPage() {
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <FloorPlanComponent />
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
