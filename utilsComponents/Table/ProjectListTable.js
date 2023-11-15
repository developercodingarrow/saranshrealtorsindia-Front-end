import React, { useContext, useEffect, useState } from "react";
import CheckboxCustome from "../Custome Components/CheckboxCustome";
import Button from "../Custome Components/Button";
import styles from "./css/projectListtable.module.css";
import Image from "next/image";
import sampleImage from "../../public/project-feature-images/MRG Primark.jpg";
import SwitchBtn from "../Custome Components/SwitchBtn";
import ButtonElements from "../Custome Components/ButtonElement";
import { ProjectContext } from "../../contextApi/ProjectContextApi";
import { getLoginCookies } from "../../Actions/authAction";
import { RadioButton } from "../Custome Components/ReadioElements";

export default function ProjectListTable() {
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    getAllProjectHandel,
    projects,
    handelToggleProjectstatus,
    handelToggleProjectFeature,
    handelProjectStatusTyple,
  } = useContext(ProjectContext);

  console.log(projects);

  const handleButtonClick = () => {
    // Handle button click event here
    alert("Button clicked!");
  };

  useEffect(() => {
    getAllProjectHandel();
  }, []);

  // Radio Button Select handel Chnage
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  // Radio Optios
  const options = ["Upcoming Project", "Under Construction", "Ready to Move"];

  return (
    <div className={styles.table_container}>
      <div className={styles.table_Header}>
        <div className={styles.Table_serioulNumber}>
          <span>
            <input type="checkbox" />
          </span>
          <span>S No</span>
        </div>
        <div className={styles.table_imageBox}>Image Box</div>
        <div className={styles.table_detailsBox}>Details</div>
        <div className={styles.table_activeStatusBox}>Avtive/inactive</div>
        <div className={styles.table_ProjectStatusBox}> project Status </div>
        <div className={styles.table_ActionBox}>Avtions</div>
      </div>
      {projects.map((project, i) => {
        return (
          <div className={styles.table_rowContainer} key={project._id}>
            <div className={styles.row_SerioulNumber}>
              <span>
                <input type="checkbox" value={project._id} />
              </span>
              <span>{i + 1}</span>
            </div>
            <div className={styles.row_imageBox}>
              <div>
                <Image
                  src={`/project-feature-images/${project.ProjectThumblin[0].url}`}
                  width={100}
                  height={100}
                  alt="sample-image"
                />
              </div>
              <div>
                <button>Action</button>
              </div>
            </div>
            <div className={styles.row_detailsBox}>
              <p>{project.projectName} </p>
              <div>
                <p>2 bhk , 3bhk</p>
              </div>
              <div className={styles.project_location}>
                <span>{project.ProjectSector}</span>
                <span>{project.ProjectCity}</span>
              </div>
              <div className={styles.project_reraNumberBox}>
                <span>RERA NO</span>
                <span>24 of 2018</span>
              </div>
            </div>
            <div className={styles.row_activeStatusBox}>
              <div className={styles.actionBox}>
                <div className={styles.action_Name}>Project Status</div>
                <div className={styles.switch_btnBox}>
                  <SwitchBtn
                    btnSatus={project.status}
                    handelAction={handelToggleProjectstatus}
                    dataId={project._id}
                  />
                </div>
              </div>
              <div className={styles.actionBox}>
                <div className={styles.action_Name}>Feature</div>
                <div className={styles.switch_btnBox}>
                  <SwitchBtn
                    btnSatus={project.Featured}
                    dataId={project._id}
                    handelAction={handelToggleProjectFeature}
                  />
                </div>
              </div>

              <div className={styles.actionBox}>
                <div className={styles.action_Name}>Upcoming</div>
                <div className={styles.switch_btnBox}>
                  <SwitchBtn btnSatus={project.upcomingProject} />
                </div>
              </div>
            </div>

            <div className={styles.row_projectStatusBox}>
              <RadioButton
                customRadio={"customRadio"}
                customRadioChecked={"customRadioChecked"}
                customRadioButtonContainer={"customRadioButtonContainer"}
                custome_radiolable={"custome_radiolable"}
                cheked_ladiolable={"custome_radiolableCheked"}
                options={options}
                handleOptionChange={handelProjectStatusTyple}
                selected={project.ProjectStatus} // Set the selected value
                projectId={project._id}
              />
            </div>

            <div className={styles.row_ActionBox}>
              <div className={styles.action_btnBox}>
                <ButtonElements
                  label="DELETE"
                  onClick={handleButtonClick}
                  btnDesign={"DeleteButton"}
                  id={project._id}
                />
              </div>
              <div className={styles.action_btnBox}>
                <ButtonElements
                  label="UPDATE "
                  onClick={handleButtonClick}
                  btnDesign={"EditButton"}
                  id={project._id}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
