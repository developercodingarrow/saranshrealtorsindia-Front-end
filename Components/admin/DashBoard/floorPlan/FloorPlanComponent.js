import { useEffect, useState } from "react";
import Image from "next/image";
import AdminContdentUI from "../AdminContdentUI";
import styles from "./css/floorplan.module.css";
export default function FloorPlanComponent() {
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);

    if (selectedImages.length + images.length > 4) {
      alert("You can upload maximum 4 images.");
      return;
    }

    setImages([...images, ...selectedImages]);

    const previews = selectedImages.map((image) => URL.createObjectURL(image));
    setImagePreviews([...imagePreviews, ...previews]);
  };

  const handleUpdateImages = () => {
    // Here, you'd typically send `images` to your API
    // For example, you can use fetch or an API library like axios
    console.log("Sending images to API:", images);

    // Clear uploaded images and previews after sending to the API
    setImages([]);
    setImagePreviews([]);
  };

  const handleRemoveImage = (index) => {
    const filteredImages = images.filter((_, i) => i !== index);
    const filteredPreviews = imagePreviews.filter((_, i) => i !== index);
    setImages(filteredImages);
    setImagePreviews(filteredPreviews);
  };

  return (
    <>
      <div>
        <AdminContdentUI pageTitle={"ADD FLOOR PLAN"}>
          <div className={styles.container}>
            <div className={styles.upload_btnBox}>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  multiple
                />
              </div>
              <div>
                <button
                  className={styles.updateBtn}
                  onClick={handleUpdateImages}
                >
                  Update
                </button>
              </div>
            </div>
            <div className={styles.uploader_ImageContainer}>
              <div>
                {imagePreviews.length > 0 && (
                  <div className={styles.preview}>
                    <div className={styles.imageList}>
                      {imagePreviews.map((preview, index) => (
                        <div key={index} className={styles.privew_ImageBox}>
                          <div className={styles.imageBox}>
                            {" "}
                            <Image
                              src={preview}
                              alt={`Image ${index + 1}`}
                              className={styles.imagePreview}
                              width={100}
                              height={100}
                            />{" "}
                          </div>
                          <div className={styles.remove_BtnBox}>
                            <button
                              className={styles.updateBtn}
                              onClick={() => handleRemoveImage(index)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </AdminContdentUI>
      </div>
    </>
  );
}
