import React, { useState } from "react";
import style from "../../styles/Custome-Components-css/CustomCheckbox.module.css";

export default function CheckboxCustome() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div>
        <label className={style.checkboxLabel}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className={style.hiddenCheckbox}
          />
          <span className={style.customCheckbox}></span>
        </label>
      </div>
    </>
  );
}
