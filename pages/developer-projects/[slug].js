import React from 'react';
import Layout from '../../Components/layouts/Layout'
import CategoriesPage from '../../Components/CategoriesComponent/CategoriesPage'
import {DeveloperProjectsAction} from '../../Actions/pageAction';


export default function DeveloperProjectsPage({ initialProject }) {
 
  const projects = initialProject.projects 
  const developer = initialProject.developer
  return (
    <>
    <Layout>
        <CategoriesPage projectBy={developer} projects={projects} />
    </Layout>
    </>
  )
}



// GET STATIC PROPS TO GET ALL PROJECTS
export async function getServerSideProps(context) {
  try {
    console.log(context.params);
    const { slug } = context.params;
    console.log(slug);

    const result = await DeveloperProjectsAction(slug);

    return {
      props: {
        initialProject: result
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


