import React, { useContext } from "react";
import styles from "./css/ModelBox.module.css";
import { AppContext } from "../../contextApi/AppContextApi";
import { getLoginCookies } from "../../Actions/authAction";
import Buttons from "../buttons/Buttons";

export default function ModelBox(props) {
  const token = getLoginCookies();
  const { modelBox, handelCloseModelBox, itemActionId } =
    useContext(AppContext);

  const { actionHandel, ModelMesg } = props;

  return (
    <>
      <div
        className={`${
          modelBox ? styles.ModelBox_mainContainer : styles.closeModelBox
        }`}
      >
        <div className={styles.model_innerBox}>
          <div className={styles.Model_ContentBox}>
            <div className={styles.Model_headingBox}>Confirm</div>
            <div className={styles.Model_msgBox}>
              <p>
                {ModelMesg} {itemActionId}
              </p>
            </div>

            <div className={styles.model_actionBox}>
              <Buttons
                text={"No"}
                buttonstyle={"smallbtn"}
                btnColor={"seconderyBtnColor"}
                btnSze={"smallbtn"}
                btnAction={handelCloseModelBox}
              />
              <Buttons
                text={"YES"}
                buttonstyle={"smallbtn"}
                btnColor={"primaryBtnColor"}
                btnSze={"smallbtn"}
                btnAction={() => actionHandel(itemActionId)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
