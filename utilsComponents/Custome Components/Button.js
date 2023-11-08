import React from "react";
import style from "../../styles/Custome-Components-css/buttons.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Button({ type }) {
  return (
    <>
      <div>
        <button className={style.creativeButton}>
          {type === "edit" ? <FaEdit /> : <FaTrash />}
        </button>
      </div>
    </>
  );
}
