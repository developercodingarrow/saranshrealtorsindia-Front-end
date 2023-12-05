import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./css/search.module.css";

export default function Search() {
  const [searchvalue, setsearchvalue] = useState("");
  const router = useRouter();
  const handelSearchValue = (e) => {
    const value = e.target.value;
    setsearchvalue(value);
    console.log(value);
  };

  const handelredirect = () => {
    router.push(`project?search=${searchvalue}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handelredirect();
    }
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search..."
          onChange={handelSearchValue}
          onKeyPress={handleKeyPress}
        />
        <div className={styles.searchIcon} onClick={handelredirect}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.94-5-5.78-5.34a6.505 6.505 0 0 0-7.53 7.53c.34 2.84 2.56 5.31 5.34 5.78a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
      </div>
    </>
  );
}
