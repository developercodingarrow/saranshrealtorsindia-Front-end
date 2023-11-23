import React, { createContext, useState, useContext } from "react";
import { getLoginCookies } from "../Actions/authAction";
import { createNewBlogAction, getAllBlogsAction } from "../Actions/blogAction";
export const BlogContext = createContext();

export default function BlogContextApiProvide({ children }) {
  const loginToken = getLoginCookies();
  const [blogFeatureImage, setblogFeatureImage] = useState("");
  const [allblogsList, setallblogsList] = useState([]);
  const [singleBlog, setsingleBlog] = useState("");

  // Create Project
  const createBlog = async (inputdata, descreption) => {
    console.log(inputdata);
    try {
      const formData = new FormData();
      formData.append("image", blogFeatureImage);
      formData.append("blogTitle", inputdata.blogTitle);
      formData.append("blogDescreption", descreption);

      const result = await createNewBlogAction(formData, loginToken);
      console.log(result);

      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogFeatureImage,
        setblogFeatureImage,
        createBlog,
        allblogsList,
        setallblogsList,
        singleBlog,
        setsingleBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
