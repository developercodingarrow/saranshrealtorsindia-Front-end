import React from "react";
import SuperAdminPrivate from "../../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../../Components/layouts/super admin layout/SuperAdminLayout";
import CreateBlogCompoenent from "../../../utilsComponents/blog-component/CreateBlogCompoenent";

export default function cCreateBlog() {
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <CreateBlogCompoenent />
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
