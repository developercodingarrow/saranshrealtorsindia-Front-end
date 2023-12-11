import React from "react";
import styles from "./css/teamSection.module.css";
import Image from "next/image";
import { TeamMember } from "../../jsonData/homePageData";

export default function TeamSection() {
  return (
    <>
      <div className={styles.TeamSection_mainContainer}>
        <div className={styles.static_container}>
          <div>
            <h3 className={"section_title"}>Meet Our Team</h3>
          </div>
          <div className="section_descreption">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </div>
        </div>
        <div className={styles.Team_cardBox}>
          {TeamMember.map((el, i) => {
            return (
              <div className={styles.team_card} key={i}>
                <div className={styles.image_Warpper}>
                  <div className={styles.thumblinBox}>
                    <Image
                      src={`/team-member/${el.photo}`}
                      width={300}
                      height={300}
                      className={styles.thumblin_Style}
                    />
                  </div>
                </div>
                <div className={styles.team_name}>{el.name}</div>
                <div className={styles.team_degination}>{el.designation}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
