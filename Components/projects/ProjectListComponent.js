import React, { useContext, useEffect } from "react";
import styles from "./css/projectListComponent.module.css";
import { AppContext } from "../../contextApi/AppContextApi";
import Card from "../../utilsComponents/Card";
import { ProjectContext } from "../../contextApi/ProjectContextApi";
import SideEnquireForm from "../../utilsComponents/form/SideEnquireForm";
import CardOne from "../../utilsComponents/cards/CardOne";
import SideBarFillterComponentns from "./SideBarFillterComponentns";

const sampleData = [
  {
    title: "brand",
    items: ["Godrej", "GLS", "DLF"],
  },
  {
    title: "size",
    items: ["2BHK", "3BHK"],
  },
  {
    title: "category",
    items: ["Commercial", "Residential"],
  },
];

export default function ProjectListComponent() {
  const { allProjects, getAllProjectHandel, filteredProjects } =
    useContext(ProjectContext);
  const { handelToggleFillterDrawer, projectFillerDrawer } =
    useContext(AppContext);

  useEffect(() => {
    getAllProjectHandel();
  }, []);

  const fillterDrawer = projectFillerDrawer
    ? styles.sideBar_container
    : styles.close_SideBar_container;

  useEffect(() => {
    const sidebar = document.querySelector(`.${fillterDrawer}`);
    const initialTopPosition = 100;
    const scrollOffset = 15; // Adjust this value for the additional scroll before sidebar movement

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > initialTopPosition + scrollOffset) {
        sidebar.style.top = "0px"; // Change this value to move sidebar up when scrolled down
      } else {
        sidebar.style.top = initialTopPosition - scrollY + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.Page_mainContainer}>
      <div className={styles.inner_Container}>
        <div className={fillterDrawer}>
          <div>
            {sampleData.map((el, i) => {
              return (
                <div key={i}>
                  <SideBarFillterComponentns
                    title={el.title}
                    items={el.items}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.content_Conatiner}>
          <div className={styles.content_wrapper}>
            <div
              className={styles.fillter_barContainer}
              onClick={handelToggleFillterDrawer}
            >
              Fiilter bar
            </div>
            <div className={styles.project_card_wrapper}>
              {filteredProjects.map((project, i) => {
                return <CardOne key={i} data={project} />;
              })}
            </div>
          </div>
          <div className={styles.sideForm_Container}>
            <div className={styles.inner_container}>
              <SideEnquireForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
