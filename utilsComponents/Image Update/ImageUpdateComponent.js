import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./css/imgaeUpdateComponenet.module.css";
import Image from "next/image";
import sampleimage from "../../public/project-feature-images/MRG Primark.jpg";
import { ProjectContext } from "../../contextApi/ProjectContextApi";

export default function ImageUpdateComponent() {
  const router = useRouter();
  const { _id } = router.query;
  const {
    handelGetSingleProject,
    imageUrl,
    imageAltText,
    handlePreviwImageChange,
    selectedImage,
    handelupdateProjectThumblin,
  } = useContext(ProjectContext);
  // console.log(_id);

  useEffect(() => {
    handelGetSingleProject(_id);
  }, []);

  const handelTrigerUpdateIMage = async () => {
    try {
      const result = await handelupdateProjectThumblin(_id);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.ImageUpdateComponent_container}>
        <div className={styles.thumblin_container}>
          <div className={styles.image_Container}>
            <div className={styles.imageBox_titleBox}>
              <h4>Current Image</h4>
            </div>
            <div className={styles.image_Box}>
              <Image
                src={`/project-feature-images/${imageUrl}`}
                alt="sample-image"
                width={250}
                height={250}
                className={styles.image_Style}
              />
            </div>
          </div>
          <div className={styles.image_PreviewContainer}>
            <div className={styles.imageBox_titleBox}>
              <h4>Image Preview</h4>
            </div>
            <div className={styles.image_previewBox}>
              {selectedImage ? (
                <div>
                  <Image
                    src={selectedImage}
                    alt="sample-image"
                    width={250}
                    height={250}
                  />
                </div>
              ) : (
                <div className={styles.image_previewBox}>
                  <p>See Image </p>
                </div>
              )}
            </div>
          </div>
          <div className={styles.image_actionBox}>
            <div className={styles.actionBox}>
              <input type="file" onChange={handlePreviwImageChange} />
            </div>
            <div className={styles.actionBox}>
              <button onClick={handelTrigerUpdateIMage}>Upadte </button>
            </div>
          </div>
        </div>

        <div className={styles.Cover_container}>
          <div className={styles.image_Container}>
            <Image src={sampleimage} alt="sample-image" width={250} />
          </div>
          <div className={styles.image_actionBox}>
            <div className={styles.actionBox}>Upload</div>
            <div className={styles.actionBox}>save</div>
          </div>
        </div>
      </div>
    </>
  );
}
