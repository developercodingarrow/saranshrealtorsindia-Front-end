import axios from "axios";

export const getAllProjectsAction = async () => {
  try {
    console.log("get all product");
    const res = await axios.get(
      `http://127.0.0.1:5000/projects`,

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

// Create Project Action
export const createProjectAction = async (data, token) => {
  try {
    return await axios.post(
      "http://127.0.0.1:5000/projects/create-new-project",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error.response;
  }
};
