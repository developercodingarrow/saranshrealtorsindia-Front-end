import React, { createContext, useState, useContext } from "react";
import { getLoginCookies } from "../Actions/authAction";
import {
  getAllDeveloperAction,
  createDeveloperAction,
  DeleteDeveloperAction,
} from "../Actions/developerActions";
export const DeveloperContext = createContext();

export default function DeveloperContextApiProvide({ children }) {
  const loginToken = getLoginCookies();
  const [allDeveloper, setallDeveloper] = useState([]);

  const handelGetAllDeveloper = async () => {
    try {
      const response = await getAllDeveloperAction(loginToken);
      console.log(response);
      console.log(response.data.result);
      setallDeveloper(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handelAddDeveloper = async (inputdata) => {
    try {
      const response = await createDeveloperAction(inputdata, loginToken);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handelDeleteDeveloper = async (inputdata) => {
    try {
      console.log(inputdata);
      const response = await DeleteDeveloperAction(inputdata, loginToken);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DeveloperContext.Provider
      value={{
        allDeveloper,
        handelGetAllDeveloper,
        handelAddDeveloper,
        handelDeleteDeveloper,
      }}
    >
      {children}
    </DeveloperContext.Provider>
  );
}
