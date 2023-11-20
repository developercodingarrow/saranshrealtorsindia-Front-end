import React, { useContext, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import styles from "./css/adddeveloper.module.css";
import { DeveloperContext } from "../../contextApi/DeveloperContextApi";
import { AppContext } from "../../contextApi/AppContextApi";

export default function AddDeveloperComonent() {
  const {
    allDeveloper,
    handelGetAllDeveloper,
    handelAddDeveloper,
    handelDeleteDeveloper,
  } = useContext(DeveloperContext);
  const { btnLoading, setbtnLoading } = useContext(AppContext);

  useEffect(() => {
    handelGetAllDeveloper();
  }, [btnLoading]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm({
    mode: "all", // Use "onChange" mode for real-time validation as the user types
  });

  const handelNewDeveloper = async (formdata) => {
    try {
      setbtnLoading(true);
      const result = await handelAddDeveloper(formdata);
      if (result.data.status === "Success") {
        toast.success(result.data.message);
        setbtnLoading(false);
      } else if (result.data.status === "error") {
        toast.error("somting wrong");
        setbtnLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDeveloper = async (id) => {
    const data = { _id: id };
    try {
      setbtnLoading(true);
      const result = await handelDeleteDeveloper(data);
      console.log(result);
      if (result.data.status === "Success") {
        toast.success(result.data.message);
        setbtnLoading(false);
      } else if (result.data.status === "error") {
        toast.error("somting wrong");
        setbtnLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.AddDeveloperComonent_mainContainer}>
        <Toaster position="top-right" />
        {/* Page Title Start */}
        <div className={styles.AddDeveloperComonent_TitleBox}>
          Add New Developer
        </div>
        {/* Page Title End */}

        {/* Add Form Box start */}
        <form onSubmit={handleSubmit(handelNewDeveloper)}>
          <div className={styles.AddDeveloperComonent_FormBox}>
            <div className={styles.input_side}>
              {/* <div>Developer Name</div> */}
              <div>
                <input
                  type="text"
                  placeholder="Developer Name"
                  className={styles.inputStyle}
                  name="DeveloperName"
                  {...register("DeveloperName", {
                    required: true,
                  })}
                />
                {/* {errors.DeveloperName && <p>{"Name Is require"}</p>} */}
              </div>
            </div>
            <div className={styles.btn_side}>
              <button type="submit" className={styles.btn}>
                {btnLoading ? "Loading.." : "Add"}
              </button>
            </div>
          </div>
        </form>
        {/* Add Form Box End */}

        {/* Table List start */}
        <div className={styles.table_container}>
          <div className={styles.table_header}>
            <div className={styles.Serioul_Number}>S.No</div>
            <div className={styles.developer_nameBox}>Developer Name</div>
            <div className={styles.action_Box}>DELETE</div>
          </div>
          <div className={styles.table_body}>
            {allDeveloper.map((el, i) => {
              return (
                <div className={styles.table_row} key={el._id}>
                  <div className={styles.Serioul_Number}>S.No</div>
                  <div className={styles.developer_nameBox}>
                    {el.DeveloperName}
                  </div>
                  <div className={styles.action_Box}>
                    <button
                      type="submit"
                      className={styles.btn}
                      id={el._id}
                      onClick={() => deleteDeveloper(el._id)}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Table list End */}
      </div>
    </>
  );
}
