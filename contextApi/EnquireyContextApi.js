import React, { createContext, useState, useContext } from "react";
export const EnqureContext = createContext();
import { newEnquireAction, getAllEnquires } from "../Actions/enquireAction";
import { getLoginCookies } from "../Actions/authAction";

export default function EnquireyContextApiProvider({ children }) {
  const loginToken = getLoginCookies();
  const [isLoading, setisLoading] = useState(false);
  const [allEnquires, setallEnquires] = useState([]);

  const handelNewEnquire = async (requestData) => {
    try {
      const response = await newEnquireAction(requestData);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handelgetEnquires = async () => {
    try {
      const response = await getAllEnquires(loginToken);
      setallEnquires(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <EnqureContext.Provider
      value={{
        isLoading,
        setisLoading,
        handelNewEnquire,
        handelgetEnquires,
        allEnquires,
        setallEnquires,
      }}
    >
      {children}
    </EnqureContext.Provider>
  );
}
