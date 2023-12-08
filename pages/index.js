import React, { useContext } from "react";
import Layout from "../Components/layouts/Layout";
import FeatureListing from "../Components/HomePageSections/FeatureListing";
import { getAllProjectsAction } from "../Actions/ProjectAction";
import { ProjectContext } from "../contextApi/ProjectContextApi";
import HomeHeroSection from "../Components/layouts/HomeHeroSection";
import HomePageWrapper from "../Components/HomePageSections/HomePageWrapper";

export default function Home({ initialProject }) {
  const { setallProjects } = useContext(ProjectContext);

  // SET ALL PROJECTS
  setallProjects(initialProject);
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
  console.log("run");
  try {
    const result = await getAllProjectsAction();

    return {
      props: {
        initialProject: result.data.result,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        initialProject: {},
      },
    };
  }
}
