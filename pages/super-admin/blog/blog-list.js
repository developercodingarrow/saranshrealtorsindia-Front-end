import React from "react";
import SuperAdminPrivate from "../../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../../Components/layouts/super admin layout/SuperAdminLayout";
import BlogListComponent from "../../../Components/admin/DashBoard/blog/BlogListComponent";

export default function BlogListPage() {
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <BlogListComponent />
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
