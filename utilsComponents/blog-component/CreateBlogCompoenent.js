import React, { useContext, useRef, useState } from "react";
import styles from "./css/createBlog.module.css";
import dynamic from "next/dynamic"; // If using Next.js
import { useForm, Controller } from "react-hook-form";
import { BlogContext } from "../../contextApi/BlogContextApi";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import {
  CreateBlogModules,
  CreateBlogformats,
} from "../../jsonData/BlogFormatDesign";

export default function CreateBlogCompoenent() {
  const fileInputRef = useRef(null);
  const { blogFeatureImage, setblogFeatureImage, createBlog } =
    useContext(BlogContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm({
    mode: "all", // Use "onChange" mode for real-time validation as the user types
  });
  const [editorValue, seteditorValue] = useState("");

  const handelEditorOnChange = (e) => {
    seteditorValue(e);
    console.log(editorValue);
  };

  const handelBlogThumblin = (e) => {
    const selectedFile = fileInputRef.current.files[0];
    setblogFeatureImage(selectedFile);
  };

  const handelBlogsubmit = async (formdata) => {
    try {
      const result = await createBlog(formdata, editorValue);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.CreateBlogCompoenent_mainContainer}>
        <div className={styles.CreateBlogCompoenent_TitleBox}>
          Create New Blog
        </div>

        <div className={styles.CreateBlogCompoenent_container}>
          <form onSubmit={handleSubmit(handelBlogsubmit)}>
            <div className={styles.Blog_TitleBox}>
              <div className={styles.input_lableBox}>Blog Title</div>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  className={styles.inputStyle}
                  name="blogTitle"
                  {...register("blogTitle", {
                    required: true,
                  })}
                />
              </div>
            </div>
            <div className={styles.blog_date_imageBox}>
              <div className={styles.date_box}>
                <input type="date" className={styles.dateInput} />
              </div>
              <div className={styles.blog_ImageBox}>
                <div className={styles.blog_imageLableBox}>BLOG IMAGE</div>
                <input
                  type="file"
                  className={styles.fileInput}
                  name="image"
                  onChange={handelBlogThumblin}
                  ref={fileInputRef}
                />
              </div>
            </div>
            <div className={styles.Blog_keywordsBox}>
              <div className={styles.input_lableBox}>Keywords</div>
              <div className={styles.inputBox}>
                <textarea
                  type="text"
                  className={styles.inputStyle}
                  style={{ height: "100px" }}
                  placeholder="Keywords..."
                  name="keywords"
                  {...register("keywords", {
                    required: true,
                  })}
                >
                  {" "}
                </textarea>
              </div>
            </div>
            <div className={styles.Blog_metaDescreptionBox}>
              <div className={styles.input_lableBox}>Meta Descreption</div>
              <div className={styles.inputBox}>
                <textarea
                  type="text"
                  className={styles.inputStyle}
                  style={{ height: "150px" }}
                  placeholder="Meta Descreption..."
                  name="meta"
                  {...register("meta", {
                    required: true,
                  })}
                >
                  {" "}
                </textarea>
              </div>
            </div>

            <div className={styles.Blog_TextEditor_wraper}>
              <div className={styles.input_lableBox}>Blog Content</div>
              <div className={styles.Blog_textEditorBox}>
                <ReactQuill
                  theme="snow"
                  modules={CreateBlogModules}
                  formats={CreateBlogformats}
                  value={editorValue}
                  onChange={handelEditorOnChange}
                />
              </div>
            </div>
            <div>
              <button type="submit" disabled={!isValid}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
