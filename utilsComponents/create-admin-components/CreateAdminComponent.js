import React, { useContext, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import styles from "./css/CreateAdminComponent.module.css";
import { AdminContext } from "../../contextApi/AdminContextApi";
import { AppContext } from "../../contextApi/AppContextApi";
import StatusDot from "../Custome Components/StatusDot";
import SwitchBtn from "../Custome Components/SwitchBtn";
import AdminContdentUI from "../../Components/admin/DashBoard/AdminContdentUI";
import DynamicTable from "../Table/DynimicTable";
import ModelBox from "../model/ModelBox";

export default function CreateAdminComponent() {
  const {
    handelgetAllAdmins,
    admins,
    handelCreateNewAdmin,
    handelUpdateAdminStatus,
    handelDeleteAdmin,
  } = useContext(AdminContext);
  const {
    btnLoading,
    setbtnLoading,
    setmodelBox,
    handelOpenModelBox,
    modelBox,
  } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm({
    mode: "all", // Use "onChange" mode for real-time validation as the user types
  });

  useEffect(() => {
    handelgetAllAdmins();
  }, [btnLoading, modelBox]);

  const handelNewAdmin = async (formdata) => {
    try {
      setbtnLoading(true);
      const result = await handelCreateNewAdmin(formdata);

      if (result.data.status === "Success") {
        setbtnLoading(false);
        toast.success(result.data.message);
      } else if (result.data.status === "error") {
        setbtnLoading(false);
        toast.error("somting wrong");
      }
    } catch (error) {
      console.log(error);
    }
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

  const handelbtnAction = async (id) => {
    try {
      const result = await handelDeleteAdmin(id);
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
          ModelMesg="Are you sure to delect this Project if yes then Click on Yes Otherwise No"
        />
        <Toaster position="top-right" />
        <AdminContdentUI pageTitle={"CREATE ADMINS"}>
          <div className={styles.form_container}>
            <form onSubmit={handleSubmit(handelNewAdmin)}>
              <div className={styles.CreateAdminComponent_FormBox}>
                <div className={styles.form_upRow}>
                  <div className={styles.form_inputox}>
                    <input
                      className={styles.inputStyle}
                      placeholder="Name "
                      name="name"
                      {...register("name", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className={styles.form_inputox}>
                    <input
                      className={styles.inputStyle}
                      placeholder="user name"
                      name="userName"
                      {...register("userName", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className={styles.form_inputox}>
                    <input
                      className={styles.inputStyle}
                      placeholder="Password"
                      name="password"
                      {...register("password", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className={styles.form_inputox}>
                    <button type="submit" className={styles.btn}>
                      {btnLoading ? "Loading.." : "CREATE ADMIN"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className={styles.table_container}>
            <DynamicTable
              tableData={admins}
              tableColumns={tableColumns}
              handelbtnAction={handelOpenModelBox}
              handelSwitch={handelAction}
            />
          </div>
        </AdminContdentUI>
      </div>
    </>
  );
}
