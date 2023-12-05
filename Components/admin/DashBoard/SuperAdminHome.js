import React, { useState, useContext, useEffect } from "react";
import style from "../../../styles/super-admin/superAdminHome.module.css";
import AddNewProjectForm from "../../../utilsComponents/form/AddNewProjectForm";
import { AdminContext } from "../../../contextApi/AdminContextApi";
import DynamicTable from "../../../utilsComponents/Table/DynimicTable";
import toast, { Toaster } from "react-hot-toast";
import AdminContdentUI from "./AdminContdentUI";

export default function SuperAdminHome() {
  const {
    handelgetAllAdmins,
    admins,
    handelCreateNewAdmin,
    handelUpdateAdminStatus,
  } = useContext(AdminContext);

  useEffect(() => {
    handelgetAllAdmins();
  }, []);

  console.log(admins);
  // Configuration object for table columns role
  const tableColumns = [
    { label: "S No", key: "name", component: "number" },
    { label: "Name", key: "name", component: "text" },
    { label: "user Name", key: "userName", component: "text" },
    { label: "ROLE", key: "role", component: "text" },
    { label: "Status", key: "userStatus", component: "switch" },
    { label: "DELETE", key: "id", component: "delete" },
    // Add more columns as needed
    // ... repeat additional columns
  ];

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
    console.log("Checkbox checked:", isChecked);
  };

  const handelbtnAction = () => {
    console.log("delete");
  };

  const handelAction = async (requestData, token) => {
    console.log(requestData);
    try {
      const result = await handelUpdateAdminStatus(requestData, token);
      console.log(result);
      if (result.data.status === "Success") {
        toast.success(result.data.message);
      } else if (result.data.status === "Error") {
        toast.error(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <Toaster position="top-right" />
        <AdminContdentUI pageTitle={"CREATE ADMINS"}>
          <DynamicTable
            tableData={admins}
            tableColumns={tableColumns}
            handleCheckboxChange={handleCheckboxChange}
            handelbtnAction={handelbtnAction}
            handelSwitch={handelAction}
          />
        </AdminContdentUI>
      </div>
    </>
  );
}
