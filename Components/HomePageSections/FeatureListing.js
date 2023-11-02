import React, { useContext, useState } from "react";
import style from "../../styles/FeatureListing.module.css";
import Card from "../../utilsComponents/Card";
import { ProjectContext } from "../../contextApi/ProjectContextApi";

export default function FeatureListing() {
  const { allProjects } = useContext(ProjectContext);

  return (
    <>
      <div className={style.FeatureListing_mainContainer}>
        <div className={style.section_text}>
          <h3>Discover Our Featured Listings</h3>
          <p>
            Explore a curated selection of top-notch listings in our showcase of
            premier properties and exceptional real estate opportunities
          </p>
        </div>

        {/* List of product  */}
        <div className={style.Project_container}>
          {allProjects.map((el, i) => {
            return (
              <>
                <Card key={el._id} data={el} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
