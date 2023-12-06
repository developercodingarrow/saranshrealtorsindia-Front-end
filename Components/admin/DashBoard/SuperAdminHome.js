import React, { useState, useContext, useEffect } from "react";
import style from "../../../styles/super-admin/superAdminHome.module.css";
import AddNewProjectForm from "../../../utilsComponents/form/AddNewProjectForm";
import { AdminContext } from "../../../contextApi/AdminContextApi";
import DynamicTable from "../../../utilsComponents/Table/DynimicTable";
import toast, { Toaster } from "react-hot-toast";
import AdminContdentUI from "./AdminContdentUI";
import { EnqureContext } from "../../../contextApi/EnquireyContextApi";

export default function SuperAdminHome() {
  const {
    handelgetAllAdmins,
    admins,
    handelCreateNewAdmin,
    handelUpdateAdminStatus,
  } = useContext(AdminContext);

  const { handelgetEnquires, allEnquires, setallEnquires } =
    useContext(EnqureContext);

  useEffect(() => {
    handelgetEnquires();
  }, []);

  useEffect(() => {
    handelgetAllAdmins();
  }, []);

  console.log(allEnquires);
  // Configuration object for table columns role
  const tableColumns = [
    { label: "S No", key: "name", component: "number" },
    { label: "Name", key: "name", component: "text" },
    { label: "Email", key: "email", component: "text" },
    { label: "Password", key: "number", component: "text" },
    { label: "DELETE", key: "id", component: "delete" },
    // Add more columns as needed
    // ... repeat additional columns
  ];

  const handelbtnAction = () => {
    console.log("delete");
  };

  return (
    <>
      <div>
        <Toaster position="top-right" />
        <AdminContdentUI pageTitle={"New Enquires"}>
          <DynamicTable
            tableData={allEnquires}
            tableColumns={tableColumns}
            handelbtnAction={handelbtnAction}
          />
        </AdminContdentUI>
      </div>
    </>
  );
}
