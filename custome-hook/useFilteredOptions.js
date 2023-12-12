import React, { useContext, useState } from "react";
import { superAdminOptions } from "../jsonData/FormInput_data";
import { UserContext } from "../contextApi/UserContextApi";
const roleOptionsMap = {
  admin: [10],
};

export const useFilteredOptions = () => {
  const { userRole } = useContext(UserContext);

  // Get options to remove based on user's role or default to an empty array
  const optionsToRemove = roleOptionsMap[userRole] || [];

  // Filter options based on user's role and provided options to remove
  const filteredOptions = superAdminOptions.filter((option) => {
    return !optionsToRemove.includes(option.id);
  });

  return filteredOptions;
};
