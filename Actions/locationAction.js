import axios from "axios";

// DELETE SINGLE Project Action
export const getAllLocationAction = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: "http://127.0.0.1:5000/location",
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
export const AddNewLocationAction = async (requestData, token) => {
  try {
    const response = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/location/add-new-location",
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
export const DeleteLocationAction = async (requestData, token) => {
  try {
    const response = await axios({
      method: "delete",
      url: "http://127.0.0.1:5000/location/delete-location",
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
