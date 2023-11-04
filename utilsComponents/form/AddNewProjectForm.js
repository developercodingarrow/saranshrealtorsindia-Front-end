import React, { useState, useRef, useContext } from "react";
import style from "../../styles/super-admin/addNewProjectform.module.css";
import { getLoginCookies } from "../../Actions/authAction";
import { useForm, Controller } from "react-hook-form";
import { createProjectFiled } from "../../jsonData/FormInput_data";
import CreateProjectFormInput from "./CreateProjectFormInput";
import { ProjectContext } from "../../contextApi/ProjectContextApi";

export default function AddNewProjectForm() {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");
  const token = getLoginCookies();
  const { handleImageChange, createProject, setprojectThumblin } =
    useContext(ProjectContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm({
    mode: "all", // Use "onChange" mode for real-time validation as the user types
  });

  const handleFileInputChange = () => {
    // Handle the file input change event here
    const selectedFile = fileInputRef.current.files[0];
    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
      setprojectThumblin(selectedFile);
    } else {
      setSelectedFileName("No file chosen");
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const handelProjectsubmit = async (formdata) => {
    try {
      const result = await createProject(formdata, token);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={style.AddNewProjectForm_mainContainer}>
        <form onSubmit={handleSubmit(handelProjectsubmit)}>
          <div className={style.image_uploadSection}>
            <div>
              <div className={style.customFileInput}>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileInputChange}
                  className={style.hiddenFileInput}
                />
                <button className={style.customButton} onClick={openFileInput}>
                  Upload Thumblin
                </button>
                <span className={style.fileName}>{selectedFileName}</span>
              </div>
            </div>

            {/* upload Cover Page start */}
            <div>
              <div className={style.customFileInput}>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileInputChange}
                  className={style.hiddenFileInput}
                />
                <button className={style.customButton} onClick={openFileInput}>
                  Upload Cover Page
                </button>
                <span className={style.fileName}>Not file chosen</span>
              </div>
            </div>
            {/* Upload Cover Page End */}
          </div>

          <div className={style.static_Container}>
            {/* Title Box start */}
            <div>
              <div className={style.box}>
                <div className={style.input_box}>
                  <label className={style.label}>Project Title</label>
                  <input
                    type="text"
                    className={style.input}
                    name="projectName"
                    {...register("projectName", {
                      required: true,
                    })}
                  />
                  {errors.projectName && (
                    <p className={style.errorMsg}>{"Title Is require"}</p>
                  )}
                </div>
              </div>
            </div>
            {/* Title Box End */}
            {/* ratio select start */}
            <div className={`${style.radio_selectBox}`}>
              <div className={style.radio_box}>
                <div className={style.radioButtonsContainer}>
                  <p className={style.radio_title}>PROJECT TYPE:</p>

                  <input
                    type="radio"
                    id="commercial"
                    name="projectType"
                    className={style.radioInput}
                  />
                  <label htmlFor="commercial" className={style.radioLabel}>
                    Commercial
                  </label>

                  <div>
                    <input
                      type="radio"
                      id="residential"
                      name="projectType"
                      className={style.radioInput}
                    />
                    <label htmlFor="residential" className={style.radioLabel}>
                      Residential
                    </label>
                  </div>
                </div>
              </div>
              <div className={style.select_box}>
                <label className={style.select_lable}>SELECT DEVELOPER</label>
                <select className={style.selectBar} {...register("developer")}>
                  <option>Godrej</option>
                  <option>GLS</option>
                  <option>DLF</option>
                  <option>Sun City</option>
                </select>
              </div>
            </div>
            {/* ratio select start */}
          </div>

          {/* Dynamic Form Filed Start */}
          <div className={style.dynimc_filed_container}>
            <div className={style.dynimic_filed_box}>
              {createProjectFiled.map((input) => {
                return (
                  <div className={style.dynimic_inputContainer}>
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
                            labelClassName={style.dynimic_lable} // CSS class for the label
                            inputClassName={style.dynimic_input}
                            boxClassName={style.dynimic_inputBox}
                            {...field}
                          />
                          {errors[input.name] && (
                            <p className={style.errorMsg}>
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
          <div className={style.seo_filed_Section}>
            <div className={style.keyword_box}>
              <label className={style.Seo_label}>Keywords</label>
              <textarea
                type="text"
                className={style.seo_keywords_input}
                name="keywords"
                {...register("keywords", {
                  required: true,
                })}
              />
              {errors.keywords && (
                <p className={style.errorMsg}>{"At Least 1 Keyword Require"}</p>
              )}
            </div>

            <div className={style.keyword_box}>
              <label className={style.Seo_label}>Descreption</label>
              <textarea
                type="text"
                className={style.seo_keywords_input}
                name="sortDescreption"
                {...register("sortDescreption", {
                  required: true,
                })}
              />
              {errors.sortDescreption && (
                <p className={style.errorMsg}>
                  {"Sort Descreption is Required"}
                </p>
              )}
            </div>
          </div>

          <div className={style.button_Box}>
            <button
              className={style.beautifulButton}
              type="submit"
              disabled={!isValid}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
