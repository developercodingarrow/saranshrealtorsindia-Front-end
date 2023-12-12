import React, { useContext, useEffect } from "react";
import Layout from "../../Components/layouts/Layout";
import CategoriesPage from "../../Components/CategoriesComponent/CategoriesPage";
import { getLocationProjectsAction } from "../../Actions/pageAction";
import { ProjectPageContext } from "../../contextApi/ProjectPageContextApi";

export default function LocationProjectPage({ initialProject }) {
  const { locationProjects, setlocationProjects, projectBy, setprojectBy } =
    useContext(ProjectPageContext);

  useEffect(() => {
    console.log(initialProject);
    setprojectBy(initialProject.location);
    setlocationProjects(initialProject.projects);
  }, [initialProject]);

  return (
    <>
      <Layout>
        <CategoriesPage projects={locationProjects} projectBy={projectBy} />
      </Layout>
    </>
  );
}

// GET STATIC PROPS TO GET ALL PROJECTS
export async function getServerSideProps(context) {
  try {
    console.log(context.params);
    const { slug } = context.params;
    console.log(slug);

    const response = await getLocationProjectsAction(slug);
    const data = response.data;

    return {
      props: {
        initialProject: data,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        initialProject: [],
      },
    };
  }
}
