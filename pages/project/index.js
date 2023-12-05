import React, { useContext } from "react";
import Layout from "../../Components/layouts/Layout";
import ProjectListComponent from "../../Components/projects/ProjectListComponent";
import {
  getAllProjectsAction,
  searchProjectsAction,
} from "../../Actions/ProjectAction";
import { ProjectContext } from "../../contextApi/ProjectContextApi";
import queryString from "query-string";
export default function ProjectPage({ initialProject }) {
  const { allProjectData, setallProjectData, setisFectProject } =
    useContext(ProjectContext);

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
export async function getServerSideProps(context) {
  try {
    // Extract the search query from the URL query parameters
    const qs = queryString.stringify(context.query);

    // If there's a search query, perform the search action
    if (qs) {
      const result = await searchProjectsAction(qs);
      return {
        props: {
          initialProject: result.data.result,
        },
      };
    }

    const result = await getAllProjectsAction();
    return {
      props: {
        initialProject: result.data.result,
      },
    };
  } catch (error) {
    return {
      props: {
        initialProject: {},
      },
    };
  }
}
