import React, { useContext, useState } from "react";
import styles from "./css/SideBarFillterComponentns.module.css";
import { ProjectContext } from "../../contextApi/ProjectContextApi";

export default function SideBarFillterComponentns(props) {
  const { title, items } = props;
  const [isExpend, setisExpend] = useState(true);
  const { handleFilterChange, selectedFilters } = useContext(ProjectContext);
  const handelIsExpend = () => {
    setisExpend(!isExpend);
    console.log(isExpend);
  };
  return (
    <>
      <div className={styles.filed_wraper}>
        <div className={styles.filed_header} onClick={handelIsExpend}>
          <p>{title}</p>
          <p>+</p>
        </div>
        <div
          className={`${styles.filed_ListWraper} ${
            isExpend ? styles.filed_ListWraper : styles.filed_ListWraperClose
          }`}
        >
          {items.map((el, i) => {
            return (
              <div className={styles.filed_list} key={i}>
                <div>
                  <input
                    type="checkbox"
                    value={el}
                    checked={selectedFilters[title]?.includes(el)}
                    onChange={(e) => handleFilterChange(title, e.target.value)}
                  />
                </div>
                <div>{el}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
