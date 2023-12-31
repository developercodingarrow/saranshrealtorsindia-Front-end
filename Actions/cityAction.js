import axios from "axios";

// DELETE SINGLE Project Action
export const getAllCityAction = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: "http://127.0.0.1:5000/city",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// DELETE SINGLE Project Action
export const AddNewCityAction = async (requestData, token) => {
  try {
    const response = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/city/add-new-city",
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

// DELETE SINGLE Project Action
export const DeleteCityerAction = async (requestData, token) => {
  try {
    const response = await axios({
      method: "delete",
      url: "http://127.0.0.1:5000/city/delete-city",
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
