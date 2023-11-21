import React, { useState } from "react";
import styles from "./css/switchBtn.module.css";
import { getLoginCookies } from "../../Actions/authAction";

export default function SwitchBtn({ btnSatus, handelAction, dataId }) {
  const token = getLoginCookies();
  const [isOn, setIsOn] = useState(btnSatus);

  const toggleSwitch = (dataId) => {
    const requestData = { _id: dataId };
    handelAction(requestData, token);
    setIsOn(!isOn);
  };
  return (
    <div>
      <div
        className={`${
          isOn ? styles.toggle_switch : styles.toggle_switchActive
        } ${isOn ? styles.on : styles.off}`}
        onClick={() => toggleSwitch(dataId)}
      >
        <div className={styles.round_button}></div>
      </div>
    </div>
  );
}
