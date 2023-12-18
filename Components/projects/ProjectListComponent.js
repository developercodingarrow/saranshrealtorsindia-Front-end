import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import styles from "./css/projectListComponent.module.css";
import { AppContext } from "../../contextApi/AppContextApi";
import Card from "../../utilsComponents/Card";
import { ProjectContext } from "../../contextApi/ProjectContextApi";
import SideEnquireForm from "../../utilsComponents/form/SideEnquireForm";
import CardOne from "../../utilsComponents/cards/CardOne";
import SideBarFillterComponentns from "./SideBarFillterComponentns";
import { DeveloperContext } from "../../contextApi/DeveloperContextApi";
import useSideBarFillter from "../../custome-hook/useSideBarFillter";
import PageLoading from "../../utilsComponents/loading/PageLoading";

export default function ProjectListComponent() {
  const sidebarRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const { handelGetAllDeveloper, allDeveloper } = useContext(DeveloperContext);
  const { generateSampleData } = useSideBarFillter();

  const { allProjects, getAllProjectHandel, filteredProjects, isFectProject } =
    useContext(ProjectContext);
  const { handelToggleFillterDrawer, projectFillerDrawer } =
    useContext(AppContext);

  const [displayedProjects, setDisplayedProjects] = useState([]);
  const initialDisplayCount = 10;

  useEffect(() => {
    handelGetAllDeveloper();
    getAllProjectHandel();
  }, []);

  useEffect(() => {
    const initialProjects = filteredProjects.slice(0, initialDisplayCount);
    setDisplayedProjects(initialProjects);
  }, [filteredProjects]);

  const sampleData = generateSampleData(allDeveloper);

  const fillterDrawer = projectFillerDrawer
    ? styles.sideBar_container
    : styles.close_SideBar_container;

  // For Sidebar
  useEffect(() => {
    const sidebar = document.querySelector(`.${fillterDrawer}`);
    const initialTopPosition = 100;
    const scrollOffset = 15; // Adjust this value for the additional scroll before sidebar movement

    // Function to set initial top position on page load
    const setInitialTopPosition = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const topPosition = Math.max(
        0,
        initialTopPosition - scrollY + scrollOffset
      );
      sidebar.style.top = `${topPosition}px`;
    };

    // Set initial top position on page load
    setInitialTopPosition();

    // Event listener for scroll to adjust top position
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const topPosition = Math.max(
        0,
        initialTopPosition - scrollY + scrollOffset
      );
      sidebar.style.top = `${topPosition}px`;
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
              {displayedProjects.map((project, i) => {
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
