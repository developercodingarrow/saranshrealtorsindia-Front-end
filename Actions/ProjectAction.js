import axios from "axios";

// GET ALL PROJECT ACTION
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

export const getSingleProjectsAction = async (slug) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/projects/get-single-project/${slug}`,

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
      requestData,
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

// DELETE SINGLE Project Action
export const DeleteSingleProjectAction = async (requestData, token) => {
  try {
    const response = await axios({
      method: "delete",
      url: "http://127.0.0.1:5000/projects/delete-single-project",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      data: requestData, // Pass the data payload here
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const DeleteMultipleProjectAction = async (requestData, token) => {
  console.log(requestData);
  try {
    const response = await axios({
      method: "delete",
      url: "http://127.0.0.1:5000/projects/delete-multiple-project",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      data: requestData, // Pass the data payload here
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// Create Project Action
export const UpdateProjectThumblinAction = async (requestData, token, id) => {
  console.log(requestData);
  try {
    return await axios.patch(
      `http://127.0.0.1:5000/projects/update-project-thumblin/${id}`,
      requestData,
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
