import React, { useContext, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import styles from "./css/CreateAdminComponent.module.css";
import { AdminContext } from "../../contextApi/AdminContextApi";
import { AppContext } from "../../contextApi/AppContextApi";
import StatusDot from "../Custome Components/StatusDot";
import SwitchBtn from "../Custome Components/SwitchBtn";

export default function CreateAdminComponent() {
  const {
    handelgetAllAdmins,
    admins,
    handelCreateNewAdmin,
    handelUpdateAdminStatus,
  } = useContext(AdminContext);
  const { btnLoading, setbtnLoading } = useContext(AppContext);

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
  }, [btnLoading]);

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

  const handelSwitch = async (requestData, token) => {
    try {
      setbtnLoading(true);
      const result = await handelUpdateAdminStatus(requestData, token);
      if (result.data.status === "Success") {
        setbtnLoading(false);
        toast.success(result.data.message);
      } else if (result.data.status === "Error") {
        setbtnLoading(false);
        toast.error(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.CreateAdminComponent_mainContainer}>
        <Toaster position="top-right" />
        <div className={styles.CreateAdminComponent_TitleBox}>
          Add New Admin
        </div>

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
        {/* Table container start */}
        <div className={styles.table_container}>
          <div className={styles.table_header}>
            <div className={styles.Serioul_Number}>S No</div>
            <div className={styles.Craeted_date}>Craeted Date</div>
            <div className={styles.admin_Name}>Name</div>
            <div className={styles.user_name}>User Name</div>
            <div className={styles.status}>Status</div>
            <div className={styles.action}>Delete</div>
          </div>
          <div className={styles.table_body}>
            {admins?.map((el, i) => {
              return (
                <div className={styles.table_row} key={el._id}>
                  <div className={styles.Serioul_Number}>{i + 1}</div>
                  <div className={styles.Craeted_date}>20-11-2023</div>
                  <div className={styles.admin_Name}>{el.name}</div>
                  <div className={styles.user_name}>{el.userName}</div>
                  <div className={styles.status}>
                    {/* <StatusDot adminStatus={el.userStatus} /> */}
                    <SwitchBtn
                      btnSatus={el.userStatus}
                      handelAction={handelSwitch}
                      dataId={el._id}
                    />
                  </div>
                  <div className={styles.action}>Delete</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Table container End */}
      </div>
    </>
  );
}
