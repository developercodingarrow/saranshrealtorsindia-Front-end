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

export const createProjectFiled = [
  {
    id: 2,
    name: "ProjectCity",
    type: "text",
    placeholder: "Project City",
    lable: "City",
    validation: {
      required: "Project city is required.",
    },
  },
  {
    id: 3,
    name: "ProjectSector",
    type: "text",
    placeholder: "Project Sector",
    lable: "Project Sector",
    validation: {
      required: "Project sector is required.",
    },
  },

  {
    id: 4,
    name: "Budget",
    type: "text",
    placeholder: "Budget",
    lable: "Budget",
    validation: {
      required: "Budget is required.",
    },
  },

  {
    id: 6,
    name: "BasicPrice",
    type: "text",
    placeholder: "Basic Price",
    lable: "Basic Price",
    validation: {
      required: "Basic Price is required.",
    },
  },

  {
    id: 7,
    name: "NoofFloors",
    type: "text",
    placeholder: "NoofFloors",
    lable: "No of Floors",
    validation: {
      required: "Basic Price is required.",
    },
  },

  {
    id: 8,
    name: "NoofUnits",
    type: "text",
    placeholder: "No of Units",
    lable: "No of Units",
    validation: {
      required: "No of Units is required.",
    },
  },
  {
    id: 9,
    name: "Unit Type",
    type: "text",
    placeholder: "2bhk , 3bhk",
    lable: "No of Units",
    validation: {
      required: "Unit Type is required.",
    },
  },

  {
    id: 10,
    name: "FlatSizeRange",
    type: "text",
    placeholder: "Flat Size Range",
    lable: "Flat Size Range",
    validation: {
      required: "Flat Size Range is required.",
    },
  },

  {
    id: 11,
    name: "Possession",
    type: "text",
    placeholder: "Possession",
    lable: "Possession",
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
    page: "CREATE PROMOTIONAL PAGE",
    hrf: "/super-admin",
  },

  {
    id: 5,
    page: "BLOGS LIST",
    hrf: "/super-admin",
  },

  {
    id: 6,
    page: "ADD DEVELOPER",
    hrf: "/super-admin/add-developer",
  },
  {
    id: 7,
    page: "CREATE ADMIN",
    hrf: "/super-admin/create-admin",
  },

  {
    id: 8,
    page: "CREATE BLOG",
    hrf: "/super-admin/blog/create-blog",
  },

  {
    id: 9,
    page: "ENQUIRES",
    hrf: "/super-admin/enquire",
  },
];
