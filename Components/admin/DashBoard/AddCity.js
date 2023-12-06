import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import AdminContdentUI from "./AdminContdentUI";
import styles from "./css/addcity.module.css";
import DynamicTable from "../../../utilsComponents/Table/DynimicTable";
import ModelBox from "../../../utilsComponents/model/ModelBox";
import { AppContext } from "../../../contextApi/AppContextApi";
import { CityContext } from "../../../contextApi/CityContextApi";

export default function AddCity() {
  const {
    btnLoading,
    setbtnLoading,
    setmodelBox,
    handelOpenModelBox,
    modelBox,
  } = useContext(AppContext);

  const { allCties, handelAddCity, loadingcity, setloadingcity } =
    useContext(CityContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm({
    mode: "all", // Use "onChange" mode for real-time validation as the user types
  });

  const handelNewCity = async (formdata) => {
    try {
      setloadingcity(true);
      const result = await handelAddCity(formdata);

      if (result.data.status === "Success") {
        setloadingcity(false);
        toast.success(result.data.message);
      } else if (result.data.status === "error") {
        setloadingcity(false);
        toast.error("somting wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Configuration object for table columns role
  const tableColumns = [
    { label: "S No", key: "name", component: "number" },
    { label: "Name", key: "cityName", component: "text" },
    { label: "DELETE", key: "id", component: "delete" },
    // Add more columns as needed
    // ... repeat additional columns
  ];

  const handelbtnAction = () => {
    console.log("yes");
  };
  return (
    <>
      <div>
        <ModelBox
          actionHandel={handelbtnAction}
          ModelMesg="Are you sure to delect this Project if yes then Click on Yes Otherwise No"
        />
        <Toaster position="top-right" />
        <AdminContdentUI pageTitle={"ADD NEW CITY"}>
          <div className={styles.form_container}>
            <div className={styles.form_container}>
              <form onSubmit={handleSubmit(handelNewCity)}>
                <div className={styles.form_inner_Container}>
                  <div className={styles.form_inputox}>
                    <input
                      className={styles.inputStyle}
                      placeholder="Enter city Name "
                      name="cityName"
                      {...register("cityName", {
                        required: true,
                      })}
                    />
                  </div>

                  <div>
                    <button type="submit" className={styles.btn}>
                      {false ? "Loading.." : "ADD CITY"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.table_container}>
            <DynamicTable
              tableData={allCties}
              tableColumns={tableColumns}
              handelbtnAction={handelOpenModelBox}
            />
          </div>
        </AdminContdentUI>
      </div>
    </>
  );
}
