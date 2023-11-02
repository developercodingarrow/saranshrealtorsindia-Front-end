import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
  ? "http://saranshrealtorsindia.in/"
  : "http://localhost:5000/";

export const App_Name = publicRuntimeConfig.App_Name;
