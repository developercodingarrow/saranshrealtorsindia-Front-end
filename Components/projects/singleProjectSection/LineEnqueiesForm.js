import React, { useContext } from "react";
import styles from "../css/singleprojectwrapper.module.css";
import { EnqureContext } from "../../../contextApi/EnquireyContextApi";
import { useForm, Controller } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function LineEnqueiesForm() {
  const { handelNewEnquire, isLoading, setisLoading } =
    useContext(EnqureContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm({
    mode: "all", // Use "onChange" mode for real-time validation as the user types
  });

  const handleFormSubmit = async (formdata) => {
    try {
      setisLoading(true);
      const result = await handelNewEnquire(formdata);
      console.log(result);
      if (result.data.status === "Success") {
        toast.success(result.data.message);
        setisLoading(false);
      } else if (result.data.status === "Error") {
        toast.error(result.data.message);
        setisLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.form_container}>
      <Toaster position="top-right" />
      <form
        className={styles.form_Box}
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className={styles.input_box}>
          <input
            type="text"
            placeholder="Enter Your Name"
            className={styles.inputStyle}
            name="name"
            {...register("name", {
              required: true,
            })}
          />
        </div>
        <div className={styles.input_box}>
          <input
            type="text"
            placeholder="Enter Your Number"
            className={styles.inputStyle}
            name="number"
            {...register("number", {
              required: true,
            })}
          />
        </div>
        <div className={styles.input_box}>
          <input
            type="text"
            placeholder="Enter Your Email"
            className={styles.inputStyle}
            name="email"
            {...register("email", {
              required: true,
            })}
          />
        </div>

        <div className={styles.btn_box}>
          <button className={styles.btn}> Submit</button>
        </div>
      </form>
    </div>
  );
}
