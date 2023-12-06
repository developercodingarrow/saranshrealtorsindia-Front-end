import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import AdminContdentUI from "./AdminContdentUI";
import styles from "./css/addcity.module.css";
import DynamicTable from "../../../utilsComponents/Table/DynimicTable";
import ModelBox from "../../../utilsComponents/model/ModelBox";
import { AppContext } from "../../../contextApi/AppContextApi";
import { LocationContext } from "../../../contextApi/LocationContextApi";

export default function AddLocation() {
  const {
    btnLoading,
    setbtnLoading,
    setmodelBox,
    handelOpenModelBox,
    modelBox,
  } = useContext(AppContext);

  const {
    allLocation,
    setallLocation,
    handelGetAllLocation,
    handelAddLocation,
    loadingLocation,
    setloadingLocation,
    handelDelectLocation,
  } = useContext(LocationContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm({
    mode: "all", // Use "onChange" mode for real-time validation as the user types
  });

  const handelNewLocation = async (formdata) => {
    try {
      setloadingLocation(true);
      const result = await handelAddLocation(formdata);

      if (result.data.status === "Success") {
        setloadingLocation(false);
        toast.success(result.data.message);
      } else if (result.data.status === "error") {
        setloadingLocation(false);
        toast.error("somting wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Configuration object for table columns role
  const tableColumns = [
    { label: "S No", key: "name", component: "number" },
    { label: "Name", key: "locationName", component: "text" },
    { label: "DELETE", key: "id", component: "delete" },
    // Add more columns as needed
    // ... repeat additional columns
  ];

  const handelbtnAction = async (id) => {
    try {
      setloadingLocation(true);
      const result = await handelDelectLocation(id);
      if (result.data.status === "Success") {
        toast.success(result.data.message);
        setmodelBox(false);
        setloadingLocation(false);
      } else if (result.data.status === "Error") {
        toast.error(result.data.message);
        setmodelBox(false);
        setloadingLocation(false);
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
        <AdminContdentUI pageTitle={"ADD NEW CITY"}>
          <div className={styles.form_container}>
            <div className={styles.form_container}>
              <form onSubmit={handleSubmit(handelNewLocation)}>
                <div className={styles.form_inner_Container}>
                  <div className={styles.form_inputox}>
                    <input
                      className={styles.inputStyle}
                      placeholder="Enter Location Name "
                      name="locationName"
                      {...register("locationName", {
                        required: true,
                      })}
                    />
                  </div>

                  <div>
                    <button type="submit" className={styles.btn}>
                      {false ? "Loading.." : "ADD LOcation"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.table_container}>
            <DynamicTable
              tableData={allLocation}
              tableColumns={tableColumns}
              handelbtnAction={handelOpenModelBox}
            />
          </div>
        </AdminContdentUI>
      </div>
    </>
  );
}
