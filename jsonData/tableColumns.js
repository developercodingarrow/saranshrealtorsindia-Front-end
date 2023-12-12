export const developerProjectsColumns = [
  { label: "S No", key: "name", component: "number" },
  { label: "Title", key: "pageTitle", component: "text" },
  { label: "DEVELOPER", key: "developer", component: "text" },
  { label: "View", key: "slug", component: "view" },
];

export const SAdeveloperProjectsColumns = [
  { label: "DELETE", key: "_id", component: "delete" },
];

// Configuration object for table columns role
export const locationProjectColumns = [
  { label: "S No", key: "name", component: "number" },
  { label: "Title", key: "pageTitle", component: "text" },
  { label: "LOCATION", key: "ProjectCity", component: "text" },
  { label: "DELETE", key: "_id", component: "delete" },
  { label: "View", key: "slug", component: "view" },
];

export const SALocationProjectColumns = [
  { label: "DELETE", key: "_id", component: "delete" },
];

// Configuration object for table columns role
export const blogColumns = [
  { label: "S No", key: "name", component: "number" },
  { label: "Title", key: "blogTitle", component: "text" },
  { label: "DATE", key: "createAt", component: "date" },
  { label: "UPDATE", key: "_id", component: "update" },
];

export const SAblogColumns = [
  { label: "DELETE", key: "_id", component: "delete" },
];

export const cityColumns = [
  { label: "S No", key: "name", component: "number" },
  { label: "Name", key: "cityName", component: "text" },

  // Add more columns as needed
  // ... repeat additional columns
];

export const SAColucitymns = [
  { label: "DELETE", key: "id", component: "delete" },
];

export const locationColumns = [
  { label: "S No", key: "name", component: "number" },
  { label: "Name", key: "locationName", component: "text" },
  // Add more columns as needed
  // ... repeat additional columns
];

export const SAlocationColumns = [
  { label: "DELETE", key: "id", component: "delete" },
];
