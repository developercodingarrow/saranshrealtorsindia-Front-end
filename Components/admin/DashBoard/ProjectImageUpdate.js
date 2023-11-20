import React from "react";
import ImageUpdateComponent from "../../../utilsComponents/Image Update/ImageUpdateComponent";
import styles from "../../../utilsComponents/Image Update/css/imgaeUpdateComponenet.module.css";

export default function ProjectImageUpdate() {
  return (
    <>
      <div className={styles.ProjectImageUpdate_mainContainer}>
        <div className={styles.ProjectImageUpdate_titleBox}>
          Update Project Image
        </div>
        <div className={styles.ProjectImageUpdate_componentContainer}>
          <ImageUpdateComponent />
        </div>
      </div>
    </>
  );
}
