import React, { useContext, useEffect } from "react";
import AdminContdentUI from "../AdminContdentUI";
import { BlogContext } from "../../../../contextApi/BlogContextApi";
import { AppContext } from "../../../../contextApi/AppContextApi";
import { ProjectPageContext } from "../../../../contextApi/ProjectPageContextApi";
import DynamicTable from "../../../../utilsComponents/Table/DynimicTable";
import ModelBox from "../../../../utilsComponents/model/ModelBox";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import useUserRoleColumns from "../../../../custome-hook/useUserRoleColumns";

export default function PromotionalDeveloperList() {
  const userRole = "super-admin";
  const router = useRouter();
  const { projectPageList, handelDeletePormotionalPage, sending, setsending } =
    useContext(ProjectPageContext);
  const {
    btnLoading,
    setbtnLoading,
    setmodelBox,
    handelOpenModelBox,
    modelBox,
  } = useContext(AppContext);
  const Columns = [
    { label: "S No", key: "name", component: "number" },
    { label: "Title", key: "pageTitle", component: "text" },
    { label: "DEVELOPER", key: "developer", component: "text" },
    // { label: "DELETE", key: "_id", component: "delete" },
    { label: "View", key: "slug", component: "view" },
  ];

  const SuperAdminColumns = [
    { label: "DELETE", key: "_id", component: "delete" },
    // Add more role-specific columns for Blog if needed for each role
  ];

  const tableColumns = useUserRoleColumns(userRole, Columns, {
    "super-admin": SuperAdminColumns,
    admin: [], // Add admin-specific columns for Blog if needed
    // Add more role-specific columns for Blog or other components as needed
  });

  const handelbtnAction = async (id) => {
    try {
      setsending(true);
      const result = await handelDeletePormotionalPage(id);
      if (result.data.status === "Success") {
        toast.success(result.data.message);
        setsending(false);
        setmodelBox(false);
      } else if (result.data.status === "Error") {
        toast.error(result.data.message);
        setsending(false);
        setmodelBox(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelRedirectToPage = (slug) => {
    router.push(`/developer-projects/${slug}`);
  };

  return (
    <>
      <div>
        <ModelBox
          actionHandel={handelbtnAction}
          ModelMesg="Are you sure to delect this Enquire if yes then Click on Yes Otherwise No"
        />
        <Toaster position="top-right" />
        <AdminContdentUI pageTitle={"DEVELOPER PROMOTIONAL  LIST"}>
          <div>
            <DynamicTable
              tableData={projectPageList}
              tableColumns={tableColumns}
              handelbtnAction={handelOpenModelBox}
              handelViewAction={handelRedirectToPage}
            />
          </div>
        </AdminContdentUI>
      </div>
    </>
  );
}
