import React, { useContext } from "react";
import styles from "./css/sideEnquire.module.css";
import { useForm, Controller } from "react-hook-form";
import { EnqureContext } from "../../contextApi/EnquireyContextApi";
import toast, { Toaster } from "react-hot-toast";

export default function SideEnquireForm() {
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
    <>
      <Toaster position="top-right" />
      <div className={styles.form_Container}>
        <div className={styles.form_heading}>
          <p>Enquirey Form</p>
        </div>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className={styles.input_Box}>
            <input
              type="text"
              placeholder="Name"
              className={styles.input_style}
              name="name"
              {...register("name", {
                required: true,
              })}
            />
          </div>

          <div className={styles.input_Box}>
            <input
              type="text"
              placeholder="Mobile Number"
              className={styles.input_style}
              name="number"
              {...register("number", {
                required: true,
              })}
            />
          </div>

          <div className={styles.input_Box}>
            <input
              type="text"
              placeholder="E-mail"
              className={styles.input_style}
              name="email"
              {...register("email", {
                required: true,
              })}
            />
          </div>

          <div className={styles.input_Box}>
            <textarea
              type="text"
              placeholder="Message"
              className={styles.input_style}
              name="message"
              {...register("message", {
                required: true,
              })}
            />
          </div>

          <div className={styles.input_Box}>
            <button type="submit" className={styles.btnStyle}>
              SEND
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
