import React, { createContext, useState, useContext, useEffect } from "react";
import { getLoginCookies } from "../Actions/authAction";
import {
  createNewBlogAction,
  getAllBlogsAction,
  deleteSingleBlogAction,
} from "../Actions/blogAction";
export const BlogContext = createContext();

export default function BlogContextApiProvide({ children }) {
  const loginToken = getLoginCookies();
  const [blogFeatureImage, setblogFeatureImage] = useState("");
  const [allblogsList, setallblogsList] = useState([]);
  const [singleBlog, setsingleBlog] = useState("");
  const [blogListData, setblogListData] = useState([]);
  const [loadingBlog, setloadingBlog] = useState(false);

  useEffect(() => {
    handelGetAllBlosgs();
  }, [loadingBlog]);

  // Create Project
  const createBlog = async (inputdata, descreption) => {
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

  const handelGetAllBlosgs = async () => {
    try {
      const response = await getAllBlogsAction();
      setblogListData(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handelDelectBlog = async (dataId) => {
    try {
      const requestData = { _id: dataId };
      const response = await deleteSingleBlogAction(requestData, loginToken);
      return response;
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
        handelGetAllBlosgs,
        blogListData,
        setblogListData,
        handelDelectBlog,
        setloadingBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
