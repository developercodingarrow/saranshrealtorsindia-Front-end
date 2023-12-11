import { useState, useEffect } from "react";

const useFilterProjects = (allProjects) => {
  const filterProjectsByTrueStatus = (property) => {
    const filtered = allProjects
      .filter((el) => el[property] === true)
      .slice(0, 3);
    return filtered;
  };

  return { filterProjectsByTrueStatus };
};

export default useFilterProjects;
