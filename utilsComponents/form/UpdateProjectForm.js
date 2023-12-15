import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from "./css/upadteprojectForm.module.css";
import { useForm, Controller } from "react-hook-form";
import { createProjectFiled } from "../../jsonData/FormInput_data";
import CreateProjectFormInput from "./CreateProjectFormInput";
import { ProjectContext } from "../../contextApi/ProjectContextApi";
import { CityContext } from "../../contextApi/CityContextApi";
import { LocationContext } from "../../contextApi/LocationContextApi";
import { DeveloperContext } from "../../contextApi/DeveloperContextApi";
export default function UpdateProjectForm() {
  const inputRef = useRef(null);
  const { allCties } = useContext(CityContext);
  const { allLocation } = useContext(LocationContext);
  const { allDeveloper, handelGetAllDeveloper } = useContext(DeveloperContext);
  const { handelUpdateSingleProject, singleProjectData } =
    useContext(ProjectContext);
  const router = useRouter();
  const { _id } = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    setValue,
    setFocus,
  } = useForm({
    mode: "all",
  });

  useEffect(() => {
    handelUpdateSingleProject(_id);
  }, [_id]);

  useEffect(() => {
    if (singleProjectData) {
      Object.keys(singleProjectData).forEach((key) => {
        setValue(key, singleProjectData[key]);
      });
    }
  }, [setValue]);

  const onSubmit = (data) => {
    // Handle form submission with updated data
    console.log(data); // Updated form data
    alert(data);
  };

  return (
    <>
      <div className={styles.AddNewProjectForm_mainContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    defaultValue={singleProjectData?.projectName || ""}
                    {...register("projectName")}
                  />
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
                        className={styles.radioInput}
                        name="ProjectType2"
                        {...register("ProjectType2")}
                      />
                      <label htmlFor="commercial" className={styles.radioLabel}>
                        Commercial
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="residential"
                        name="ProjectType2"
                        className={styles.radioInput}
                        value="Residential"
                        {...register("ProjectType2")}
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
                <select
                  className={styles.selectBar}
                  name="developer"
                  defaultValue={
                    singleProjectData ? singleProjectData.developer : ""
                  }
                  {...register("developer")}
                >
                  {allDeveloper.map((el, i) => {
                    return (
                      <option key={el._id} value={el.DeveloperName}>
                        {el.DeveloperName}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className={styles.city_locationBox}>
              <div className={styles.select_box}>
                <label className={styles.select_lable}>SELECT CITY</label>
                <select
                  className={styles.selectBar}
                  name="cityName"
                  {...register("cityName")}
                  defaultValue={
                    singleProjectData ? singleProjectData.cityName : ""
                  }
                >
                  {allCties.map((el, i) => {
                    return (
                      <option key={el._id} value={el.cityName}>
                        {el.cityName}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className={styles.select_box}>
                <label className={styles.select_lable}>SELECT LOCATION</label>
                <select
                  className={styles.selectBar}
                  name="locationName"
                  {...register("locationName")}
                  defaultValue={
                    singleProjectData ? singleProjectData.locationName : ""
                  }
                >
                  {allLocation.map((el, i) => {
                    return (
                      <option key={el._id} value={el.locationName}>
                        {el.locationName}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            {/* ratio select start */}
          </div>

          {/* Dynamic Form Filed Start */}
          <div className={styles.dynimc_filed_container}>
            <div className={styles.dynimic_filed_box}>
              <div className={styles.dynimic_inputContainer}>
                <input
                  type="text"
                  placeholder="Budget"
                  className={styles.input}
                  name="Budget"
                  defaultValue={
                    singleProjectData && singleProjectData.Budget
                      ? singleProjectData.Budget
                      : ""
                  }
                  {...register("Budget")}
                />
              </div>

              <div className={styles.dynimic_inputContainer}>
                <input
                  type="text"
                  placeholder="BasicPrice"
                  className={styles.input}
                  name="BasicPrice"
                  defaultValue={
                    singleProjectData && singleProjectData.BasicPrice
                      ? singleProjectData.BasicPrice
                      : ""
                  }
                  {...register("BasicPrice")}
                />
              </div>

              <div className={styles.dynimic_inputContainer}>
                <input
                  type="text"
                  placeholder="FlatSizeRange"
                  className={styles.input}
                  name="FlatSizeRange"
                  defaultValue={
                    singleProjectData && singleProjectData.FlatSizeRange
                      ? singleProjectData.FlatSizeRange
                      : ""
                  }
                  {...register("FlatSizeRange")}
                />
              </div>

              <div className={styles.dynimic_inputContainer}>
                <input
                  type="text"
                  placeholder="RERA No"
                  className={styles.input}
                  name="RERANo"
                  defaultValue={
                    singleProjectData && singleProjectData.RERANo
                      ? singleProjectData.RERANo
                      : ""
                  }
                  {...register("RERANo")}
                />
              </div>

              <div className={styles.dynimic_inputContainer}>
                <input
                  type="text"
                  placeholder="Unit Type"
                  className={styles.input}
                  name="UnitType"
                  defaultValue={
                    singleProjectData && singleProjectData.UnitType
                      ? singleProjectData.UnitType
                      : ""
                  }
                  {...register("UnitType")}
                />
              </div>

              <div className={styles.dynimic_inputContainer}>
                <input
                  type="text"
                  placeholder="address"
                  className={styles.input}
                  name="address"
                  defaultValue={
                    singleProjectData && singleProjectData.address
                      ? singleProjectData.address
                      : ""
                  }
                  {...register("address")}
                />
              </div>
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
                {...register("keywords")}
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
                {...register("sortDescreption")}
              />
            </div>
          </div>

          <div className={styles.button_Box}>
            <button
              className={styles.beautifulButton}
              type="submit"
              disabled={!isValid}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
