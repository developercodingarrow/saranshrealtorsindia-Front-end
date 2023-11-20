import React from "react";
import SuperAdminLayout from "../../Components/layouts/super admin layout/SuperAdminLayout";
import SuperAdminPrivate from "../../private/SuperAdminPrivate";
import AddDeveloperComonent from "../../utilsComponents/add-developer-components/AddDeveloperComonent";
import styles from "../../utilsComponents/add-developer-components/css/adddeveloper.module.css";
export default function AddDeveloperPage() {
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <AddDeveloperComonent />
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
