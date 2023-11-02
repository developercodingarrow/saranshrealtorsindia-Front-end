import React, { createContext, useState, useContext } from "react";

import {
  getAllProjectsAction,
  createProjectAction,
} from "../Actions/ProjectAction";
export const ProjectContext = createContext();

export default function ProjectContextApiProvider({ children }) {
  const [allProjects, setallProjects] = useState([]);
  const [projectThumblin, setprojectThumblin] = useState("");

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

  return (
    <ProjectContext.Provider
      value={{
        allProjects,
        setallProjects,
        setprojectThumblin,
        handleImageChange,
        createProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
