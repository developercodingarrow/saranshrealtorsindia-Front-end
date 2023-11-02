import React, { useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../Components/layouts/Layout";
import FeatureListing from "../Components/HomePageSections/FeatureListing";
import { getAllProjectsAction } from "../Actions/ProjectAction";
import { ProjectContext } from "../contextApi/ProjectContextApi";
import HomeHeroSection from "../Components/layouts/HomeHeroSection";

export default function Home({ initialProject }) {
  const { allProjects, setallProjects } = useContext(ProjectContext);

  console.log(initialProject);
  // Set all project
  setallProjects(initialProject);
  return (
    <>
      <Layout>
        <HomeHeroSection />
        <FeatureListing />
      </Layout>
    </>
  );
}

// Get Static Props
export async function getServerSideProps() {
  console.log("run");
  try {
    const result = await getAllProjectsAction();

    console.log(result);

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
