export const loginInputs = [
  {
    id: 1,
    name: "email",
    type: "text",
    placeholder: "email",
    lable: "email",
    validation: {
      required: "Email is required.",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address.",
      },
    },
  },
  {
    id: 2,
    name: "password",
    type: "text",
    placeholder: "password",
    lable: "password",
    validation: {
      required: "Password is required.",
    },
  },
];

export const adminloginInputs = [
  {
    id: 1,
    name: "userName",
    type: "text",
    placeholder: "User Name",
    lable: "User Name",
    validation: {
      required: "User Name is required.",
    },
  },
  {
    id: 2,
    name: "password",
    type: "text",
    placeholder: "password",
    lable: "password",
    validation: {
      required: "Password is required.",
    },
  },
];

export const createProjectFiled = [
  {
    id: 1,
    name: "Budget",
    type: "text",
    placeholder: "Budget",
    lable: "Budget",
    validation: {
      required: "Budget is required.",
    },
  },

  {
    id: 2,
    name: "BasicPrice",
    type: "text",
    placeholder: "Ex. 125/Sq.Ft or 150/sq. yards ",
    lable: "Basic Price",
    validation: {
      required: "Basic Price is required.",
    },
  },

  {
    id: 3,
    name: "NoofFloors",
    type: "text",
    placeholder: "NoofFloors",
    lable: "No of Floors",
    validation: {
      required: "Basic Price is required.",
    },
  },

  {
    id: 4,
    name: "NoofUnits",
    type: "text",
    placeholder: "No of Units",
    lable: "No of Units",
    validation: {
      required: "No of Units is required.",
    },
  },
  {
    id: 5,
    name: "UnitType",
    type: "text",
    placeholder: "EX. 2bhk , 3bhk",
    lable: "Unit Type *",
    validation: {
      required: "Unit Type is required.",
    },
  },

  {
    id: 6,
    name: "FlatSizeRange",
    type: "text",
    placeholder: "Ex. 450-750 SqFt",
    lable: "Flat Size Range",
    validation: {
      required: "Flat Size Range is required.",
    },
  },

  {
    id: 7,
    name: "RERANo",
    type: "text",
    placeholder: "RERA No",
    lable: "RERA No",
  },
  {
    id: 8,
    name: "Possession",
    type: "text",
    placeholder: "Possession",
    lable: "Possession",
    validation: {
      required: "Possession is required.",
    },
  },

  {
    id: 8,
    name: "address",
    type: "text",
    placeholder: "Address",
    lable: "Project Complete Address *",
    validation: {
      required: "Possession is required.",
    },
  },
];

export const superAdminOptions = [
  {
    id: 1,
    page: "DASHBOARD",
    hrf: "/super-admin",
  },

  {
    id: 2,
    page: "ADD PROJECT",
    hrf: "/super-admin/create-project",
  },

  {
    id: 3,
    page: "LIST PROJECTS",
    hrf: "/super-admin/project-list",
  },

  {
    id: 4,
    page: "CREATE DEVELOPER PAGE",
    hrf: "/super-admin/projects/developer",
  },

  {
    id: 5,
    page: "CREATE LOCATION PAGE",
    hrf: "/super-admin/projects/location",
  },

  {
    id: 6,
    page: "BLOGS LIST",
    hrf: "/super-admin/blog/blog-list",
  },

  {
    id: 7,
    page: "ADD DEVELOPER",
    hrf: "/super-admin/add-developer",
  },
  {
    id: 8,
    page: "CREATE ADMIN",
    hrf: "/super-admin/create-admin",
  },

  {
    id: 9,
    page: "CREATE BLOG",
    hrf: "/super-admin/blog/create-blog",
  },

  {
    id: 10,
    page: "ENQUIRES",
    hrf: "/super-admin/enquire",
  },
  {
    id: 11,
    page: "CREATE CITY",
    hrf: "/super-admin/add-city",
  },
  {
    id: 12,
    page: "CREATE LOCATION",
    hrf: "/super-admin/add-location",
  },
  {
    id: 13,
    page: "PROMOTIONAL DEVELOPER",
    hrf: "/super-admin/promotional/developer",
  },

  {
    id: 14,
    page: "PROMOTIONAL LOCATION",
    hrf: "/super-admin/promotional/location",
  },
];
