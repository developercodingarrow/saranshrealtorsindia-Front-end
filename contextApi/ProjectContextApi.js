import React, { createContext, useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getLoginCookies } from "../Actions/authAction";
import projectsData from "../jsonData/ProjectData";

import {
  getAllProjectsAction,
  createProjectAction,
  UpdateProjectStatusAction,
  UpdateProjectFeatureAction,
  UpdateProjectStatusTypeAction,
  DeleteSingleProjectAction,
  DeleteMultipleProjectAction,
  getSingleProjectsAction,
  UpdateProjectThumblinAction,
} from "../Actions/ProjectAction";
export const ProjectContext = createContext();

export default function ProjectContextApiProvider({ children }) {
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    size: [],
    category: [],
    subCategory: [],
  });

  const [allProjectData, setallProjectData] = useState([]);
  const [singleProject, setsingleProject] = useState("");
  const loginToken = getLoginCookies();
  const [allProjects, setallProjects] = useState([]);
  const [projectThumblin, setprojectThumblin] = useState("");
  // super-Admin
  const [projects, setprojects] = useState([]);

  // Inside your component
  const [selectedProjects, setSelectedProjects] = useState([]);

  // for single Image
  const [imageUrl, setimageUrl] = useState("");
  const [imageAltText, setimageAltText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  // This Function for CheckBox Check-UnCheck
  const handleFilterChange = (filterType, value) => {
    console.log(filterType, value);
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: selectedFilters[filterType].includes(value)
        ? selectedFilters[filterType].filter((filter) => filter !== value)
        : [...selectedFilters[filterType], value],
    });
  };

  // Fiilter data function
  const filteredProjects = allProjectData.filter((project) => {
    return (
      (selectedFilters.brand.length === 0 ||
        selectedFilters.brand.includes(project.brand)) &&
      (selectedFilters.size.length === 0 ||
        selectedFilters.size.includes(project.size)) &&
      (selectedFilters.category.length === 0 ||
        selectedFilters.category.includes(project.category)) &&
      (selectedFilters.subCategory.length === 0 ||
        selectedFilters.subCategory.includes(project.subCategory))
    );
  });

  // Handel CHange for image
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setprojectThumblin(selectedFile);
  };

  const handlePreviwImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }

    setprojectThumblin(file);
  };

  // Create Project
  const createProject = async (inputdata, token) => {
    console.log(inputdata);
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

  const handelupdateProjectThumblin = async (imageId) => {
    console.log(imageId);
    try {
      const formData = new FormData();
      formData.append("ProjectThumblin", projectThumblin);
      const result = await UpdateProjectThumblinAction(
        formData,
        loginToken,
        imageId
      );

      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  // GET ALL PROJECT for UseEffect
  const getAllProjectHandel = async () => {
    const response = await getAllProjectsAction();
    setprojects(response.data.result);
  };

  // handel Toggel Project Status
  const handelToggleProjectstatus = async (requestData, token) => {
    const response = await UpdateProjectStatusAction(requestData, token);

    if (response.data.status === "Success") {
      toast.success(response.data.message);
    }
  };

  // handel Toggel Feature Project Status
  const handelToggleProjectFeature = async (requestData, token) => {
    const response = await UpdateProjectFeatureAction(requestData, token);

    if (response.data.status === "Success") {
      toast.success(response.data.message);
    }
  };

  const handelProjectStatusTyple = async (requestData, token) => {
    const response = await UpdateProjectStatusTypeAction(requestData, token);

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

  const handelDeleteSingleProject = async (dataId, token) => {
    const requestData = { _id: dataId };

    const response = await DeleteSingleProjectAction(requestData, token);

    if (response.data.status === "Success") {
      toast.success(response.data.message);
    }
  };

  const handleCheckboxChange = (event) => {
    const projectId = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedProjects([...selectedProjects, projectId]);
    } else {
      const updatedProjects = selectedProjects.filter((id) => id !== projectId);
      setSelectedProjects(updatedProjects);
    }
  };

  const handelMultipleDeleteProject = async () => {
    const requestBody = { projectIds: selectedProjects };
    const response = await DeleteMultipleProjectAction(requestBody, loginToken);

    if (response.data.status === "Success") {
      toast.success(response.data.message);
    }
  };

  const handelGetSingleProject = async (id) => {
    const response = await getSingleProjectsAction(id, loginToken);
    setimageUrl(response.data.project.ProjectThumblin[0].url);
    setimageAltText(response.data.project.ProjectThumblin[0].altText);
    if (response.data.status === "Success") {
      toast.success(response.data.message);
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
        handelDeleteSingleProject,
        handleCheckboxChange,
        selectedProjects,
        setSelectedProjects,
        handelMultipleDeleteProject,
        handelGetSingleProject,
        imageUrl,
        imageAltText,
        handlePreviwImageChange,
        selectedImage,
        handelupdateProjectThumblin,
        getAllProjectHandel,
        handleFilterChange,
        selectedFilters,
        filteredProjects,
        allProjectData,
        setallProjectData,
        singleProject,
        setsingleProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
