import React, { createContext, useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

import {
  getAllProjectsAction,
  createProjectAction,
  UpdateProjectStatusAction,
  UpdateProjectFeatureAction,
  UpdateProjectStatusTypeAction,
} from "../Actions/ProjectAction";
export const ProjectContext = createContext();

export default function ProjectContextApiProvider({ children }) {
  // Users
  const [allProjects, setallProjects] = useState([]);
  const [projectThumblin, setprojectThumblin] = useState("");
  // super-Admin
  const [projects, setprojects] = useState([]);

  // Handel CHange for image
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    setprojectThumblin(selectedFile);
  };

  // Create Project
  const createProject = async (inputdata, token) => {
    try {
      const formData = new FormData();
      formData.append("ProjectThumblin", projectThumblin);
      formData.append("projectName", inputdata.projectName);
      formData.append("ProjectType2", inputdata.ProjectType2);
      formData.append("developer", inputdata.developer);
      formData.append("ProjectCity", inputdata.ProjectCity);
      formData.append("ProjectSector", inputdata.ProjectSector);
      formData.append("Budget", inputdata.Budget);
      formData.append("BasicPrice", inputdata.BasicPrice);
      formData.append("NoofFloors", inputdata.NoofFloors);
      formData.append("NoofUnits", inputdata.NoofUnits);

      const result = await createProjectAction(formData, token);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  // get All Projects
  const getAllProjectHandel = async () => {
    const response = await getAllProjectsAction();
    setprojects(response.data.result);
  };

  // handel Toggel Project Status
  const handelToggleProjectstatus = async (requestData, token) => {
    console.log(requestData);

    const response = await UpdateProjectStatusAction(requestData, token);
    console.log(response);
    if (response.data.status === "Success") {
      toast.success(response.data.message);
    }
  };

  // handel Toggel Feature Project Status
  const handelToggleProjectFeature = async (requestData, token) => {
    console.log(requestData);

    const response = await UpdateProjectFeatureAction(requestData, token);
    console.log(response);
    if (response.data.status === "Success") {
      toast.success(response.data.message);
    }
  };

  const handelProjectStatusTyple = async (requestData, token) => {
    console.log(requestData);

    const response = await UpdateProjectStatusTypeAction(requestData, token);
    console.log(response);
    if (response.data.status === "Success") {
      toast.success(response.data.message);
      setprojects((prevProjects) => {
        return prevProjects.map((project) => {
          if (project._id === requestData._id) {
            // Update only the specific project's ProjectStatus
            return { ...project, ProjectStatus: requestData.optionValue };
          }
          return project;
        });
      });
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        allProjects,
        setallProjects,
        setprojectThumblin,
        handleImageChange,
        createProject,
        getAllProjectHandel,
        projects,
        handelToggleProjectstatus,
        handelToggleProjectFeature,
        handelProjectStatusTyple,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
