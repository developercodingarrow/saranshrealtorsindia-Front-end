import React, { useContext } from "react";
import styles from "../css/singleprojectwrapper.module.css";
import Image from "next/image";
import { ProjectContext } from "../../../contextApi/ProjectContextApi";

// const images = [floorplan1, floorplan2, floorplan3, floorplan4];
export default function FloorPlan() {
  const { singleProject } = useContext(ProjectContext);

  console.log(singleProject.floorPlanImages);
  // const images = singleProject.floorPlanImages;

  const images = singleProject.floorPlanImages;
  return (
    <div className={styles.FloorPlan_mainContainer}>
      {images && images.length > 0 && (
        <div className={styles.FloorPlan_headingBox}>
          Floor Plan - Hero Homes
        </div>
      )}

      <div className={styles.florPlan_imageContainer}>
        {images &&
          images.length > 0 &&
          images.map((el, i) => (
            <div className={styles.image_wrapper} key={i}>
              {/* Assuming each image object has 'url' and 'altText' properties */}
              <Image
                src={`/Floor-Plan/${el.url}`}
                alt={el.altText || "Floor Plan Image"}
                width={300}
                height={300}
                className={styles.floorPlan_imageStyle}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
