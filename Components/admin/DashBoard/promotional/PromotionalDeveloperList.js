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
import {
  developerProjectsColumns,
  SAdeveloperProjectsColumns,
} from "../../../../jsonData/tableColumns";

import { UserContext } from "../../../../contextApi/UserContextApi";

export default function PromotionalDeveloperList() {
  const { loginUser, userRole } = useContext(UserContext);
  console.log(userRole);
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

  const tableColumns = useUserRoleColumns(userRole, developerProjectsColumns, {
    "super-admin": SAdeveloperProjectsColumns,
    admin: [],
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
