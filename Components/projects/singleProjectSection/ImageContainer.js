import React, { useContext } from "react";
import styles from "../css/singleprojectwrapper.module.css";
import Image from "next/image";
import sampleImage from "../../../public/project-feature-images/MRG Primark.jpg";
import { ProjectContext } from "../../../contextApi/ProjectContextApi";

export default function ImageContainer() {
  const { singleProject } = useContext(ProjectContext);
  const coverImage = singleProject.ProjectThumblin[0];
  return (
    <div className={styles.image_container}>
      {coverImage && (
        <Image
          src={`/project-feature-images/${coverImage.url}`}
          alt="blog-image"
          width={500}
          height={500}
          className={styles.imageStyle}
        />
      )}
    </div>
  );
}
