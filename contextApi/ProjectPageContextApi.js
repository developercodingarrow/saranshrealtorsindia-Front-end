import React, { createContext, useState, useContext, useEffect } from "react";
import {
  allDeveloperProjectListAction,
  createDeveloperPageAction,
  createLocationPageAction,
  deletePormotionalPage,
  deleteLocationPage,
  getAllLocationPageAction,
} from "../Actions/pageAction";
import { getLoginCookies } from "../Actions/authAction";
export const ProjectPageContext = createContext();

export default function ProjectPageContextApiProvider({ children }) {
  const loginToken = getLoginCookies();
  const [projectPageList, setprojectPageList] = useState([]);
  const [locationPages, setlocationPages] = useState([]);
  const [developerProjects, setdeveloperProjects] = useState([]);
  const [projectBy, setprojectBy] = useState("");
  const [sending, setsending] = useState(false);
  const [locationProjects, setlocationProjects] = useState([]);

  useEffect(() => {
    handelDeveloperList();
    handelLocationPageList();
  }, [sending]);

  //  Handel get Developer List
  const handelDeveloperList = async () => {
    try {
      const response = await allDeveloperProjectListAction();
      setprojectPageList(response.data.result);
    } catch (error) {}
  };

  //  Handel get Developer List
  const handelLocationPageList = async () => {
    try {
      const response = await getAllLocationPageAction();
      setlocationPages(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  //Handel create new Developer project page
  const handelCreateDeveloperProject = async (data) => {
    try {
      const response = await createDeveloperPageAction(data, loginToken);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  //Handel create new Developer project page
  const handelCreateLocationrProject = async (data) => {
    try {
      const response = await createLocationPageAction(data, loginToken);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handelDeletePormotionalPage = async (dataId) => {
    try {
      const requestData = { _id: dataId };

      const response = await deletePormotionalPage(requestData, loginToken);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handelDeleteLocationPage = async (dataId) => {
    try {
      const requestData = { _id: dataId };

      const response = await deleteLocationPage(requestData, loginToken);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProjectPageContext.Provider
      value={{
        handelDeveloperList,
        handelCreateDeveloperProject,
        projectPageList,
        setsending,
        handelCreateLocationrProject,
        handelDeletePormotionalPage,
        sending,
        locationPages,
        handelDeleteLocationPage,
        setdeveloperProjects,
        developerProjects,
        projectBy,
        setprojectBy,
        locationProjects,
        setlocationProjects,
      }}
    >
      {children}
    </ProjectPageContext.Provider>
  );
}
