import React, { createContext, useState, useContext } from "react";
export const AppContext = createContext();

export default function AppContextApiProvider({ children }) {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleToggleDrawer = (event) => {
    if (event.target === event.currentTarget) {
      setToggleDrawer((prev) => !prev); // Toggle the state
      console.log(toggleDrawer);
    }
  };

  return (
    <AppContext.Provider
      value={{ toggleDrawer, setToggleDrawer, handleToggleDrawer }}
    >
      {children}
    </AppContext.Provider>
  );
}
