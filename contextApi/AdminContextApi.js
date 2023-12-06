import React, { createContext, useState, useContext } from "react";
import { getLoginCookies } from "../Actions/authAction";
import {
  getAllAdmins,
  createNewAdmin,
  UpdateAdminStatusAction,
  DeleteAdminAction,
} from "../Actions/adminAction";
export const AdminContext = createContext();

export default function AdminContextApiProvider({ children }) {
  const loginToken = getLoginCookies();
  const [admins, setadmins] = useState([]);

  const handelgetAllAdmins = async () => {
    try {
      const response = await getAllAdmins(loginToken);
      setadmins(response.data.allAdmins);
    } catch (error) {
      console.log(error);
    }
  };

  const handelCreateNewAdmin = async (requestData) => {
    try {
      const response = await createNewAdmin(requestData, loginToken);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handelUpdateAdminStatus = async (requestData, token) => {
    try {
      const response = await UpdateAdminStatusAction(requestData, token);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handelDeleteAdmin = async (dataId) => {
    try {
      const requestData = { _id: dataId };
      const response = await DeleteAdminAction(requestData, loginToken);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        admins,
        handelgetAllAdmins,
        handelCreateNewAdmin,
        handelUpdateAdminStatus,
        handelDeleteAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
