import axios from "axios";

export const getAllProjectsAction = async () => {
  try {
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
export const createProjectAction = async (requestData, token) => {
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

// Update Project Status Action
export const UpdateProjectStatusAction = async (requestData, token) => {
  console.log(requestData);
  try {
    return await axios.patch(
      "http://127.0.0.1:5000/projects/update-project-status",
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

// Update Project Status Action
export const UpdateProjectFeatureAction = async (requestData, token) => {
  console.log(requestData);
  try {
    return await axios.patch(
      "http://127.0.0.1:5000/projects/update-feature-project",
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

// Update Project Status Action
export const UpdateProjectStatusTypeAction = async (requestData, token) => {
  console.log(requestData);
  try {
    return await axios.patch(
      "http://127.0.0.1:5000/projects/update-project-status-type",
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
