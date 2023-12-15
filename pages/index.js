import React, { useContext, useEffect } from "react";
import Layout from "../Components/layouts/Layout";
import FeatureListing from "../Components/HomePageSections/FeatureListing";
import { getAllProjectsAction } from "../Actions/ProjectAction";
import { ProjectContext } from "../contextApi/ProjectContextApi";
import HomeHeroSection from "../Components/layouts/HomeHeroSection";
import HomePageWrapper from "../Components/HomePageSections/HomePageWrapper";

export default function Home({ initialProject }) {
  const { setallProjects } = useContext(ProjectContext);

  useEffect(() => {
    if (initialProject && initialProject.length > 0) {
      setallProjects(initialProject);
    } else {
      setallProjects([]);
    }
  }, [initialProject]);
  return (
    <>
      <Layout>
        <HomePageWrapper />
      </Layout>
    </>
  );
}

// GET STATIC PROPS TO GET ALL PROJECTS
export async function getServerSideProps() {
  try {
    const result = await getAllProjectsAction();
    let initialProject = result?.data?.result || []; // Ensure a valid value or null

    return {
      props: {
        initialProject,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        initialProject: null,
      },
    };
  }
}
