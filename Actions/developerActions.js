import axios from "axios";

// GET ALL PROJECT ACTION
export const getAllDeveloperAction = async (token) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/developer`,

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

// Create Developer Action
export const createDeveloperAction = async (requestData, token) => {
  console.log(requestData);
  try {
    return await axios.post(
      "http://127.0.0.1:5000/developer/add-new-developer",
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

// DELETE SINGLE Project Action
export const DeleteDeveloperAction = async (requestData, token) => {
  try {
    const response = await axios({
      method: "delete",
      url: "http://127.0.0.1:5000/developer/delete-developer",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      data: requestData, // Pass the data payload here
    });
    console.log(requestData);
    return response;
  } catch (error) {
    return error.response;
  }
};
