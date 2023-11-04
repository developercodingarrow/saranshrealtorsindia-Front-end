import React, { useContext } from "react";
import { getLoginCookies } from "../../Actions/authAction";
import style from "../../styles/createProjectForm.module.css";
import { createProjectFiled } from "../../jsonData/FormInput_data";
import CreateProjectFormInput from "./CreateProjectFormInput";
import { useForm, Controller } from "react-hook-form";
import { ProjectContext } from "../../contextApi/ProjectContextApi";
import Button from "../Button";

export default function CreateProjectForm() {
  const token = getLoginCookies();
  const { handleImageChange, createProject } = useContext(ProjectContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm({
    mode: "all", // Use "onChange" mode for real-time validation as the user types
  });

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
      <div>
        <div className={style.image_inputContainer}>
          <div className={style.thumbileBox}>
            <div className={style.image_uploadTitle}>
              <label>THUMBLIN IMAGE</label>
            </div>
            <div>
              <input
                type="file"
                onChange={handleImageChange}
                name="ProjectThumblin"
              />
            </div>
          </div>

          <div className={style.thumbileBox}>
            <div className={style.image_uploadTitle}>
              <label>Cover Image</label>
            </div>
            <div>
              <input
                type="file"
                onChange={handleImageChange}
                name="ProjectThumblin"
              />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(handelProjectsubmit)}>
          <div className={style.static_form_filedContiner}>
            {/* Project Title start */}
            <div className={style.Project_titleBox}>
              <div className={style.project_textInputLable}>
                <label>Project Name</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Project Name"
                  className={style.project_TitletextInput}
                  name="projectName"
                  {...register("projectName", {
                    required: true,
                  })}
                />
                {errors.projectName && (
                  <p className={style.error}>{"Title Is require"}</p>
                )}
              </div>
            </div>
            {/* Project Title End */}
            {/* Project radio start */}
            <div className={style.form_radioBox}>
              <div className={style.form_radio_TitleBox}>
                <label>Project Type</label>
              </div>
              <div className={style.radioBox}>
                <div className={style.radio_optionBox}>
                  <input
                    type="radio"
                    id="commercial"
                    name="ProjectType2"
                    value="commercial"
                    {...register("ProjectType2")}
                  />
                  <label for="commercial">commercial</label>
                </div>

                <div className={style.radio_optionBox}>
                  <input
                    type="radio"
                    id="Residential"
                    name="ProjectType2"
                    value="Residential"
                    {...register("ProjectType2")}
                  />
                  <label for="commercial">Residential</label>
                </div>
              </div>
            </div>
            {/* Project radio End */}
            {/* Project Developer start */}
            <div className={style.form_optionBox}>
              <div className={style.form_optionLableBox}>
                <label for="developer">Select Developer:</label>
              </div>
              <div className={style.option_dropDownBox}>
                <select
                  id="developer"
                  name="developer"
                  className={style.option_select}
                  {...register("developer")}
                >
                  <option value="Godrej">Godrej</option>
                  <option value="sun City">Sun City</option>
                  <option value="GLS">GLS</option>
                  <option value="signature">Signature</option>
                </select>
              </div>
            </div>
            {/* Project Developer End  */}
          </div>
          <div className={style.dynimic_form_Filedcontainer}>
            {createProjectFiled.map((input) => {
              return (
                <div className={style.project_formBox}>
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
                          labelClassName={style.project_textInputLable} // CSS class for the label
                          inputClassName={style.project_textInput}
                          boxClassName={style.inputBox}
                          {...field}
                        />
                        {errors[input.name] && (
                          <p className={style.error}>
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

          <div>
            <Button className={style.btn} type="submit" disabled={!isValid}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
