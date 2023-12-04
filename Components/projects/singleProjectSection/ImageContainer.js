import React, { useContext } from "react";
import styles from "../css/singleprojectwrapper.module.css";
import Image from "next/image";
import sampleImage from "../../../public/project-feature-images/MRG Primark.jpg";
import { ProjectContext } from "../../../contextApi/ProjectContextApi";

export default function ImageContainer() {
  const { singleProject } = useContext(ProjectContext);

  if (
    !singleProject ||
    !singleProject.ProjectThumblin ||
    singleProject.ProjectThumblin.length === 0
  ) {
    // Data is not available yet, you can render a placeholder or loading state here
    return <div>Loading...</div>;
  }
  const coverImage = singleProject.ProjectThumblin[0]?.url;

  return (
    <div className={styles.image_container}>
      {coverImage && (
        <Image
          src={`/project-feature-images/${coverImage}`}
          alt="blog-image"
          width={500}
          height={500}
          className={styles.imageStyle}
        />
      )}
    </div>
  );
}
