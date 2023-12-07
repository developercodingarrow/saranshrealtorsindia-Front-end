import React, { useContext, useEffect } from "react";
import Layout from "../../Components/layouts/Layout";
import { getAllBlogsAction } from "../../Actions/blogAction";
import { BlogContext } from "../../contextApi/BlogContextApi";
import BlogListComponent from "../../Components/blog/BlogListComponent";

export default function BlogsListPage({ initialProject }) {
  const { allblogsList, setallblogsList } = useContext(BlogContext);

  useEffect(() => {
    // Update allblogsList after initial render
    setallblogsList(initialProject);
  }, [initialProject]);

  return (
    <>
      <div>
        <Layout>
          <BlogListComponent />
        </Layout>
      </div>
    </>
  );
}

// GET STATIC PROPS TO GET ALL PROJECTS
export async function getServerSideProps() {
  console.log("run");
  try {
    const result = await getAllBlogsAction();

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
