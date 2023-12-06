import React, { createContext, useState, useContext, useEffect } from "react";
import { getLoginCookies } from "../Actions/authAction";
export const LocationContext = createContext();
import {
  getAllLocationAction,
  AddNewLocationAction,
  DeleteLocationAction,
} from "../Actions/locationAction";

export default function LocationContextApiProvider({ children }) {
  const loginToken = getLoginCookies();

  const [allLocation, setallLocation] = useState([]);

  const [loadingLocation, setloadingLocation] = useState(false);

  useEffect(() => {
    handelGetAllLocation();
  }, [loadingLocation]);

  const handelGetAllLocation = async () => {
    try {
      const response = await getAllLocationAction();
      setallLocation(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handelAddLocation = async (inputdata) => {
    try {
      const response = await AddNewLocationAction(inputdata, loginToken);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handelDelectLocation = async (dataId) => {
    try {
      const requestData = { _id: dataId };
      const response = await DeleteLocationAction(requestData, loginToken);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LocationContext.Provider
      value={{
        allLocation,
        setallLocation,
        handelGetAllLocation,
        handelAddLocation,
        loadingLocation,
        setloadingLocation,
        handelDelectLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
