import React, { useContext } from "react";
import styles from "./css/ModelBox.module.css";
import { AppContext } from "../../contextApi/AppContextApi";
import { getLoginCookies } from "../../Actions/authAction";

export default function ModelBox(props) {
  const token = getLoginCookies();
  const { modelBox, handelCloseModelBox, itemActionId } =
    useContext(AppContext);

  const { actionHandel } = props;

  return (
    <>
      <div
        className={`${
          modelBox ? styles.ModelBox_mainContainer : styles.closeModelBox
        }`}
      >
        <div className={styles.model_innerBox}>
          <div className={styles.Model_ContentBox}>
            <h4>Are You Sure to delete the Project</h4>
            <p>
              You are select to Delete this project {itemActionId} Project if
              you are sure to Delete project then click on yes otherwise click
              on no
            </p>
            <div className={styles.model_actionBox}>
              <button
                className={styles.Action_btnStyle}
                onClick={handelCloseModelBox}
              >
                No
              </button>
              <button
                className={styles.Action_btnStyle}
                onClick={() => actionHandel(itemActionId, token)}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
