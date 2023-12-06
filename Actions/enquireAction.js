import axios from "axios";

// Signup Api
export const newEnquireAction = async (requestData) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:5000/enquirey/create-enquiry-project",
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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

// GET ALL PROJECT ACTION
export const getAllEnquires = async (token) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/enquirey/get-all-enquires`,

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

export const DeleteEnquireAction = async (requestData, token) => {
  console.log(requestData);
  try {
    const response = await axios({
      method: "delete",
      url: "http://127.0.0.1:5000/enquirey/delete-enqure",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      data: requestData, // Pass the data payload here
    });
    console.log(response);
    return response;
  } catch (error) {
    return error.response;
  }
};
