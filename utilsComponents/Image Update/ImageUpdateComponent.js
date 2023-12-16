import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import styles from "./css/imgaeUpdateComponenet.module.css";
import Image from "next/image";
import sampleimage from "../../public/project-feature-images/MRG Primark.jpg";
import { ProjectContext } from "../../contextApi/ProjectContextApi";
import {
  FaArrowRightArrowLeft,
  IoCloudUpload,
  FaRegSave,
} from "../ApplicationIcon";

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
    laoding,
    setlaoding,
    coverImageUrl,
    coverImageText,
    handlePreviwCoverImageChange,
    selectedCoverIMage,
    handelupdateProjectCover,
  } = useContext(ProjectContext);
  // console.log(_id);

  useEffect(() => {
    handelGetSingleProject(_id);
  }, []);

  const handelTrigerUpdateIMage = async () => {
    try {
      setlaoding(true);
      const result = await handelupdateProjectThumblin(_id);
      console.log(result);
      toast.success("Image Updated");
      setlaoding(false);
    } catch (error) {
      console.log(error);
      setlaoding(false);
      toast.error("Somthing wrong");
    }
  };

  const handelTrigerUpdateCoverImage = async () => {
    try {
      setlaoding(true);
      const result = await handelupdateProjectCover(_id);
      console.log(result);
      toast.success("Cover Image Updated");
      setlaoding(false);
    } catch (error) {
      console.log(error);
      setlaoding(false);
      toast.error("Somthing wrong");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
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
          <div className={styles.iconBox}>
            <FaArrowRightArrowLeft />
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
              <label className={styles.uploadButton}>
                <input
                  type="file"
                  className={styles.fileInput}
                  onChange={handlePreviwImageChange}
                />
                <IoCloudUpload className={styles.uploadIcon} /> Upload
              </label>
            </div>
            <div className={styles.actionBox}>
              <button
                onClick={handelTrigerUpdateIMage}
                className={styles.Image_saveBtn}
              >
                SAVE{" "}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.thumblin_container}>
          <div className={styles.image_Container}>
            <div className={styles.imageBox_titleBox}>
              <h4>Current Image</h4>
            </div>
            <div className={styles.image_Box}>
              <Image
                src={`/project-cover-image/${coverImageUrl}`}
                alt="sample-image"
                width={250}
                height={250}
                className={styles.image_Style}
              />
            </div>
          </div>
          <div className={styles.iconBox}>
            <FaArrowRightArrowLeft />
          </div>
          <div className={styles.image_PreviewContainer}>
            <div className={styles.imageBox_titleBox}>
              <h4>Image Preview</h4>
            </div>
            <div className={styles.image_previewBox}>
              {selectedCoverIMage ? (
                <div>
                  <Image
                    src={selectedCoverIMage}
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
              <label className={styles.uploadButton}>
                <input
                  type="file"
                  className={styles.fileInput}
                  onChange={handlePreviwCoverImageChange}
                />
                <IoCloudUpload className={styles.uploadIcon} /> Upload
              </label>
            </div>
            <div className={styles.actionBox}>
              <button
                onClick={handelTrigerUpdateCoverImage}
                className={styles.Image_saveBtn}
              >
                SAVE{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
