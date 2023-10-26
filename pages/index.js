import Head from "next/head";
import Image from "next/image";
import Layout from "../Components/layouts/Layout";
import FeatureListing from "../Components/HomePageSections/FeatureListing";

export default function Home() {
  return (
    <>
      <Layout>
        <FeatureListing />
      </Layout>
    </>
  );
}
