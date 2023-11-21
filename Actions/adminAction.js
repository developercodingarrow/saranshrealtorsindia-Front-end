import axios from "axios";

// GET ALL PROJECT ACTION
export const getAllAdmins = async (token) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/user/get-all-admins`,

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

// Signup Api
export const createNewAdmin = async (requestData, token) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:5000/user/new-admin-create",
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
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

// Update Project Status Action
export const UpdateAdminStatusAction = async (requestData, token) => {
  console.log(requestData);
  try {
    return await axios.patch(
      "http://127.0.0.1:5000/user/update-admin-status-action",
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
