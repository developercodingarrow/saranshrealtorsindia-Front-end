import React from "react";
import { useRouter } from "next/router";
import styles from "./css/upadteprojectForm.module.css";
import { useForm, Controller } from "react-hook-form";
import { createProjectFiled } from "../../jsonData/FormInput_data";
import CreateProjectFormInput from "./CreateProjectFormInput";

export default function UpdateProjectForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm({
    mode: "all", // Use "onChange" mode for real-time validation as the user types
  });
  return (
    <>
      <div className={styles.AddNewProjectForm_mainContainer}>
        <form>
          <div className={styles.static_Container}>
            {/* Title Box start */}
            <div>
              <div className={styles.box}>
                <div className={styles.input_box}>
                  <label className={styles.label}>Project Title</label>
                  <input
                    type="text"
                    className={styles.input}
                    name="projectName"
                  />
                  {/* {errors.projectName && (
                    <p className={styles.errorMsg}>{"Title Is require"}</p>
                  )} */}
                </div>
              </div>
            </div>
            {/* Title Box End */}
            {/* ratio select start */}
            <div className={`${styles.radio_selectBox}`}>
              <div className={styles.radio_box}>
                <div className={styles.radioButtonsContainer}>
                  <p className={styles.radio_title}>PROJECT TYPE:</p>
                  <div className={styles.radio_btnBox}>
                    <div>
                      <input
                        type="radio"
                        id="commercial"
                        name="projectType"
                        className={styles.radioInput}
                      />
                      <label htmlFor="commercial" className={styles.radioLabel}>
                        Commercial
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="residential"
                        name="projectType"
                        className={styles.radioInput}
                      />
                      <label
                        htmlFor="residential"
                        className={styles.radioLabel}
                      >
                        Residential
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.select_box}>
                <label className={styles.select_lable}>SELECT DEVELOPER</label>
                <select className={styles.selectBar} name="developer">
                  {/* {allDeveloper.map((el, i) => {
                    return (
                      <option key={el._id} value={el.DeveloperName}>
                        {el.DeveloperName}
                      </option>
                    );
                  })} */}
                </select>
              </div>
            </div>

            <div className={styles.city_locationBox}>
              <div className={styles.select_box}>
                <label className={styles.select_lable}>SELECT CITY</label>
                <select
                  className={styles.selectBar}
                  name="cityName"
                  //   {...register("cityName")}
                >
                  {/* {allCties.map((el, i) => {
                    return (
                      <option key={el._id} value={el.cityName}>
                        {el.cityName}
                      </option>
                    );
                  })} */}
                </select>
              </div>

              <div className={styles.select_box}>
                <label className={styles.select_lable}>SELECT LOCATION</label>
                <select
                  className={styles.selectBar}
                  name="locationName"
                  //   {...register("locationName")}
                >
                  {/* {allLocation.map((el, i) => {
                    return (
                      <option key={el._id} value={el.locationName}>
                        {el.locationName}
                      </option>
                    );
                  })} */}
                </select>
              </div>
            </div>
            {/* ratio select start */}
          </div>

          {/* Dynamic Form Filed Start */}
          <div className={styles.dynimc_filed_container}>
            <div className={styles.dynimic_filed_box}>
              {createProjectFiled.map((input) => {
                return (
                  <div className={styles.dynimic_inputContainer}>
                    <Controller
                      name={input.name}
                      control={control}
                      defaultValue=""
                      rules={input.validation}
                      render={({ field }) => (
                        <>
                          <CreateProjectFormInput
                            key={input.id}
                            {...input}
                            labelClassName={styles.dynimic_lable} // CSS class for the label
                            inputClassName={styles.dynimic_input}
                            boxClassName={styles.dynimic_inputBox}
                            {...field}
                          />
                          {errors[input.name] && (
                            <p className={styles.errorMsg}>
                              {errors[input.name].message}
                            </p>
                          )}
                        </>
                      )}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* Dynimic Form Filed End */}

          {/* SEO Field Section */}
          <div className={styles.seo_filed_Section}>
            <div className={styles.keyword_box}>
              <label className={styles.Seo_label}>Keywords</label>
              <textarea
                type="text"
                className={styles.seo_keywords_input}
                name="keywords"
                {...register("keywords", {
                  required: true,
                })}
              />
              {errors.keywords && (
                <p className={styles.errorMsg}>
                  {"At Least 1 Keyword Require"}
                </p>
              )}
            </div>

            <div className={styles.keyword_box}>
              <label className={styles.Seo_label}>Descreption</label>
              <textarea
                type="text"
                className={styles.seo_keywords_input}
                name="sortDescreption"
                {...register("sortDescreption", {
                  required: true,
                })}
              />
              {errors.sortDescreption && (
                <p className={styles.errorMsg}>
                  {"Sort Descreption is Required"}
                </p>
              )}
            </div>
          </div>

          <div className={styles.button_Box}>
            <button
              className={styles.beautifulButton}
              type="submit"
              disabled={!isValid}
            >
              {false ? "Loading.." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
