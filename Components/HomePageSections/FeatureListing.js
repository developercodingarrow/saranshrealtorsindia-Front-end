import React, { useContext, useState } from "react";
import { ProjectContext } from "../../contextApi/ProjectContextApi";
import useFilterProjects from "../../custome-hook/useFilterProjects";
import FiledProject from "./FiledProjects";

export default function FeatureListing() {
  const { allProjects } = useContext(ProjectContext);
  const { filterProjectsByTrueStatus } = useFilterProjects(allProjects);
  const fetureProjects = filterProjectsByTrueStatus("Featured");
  return (
    <>
    
      <FiledProject
        sectionTitle="Discover Our Featured Listings"
        sectionDescreption="Explore a curated selection of top-notch listings in our showcase of
            premier properties and exceptional real estate opportunities"
        projects={fetureProjects}
      />
    </>
  );
}
