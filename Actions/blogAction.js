import axios from "axios";

// CREATE BLOG
export const createNewBlogAction = async (requestData, token) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:5000/blogs/create-new-blog",
      requestData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(res);
    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

// GET ALL BLOG ACTION
export const getAllBlogsAction = async () => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/blogs`,

      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

// GET ALL BLOG ACTION
export const getSingleBlogsAction = async (slug) => {
  console.log("blog action");
  console.log(slug);
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/blogs/single-blog/${slug}`,

      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
