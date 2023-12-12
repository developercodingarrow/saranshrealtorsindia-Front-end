import React, { useContext } from "react";
import AdminContdentUI from "../AdminContdentUI";
import { AppContext } from "../../../../contextApi/AppContextApi";
import { ProjectPageContext } from "../../../../contextApi/ProjectPageContextApi";
import DynamicTable from "../../../../utilsComponents/Table/DynimicTable";
import ModelBox from "../../../../utilsComponents/model/ModelBox";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import useUserRoleColumns from "../../../../custome-hook/useUserRoleColumns";
import {
  locationProjectColumns,
  SALocationProjectColumns,
} from "../../../../jsonData/tableColumns";
import { UserContext } from "../../../../contextApi/UserContextApi";

export default function LocationPageList() {
  const router = useRouter();
  const { userRole } = useContext(UserContext);
  const { locationPages, handelDeleteLocationPage, sending, setsending } =
    useContext(ProjectPageContext);
  const {
    btnLoading,
    setbtnLoading,
    setmodelBox,
    handelOpenModelBox,
    modelBox,
  } = useContext(AppContext);

  const tableColumns = useUserRoleColumns(userRole, locationProjectColumns, {
    "super-admin": SALocationProjectColumns,
    admin: [],
  });

  const handelbtnAction = async (id) => {
    try {
      setsending(true);
      const result = await handelDeleteLocationPage(id);
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

  const handelPageRedirect = (slug) => {
    router.push(`/location-project/${slug}`);
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
              tableData={locationPages}
              tableColumns={tableColumns}
              handelbtnAction={handelOpenModelBox}
              handelViewAction={handelPageRedirect}
            />
          </div>
        </AdminContdentUI>
      </div>
    </>
  );
}
