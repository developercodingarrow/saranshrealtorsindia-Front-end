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