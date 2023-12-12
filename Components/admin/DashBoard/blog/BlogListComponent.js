import React, { useContext, useEffect } from "react";
import AdminContdentUI from "../AdminContdentUI";
import styles from "../css/blogListCompoenent.module.css";
import DynamicTable from "../../../../utilsComponents/Table/DynimicTable";
import { BlogContext } from "../../../../contextApi/BlogContextApi";
import { AppContext } from "../../../../contextApi/AppContextApi";
import ModelBox from "../../../../utilsComponents/model/ModelBox";
import toast, { Toaster } from "react-hot-toast";

export default function BlogListComponent() {
  const userRole = "super-admin";

  const {
    btnLoading,
    setbtnLoading,
    setmodelBox,
    handelOpenModelBox,
    modelBox,
  } = useContext(AppContext);
  const { blogListData, handelGetAllBlosgs, handelDelectBlog, setloadingBlog } =
    useContext(BlogContext);

  console.log(blogListData);

  // Configuration object for table columns role
  const tableColumns = [
    { label: "S No", key: "name", component: "number" },
    { label: "Title", key: "blogTitle", component: "text" },
    { label: "DATE", key: "createAt", component: "date" },
    { label: "UPDATE", key: "_id", component: "update" },
    { label: "DELETE", key: "_id", component: "delete" },
    // Add more columns as needed
    // ... repeat additional columns
  ];

  const handelbtnAction = async (id) => {
    try {
      setloadingBlog(true);
      const result = await handelDelectBlog(id);
      if (result.data.status === "Success") {
        toast.success(result.data.message);
        setloadingBlog(false);
        setmodelBox(false);
      } else if (result.data.status === "Error") {
        toast.error(result.data.message);
        setloadingBlog(false);
        setmodelBox(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelUpdate = async (id) => {
    console.log(id);
  };
  return (
    <>
      <div>
        <ModelBox
          actionHandel={handelbtnAction}
          ModelMesg="Are you sure to delect this Enquire if yes then Click on Yes Otherwise No"
        />
        <Toaster position="top-right" />
        <AdminContdentUI pageTitle={"BLOG LIST"}>
          <div className={styles.table_container}>
            <DynamicTable
              tableData={blogListData}
              tableColumns={tableColumns}
              handelbtnAction={handelOpenModelBox}
              handelUpdateAction={handelUpdate}
            />
          </div>
        </AdminContdentUI>
      </div>
    </>
  );
}
