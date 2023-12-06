import React, { createContext, useState, useContext, useEffect } from "react";
import { getLoginCookies } from "../Actions/authAction";
export const CityContext = createContext();
import {
  getAllCityAction,
  AddNewCityAction,
  DeleteCityerAction,
} from "../Actions/cityAction";

export default function CityContextApiProvider({ children }) {
  const loginToken = getLoginCookies();
  const [allCties, setallCties] = useState([]);
  const [loadingcity, setloadingcity] = useState(false);

  useEffect(() => {
    handelGetAllCities();
    console.log(allCties);
  }, [loadingcity]);

  const handelGetAllCities = async () => {
    try {
      const response = await getAllCityAction();
      setallCties(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handelAddCity = async (inputdata) => {
    try {
      const response = await AddNewCityAction(inputdata, loginToken);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handelDelectCity = async (dataId) => {
    try {
      const requestData = { _id: dataId };
      const response = await DeleteCityerAction(requestData, loginToken);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CityContext.Provider
      value={{
        allCties,
        setallCties,
        handelGetAllCities,
        handelAddCity,
        loadingcity,
        setloadingcity,
        handelDelectCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}
