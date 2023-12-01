import axios from "axios";

// GET ALL PROJECT ACTION
export const allDeveloperProjectListAction = async (token) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/developer-project/get-all-developer-Project-List-pages`,

      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
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
export const createDeveloperPageAction = async (requestData, token) => {
  try {
    return await axios.post(
      "http://127.0.0.1:5000/developer-project/create-new-developer-project-page",
      requestData,
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error.response;
  }
};


// Get Developer Projects Action 

export const DeveloperProjectsAction = async (slug) => {
  console.log(slug)
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/developer-project/get-developer-projects/${slug}`,

      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};