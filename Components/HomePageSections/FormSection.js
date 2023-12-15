import React, { useContext } from "react";
import styles from "./css/formsection.module.css";
import { useForm, Controller } from "react-hook-form";
import { EnqureContext } from "../../contextApi/EnquireyContextApi";
import toast, { Toaster } from "react-hot-toast";

export default function FormSection() {
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
      <div className={styles.FormSection_mainContainer}>
        <div className={styles.form_innerContainer}>
          <div className={styles.formSection_ContentPart}>
            <div className={styles.content_topBox}>
              <div className={styles.content_box}>
                <div className={styles.content_number}>01.</div>
                <div className={styles.content_title}>
                  Design Custom Leads Capture Forms
                </div>
                <div className={styles.content_sortDescreption}>
                  Keep track of your leads without having to pay for an external
                  CRM
                </div>
              </div>
              <div className={styles.content_box}>
                <div className={styles.content_number}>02.</div>
                <div className={styles.content_title}>
                  Design Custom Leads Capture Forms
                </div>
                <div className={styles.content_sortDescreption}>
                  Keep track of your leads without having to pay for an external
                  CRM
                </div>
              </div>
            </div>

            <div className={styles.content_topBox}>
              <div className={styles.content_box}>
                <div className={styles.content_number}>01.</div>
                <div className={styles.content_title}>
                  Design Custom Leads Capture Forms
                </div>
                <div className={styles.content_sortDescreption}>
                  Keep track of your leads without having to pay for an external
                  CRM
                </div>
              </div>
              <div className={styles.content_box}>
                <div className={styles.content_number}>02.</div>
                <div className={styles.content_title}>
                  Design Custom Leads Capture Forms
                </div>
                <div className={styles.content_sortDescreption}>
                  Keep track of your leads without having to pay for an external
                  CRM
                </div>
              </div>
            </div>
            <div className={styles.content_bottomBox}></div>
          </div>
          <div className={styles.formSection_formPart}>
            <div className={styles.form_wrapper}>
              <div className={styles.form_Title}>
                <h2 className={"section_title"}>Real Estate Inquiry Form </h2>{" "}
              </div>
              <div className={styles.form_descreption}>
                <p className="section_descreption">
                  Design custom lead capture forms that integrate with the
                  Houzez CRM
                </p>
              </div>
              <form
                className={styles.form_part}
                onSubmit={handleSubmit(handleFormSubmit)}
              >
                <div className={styles.input_box}>
                  <input
                    placeholder="First Name"
                    className={styles.input_style}
                    name="name"
                    {...register("name", {
                      required: true,
                    })}
                  />
                </div>

                {errors.name && (
                  <p className={styles.errorMsg}>{"Name Is required"}</p>
                )}

                <div className={styles.input_box}>
                  <input
                    placeholder="Number"
                    className={styles.input_style}
                    name="number"
                    {...register("number", {
                      required: true,
                    })}
                  />
                </div>

                {errors.number && (
                  <p className={styles.errorMsg}>{"Number Is required"}</p>
                )}

                <div className={styles.input_box}>
                  <input
                    placeholder="Email"
                    className={styles.input_style}
                    name="email"
                    {...register("email", {
                      required: true,
                    })}
                  />
                </div>

                {errors.email && (
                  <p className={styles.errorMsg}>{"Email Is required"}</p>
                )}
                <div className={styles.input_box}>
                  <textarea
                    placeholder="Message"
                    className={styles.textarea_style}
                    name="message"
                    {...register("message")}
                  />
                </div>

                <div className={styles.btn_Box}>
                  <button className={styles.btn_style}>SUBMIT</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// background-color: #00335A;
// opacity: 0.85;
// transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
