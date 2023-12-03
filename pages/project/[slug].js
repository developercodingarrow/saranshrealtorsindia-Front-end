import React, { useContext } from "react";
import Layout from "../../Components/layouts/Layout";
import SingleProject from "../../Components/projects/SingleProject";
import { getSingleProjectsAction } from "../../Actions/ProjectAction";
import { ProjectContext } from "../../contextApi/ProjectContextApi";

export default function SingleProjectPage({ initialProject }) {
  const { singleProject, setsingleProject } = useContext(ProjectContext);

  setsingleProject(initialProject);
  return (
    <>
      <Layout>
        <SingleProject />
      </Layout>
    </>
  );
}

// GET STATIC PROPS TO GET ALL PROJECTS
export async function getServerSideProps(context) {
  try {
    console.log("run");
    console.log(context.params);
    const { slug } = context.params;
    console.log(slug);

    const result = await getSingleProjectsAction(slug);

    return {
      props: {
        initialProject: result.data.project,
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
