import React, { createContext, useState, useContext, useEffect } from "react";
import { isAuth, getLoginCookies } from "../Actions/authAction";
export const UserContext = createContext();

export default function UserContextApiProvider({ children }) {
  const token = getLoginCookies();
  const [loginUser, setloginUser] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      const storedData = await isAuth();
      setloginUser(storedData);
    };
    getUserData();
  }, []);

  return (
    <UserContext.Provider value={{ loginUser, token }}>
      {children}
    </UserContext.Provider>
  );
}
