import React, { useContext } from "react";
import AdminContdentUI from "../AdminContdentUI";
import { BlogContext } from "../../../../contextApi/BlogContextApi";
import { AppContext } from "../../../../contextApi/AppContextApi";
import { ProjectPageContext } from "../../../../contextApi/ProjectPageContextApi";
import DynamicTable from "../../../../utilsComponents/Table/DynimicTable";
import ModelBox from "../../../../utilsComponents/model/ModelBox";
import toast, { Toaster } from "react-hot-toast";

export default function LocationPageList() {
  const { locationPages, handelDeleteLocationPage, sending, setsending } =
    useContext(ProjectPageContext);
  const {
    btnLoading,
    setbtnLoading,
    setmodelBox,
    handelOpenModelBox,
    modelBox,
  } = useContext(AppContext);
  // Configuration object for table columns role
  const tableColumns = [
    { label: "S No", key: "name", component: "number" },
    { label: "Title", key: "pageTitle", component: "text" },
    { label: "LOCATION", key: "ProjectCity", component: "text" },
    { label: "DELETE", key: "_id", component: "delete" },
    // Add more columns as needed
    // ... repeat additional columns
  ];

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
            />
          </div>
        </AdminContdentUI>
      </div>
    </>
  );
}
