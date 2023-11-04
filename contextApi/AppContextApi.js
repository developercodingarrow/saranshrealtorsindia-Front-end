import React, { createContext, useState, useContext } from "react";
export const AppContext = createContext();

export default function AppContextApiProvider({ children }) {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [toggleSideBar, settoggleSideBar] = useState(true);

  // super admin side bar toogle
  const handleToggleSidebar = () => {
    settoggleSideBar(!toggleSideBar);
    console.log(toggleSideBar);
  };

  const handleToggleDrawer = (event) => {
    if (event.target === event.currentTarget) {
      setToggleDrawer((prev) => !prev); // Toggle the state
      console.log(toggleDrawer);
    }
  };

  return (
    <AppContext.Provider
      value={{
        toggleDrawer,
        setToggleDrawer,
        handleToggleDrawer,
        toggleSideBar,
        handleToggleSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
