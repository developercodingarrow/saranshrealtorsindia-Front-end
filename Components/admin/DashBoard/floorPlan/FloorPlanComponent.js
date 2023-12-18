import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import AdminContdentUI from "../AdminContdentUI";
import styles from "./css/floorplan.module.css";
import { ProjectContext } from "../../../../contextApi/ProjectContextApi";
import toast, { Toaster } from "react-hot-toast";
import sampleImage from "../../../../public/Floor-Plan/floor-plan-1.png";
export default function FloorPlanComponent() {
  const router = useRouter();
  const { _id } = router.query;
  const {
    floorImages,
    setfloorImages,
    handelUpdateFloorPlan,
    handelgetFloorPlanImages,
    projectFloorPlanImages,
    handelDeleteProjectFloorImage,
  } = useContext(ProjectContext);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    handelgetFloorPlanImages(_id);
  }, [_id, loading]);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);

    if (selectedImages.length + floorImages.length > 4) {
      alert("You can upload maximum 4 images.");
      return;
    }

    setfloorImages([...floorImages, ...selectedImages]);

    const previews = selectedImages.map((image) => URL.createObjectURL(image));
    setImagePreviews([...imagePreviews, ...previews]);
  };

  const handleUpdateImages = async () => {
    try {
      setloading(true);
      const result = await handelUpdateFloorPlan(_id);
      // console.log("API Response:", result.data.message);
      console.log(result);
      if (result.data.status === "Success") {
        toast.success(result.data.message);
        setfloorImages([]);
        setImagePreviews([]);
        setloading(false);
      }
    } catch (error) {
      console.error("Error updating floor plan images:", error);
      setloading(false);
    }
  };

  const handleRemoveImage = (index) => {
    const filteredImages = floorImages.filter((_, i) => i !== index);
    const filteredPreviews = imagePreviews.filter((_, i) => i !== index);
    setfloorImages(filteredImages);
    setImagePreviews(filteredPreviews);
  };

  const handelDeleteImage = async (imageId) => {
    try {
      setloading(true);
      const result = await handelDeleteProjectFloorImage(imageId, _id);
      console.log(result);
      setloading(false);
      toast.success(result.data.message);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  return (
    <>
      <div>
        <Toaster />
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
              <div className={styles.image_PrivewBox}>
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
              <div className={styles.floor_planImages}>
                {projectFloorPlanImages && projectFloorPlanImages.length > 0 ? (
                  <>
                    {projectFloorPlanImages.map((el, i) => {
                      return (
                        <div className={styles.floorPlan_listBox} key={i}>
                          <div className={styles.floorimage_Box}>
                            <Image
                              src={`/Floor-Plan/${el.url}`}
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className={styles.action_buttonBox}>
                            <button
                              className={styles.updateBtn}
                              onClick={() => handelDeleteImage(el._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <div className={styles.Nofloor_planInage}>
                    <p>There is no Floor plan image</p>
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
