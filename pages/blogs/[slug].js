import React, { useContext } from "react";
import Layout from "../../Components/layouts/Layout";
import SingleBlogComponent from "../../Components/blog/SingleBlogComponent";
import { getSingleBlogsAction } from "../../Actions/blogAction";
import { useRouter } from "next/router";
import { BlogContext } from "../../contextApi/BlogContextApi";

export default function SingleBlogPage({ initialProject }) {
  const router = useRouter();
  const { singleBlog, setsingleBlog } = useContext(BlogContext);

  setsingleBlog(initialProject);
  return (
    <div>
      <Layout>
        <SingleBlogComponent />
      </Layout>
    </div>
  );
}

// GET STATIC PROPS TO GET ALL PROJECTS
export async function getServerSideProps(context) {
  try {
    console.log("run");
    console.log(context.params);
    const { slug } = context.params;
    console.log(slug);

    const result = await getSingleBlogsAction(slug);

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
