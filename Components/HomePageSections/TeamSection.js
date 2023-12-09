import React from "react";
import styles from "./css/teamSection.module.css";
import Image from "next/image";
import team1 from "../../public/Company-logo/team-1.png";
export default function TeamSection() {
  return (
    <>
      <div className={styles.TeamSection_mainContainer}>
        <div className={styles.static_container}>
          <div>
            <h3>Meet Our Team</h3>
          </div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
        </div>
        <div className={styles.Team_cardBox}>
          <div className={styles.team_card}>
            <div className={styles.image_Warpper}>
              <div className={styles.thumblinBox}>
                <Image
                  src={team1}
                  width={300}
                  height={300}
                  className={styles.thumblin_Style}
                />
              </div>
            </div>
            <div className={styles.team_name}>Shashi Gupta</div>
            <div className={styles.team_degination}>CMD</div>
          </div>

          <div className={styles.team_card}>
            <div className={styles.image_Warpper}>
              <div className={styles.thumblinBox}>
                <Image
                  src={team1}
                  width={300}
                  height={300}
                  className={styles.thumblin_Style}
                />
              </div>
            </div>
            <div className={styles.team_name}>Shashi Gupta</div>
            <div className={styles.team_degination}>CMD</div>
          </div>

          <div className={styles.team_card}>
            <div className={styles.image_Warpper}>
              <div className={styles.thumblinBox}>
                <Image
                  src={team1}
                  width={300}
                  height={300}
                  className={styles.thumblin_Style}
                />
              </div>
            </div>
            <div className={styles.team_name}>Shashi Gupta</div>
            <div className={styles.team_degination}>CMD</div>
          </div>

          <div className={styles.team_card}>
            <div className={styles.image_Warpper}>
              <div className={styles.thumblinBox}>
                <Image
                  src={team1}
                  width={300}
                  height={300}
                  className={styles.thumblin_Style}
                />
              </div>
            </div>
            <div className={styles.team_name}>Shashi Gupta</div>
            <div className={styles.team_degination}>CMD</div>
          </div>
        </div>
      </div>
    </>
  );
}
