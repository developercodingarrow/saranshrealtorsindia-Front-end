import React, { useContext, useState } from "react";
import style from "./css/FeatureListing.module.css";
import Card from "../../utilsComponents/Card";
import { ProjectContext } from "../../contextApi/ProjectContextApi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardOne from "../../utilsComponents/cards/CardOne";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1040 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 1035 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function FeatureListing() {
  const { allProjects } = useContext(ProjectContext);

  return (
    <>
      <div className={style.FeatureListing_mainContainer}>
        <div className={style.section_text}>
          <h3 className={"section_title"}>Discover Our Featured Listings</h3>
          <p className="section_descreption">
            Explore a curated selection of top-notch listings in our showcase of
            premier properties and exceptional real estate opportunities
          </p>
        </div>
        <div className={style.carousel_container}>
          <Carousel
            responsive={responsive}
            autoPlaySpeed={3000}
            infinite
            itemClass={style.carouselItem}
          >
            {allProjects?.map((el, i) => {
              return (
                <div key={el._id}>
                  <CardOne key={el._id} data={el} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
