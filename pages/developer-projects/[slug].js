import React, { useContext, useEffect } from "react";
import Layout from "../../Components/layouts/Layout";
import CategoriesPage from "../../Components/CategoriesComponent/CategoriesPage";
import { DeveloperProjectsAction } from "../../Actions/pageAction";
import { ProjectPageContext } from "../../contextApi/ProjectPageContextApi";

export default function DeveloperProjectsPage({ initialProject }) {
  const { setdeveloperProjects, developerProjects, projectBy, setprojectBy } =
    useContext(ProjectPageContext);

  useEffect(() => {
    console.log(initialProject.developer);
    setprojectBy(initialProject.developer);
    setdeveloperProjects(initialProject.result);
  }, [initialProject]);

  return (
    <>
      <Layout>
        <CategoriesPage projects={developerProjects} projectBy={projectBy} />
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

    const response = await DeveloperProjectsAction(slug);
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
