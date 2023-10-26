import React from "react";
import style from "../../styles/FeatureListing.module.css";
import Card from "../../utilsComponents/Card";

export default function FeatureListing() {
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
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
