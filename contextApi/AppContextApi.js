import React, { createContext, useState, useContext } from "react";
import { DeleteSingleProjectAction } from "../Actions/ProjectAction";
export const AppContext = createContext();

export default function AppContextApiProvider({ children }) {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [toggleSideBar, settoggleSideBar] = useState(true);
  const [modelBox, setmodelBox] = useState(false);
  const [itemActionId, setitemActionId] = useState("");
  const [btnLoading, setbtnLoading] = useState(false);
  const [projectFillerDrawer, setprojectFillerDrawer] = useState(true);

  // Toogle Project Fillter Drawer
  const handelToggleFillterDrawer = () => {
    setprojectFillerDrawer(!projectFillerDrawer);
  };

  // super admin side bar toogle
  const handleToggleSidebar = () => {
    settoggleSideBar(!toggleSideBar);
  };

  const handleToggleDrawer = (event) => {
    if (event.target === event.currentTarget) {
      setToggleDrawer((prev) => !prev); // Toggle the state
    }
  };

  const handelOpenModelBox = (itemID) => {
    setmodelBox(true);
    setitemActionId(itemID);
  };

  const handelCloseModelBox = () => {
    setmodelBox(false);
  };

  const DeleteSingleProject = async (requestData, token) => {
    const response = await DeleteSingleProjectAction(requestData, token);
    if (response.data.status === "Success") {
      toast.success(response.data.message);
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
        handelOpenModelBox,
        handelCloseModelBox,
        modelBox,
        itemActionId,
        btnLoading,
        setbtnLoading,
        handelToggleFillterDrawer,
        projectFillerDrawer,
        setmodelBox,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
