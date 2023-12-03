import React, { useContext } from "react";
import Layout from "../../Components/layouts/Layout";
import ProjectListComponent from "../../Components/projects/ProjectListComponent";
import { getAllProjectsAction } from "../../Actions/ProjectAction";
import { ProjectContext } from "../../contextApi/ProjectContextApi";
export default function ProjectPage({ initialProject }) {
  const { allProjectData, setallProjectData } = useContext(ProjectContext);

  setallProjectData(initialProject);

  return (
    <>
      <Layout>
        <ProjectListComponent />
      </Layout>
    </>
  );
}

// GET STATIC PROPS TO GET ALL PROJECTS
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
