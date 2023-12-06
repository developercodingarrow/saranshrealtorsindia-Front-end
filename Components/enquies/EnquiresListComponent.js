import React, { useContext, useEffect } from "react";
import styles from "./css/enquireListcomponent.module.css";
import { EnqureContext } from "../../contextApi/EnquireyContextApi";
import { AppContext } from "../../contextApi/AppContextApi";
import AdminContdentUI from "../admin/DashBoard/AdminContdentUI";
import DynamicTable from "../../utilsComponents/Table/DynimicTable";
import ModelBox from "../../utilsComponents/model/ModelBox";
import toast, { Toaster } from "react-hot-toast";

export default function EnquiresListComponent() {
  const { handelgetEnquires, allEnquires, setallEnquires, handelDeleteEnqure } =
    useContext(EnqureContext);

  const {
    btnLoading,
    setbtnLoading,
    setmodelBox,
    handelOpenModelBox,
    modelBox,
  } = useContext(AppContext);

  useEffect(() => {
    handelgetEnquires();
  }, [modelBox]);

  // Configuration object for table columns role
  const tableColumns = [
    { label: "S No", key: "name", component: "number" },
    { label: "Name", key: "name", component: "text" },
    { label: "Email", key: "email", component: "text" },
    { label: "Mobile Number", key: "number", component: "text" },
    { label: "DELETE", key: "id", component: "delete" },
    // Add more columns as needed
    // ... repeat additional columns
  ];

  const handelbtnAction = async (id) => {
    try {
      const result = await handelDeleteEnqure(id);
      if (result.data.status === "Success") {
        toast.success(result.data.message);
        setmodelBox(false);
      } else if (result.data.status === "Error") {
        toast.error(result.data.message);
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
        <AdminContdentUI pageTitle={"New Enquires"}>
          <div className={styles.table_container}>
            <DynamicTable
              tableData={allEnquires}
              tableColumns={tableColumns}
              handelbtnAction={handelOpenModelBox}
            />
          </div>
        </AdminContdentUI>
      </div>
    </>
  );
}
