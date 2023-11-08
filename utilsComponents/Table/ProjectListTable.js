import React from "react";
import CheckboxCustome from "../Custome Components/CheckboxCustome";
import Button from "../Custome Components/Button";

export default function ProjectListTable() {
  return (
    <div>
      <div style={{ margin: "10px" }}>
        <CheckboxCustome />
      </div>
      <div style={{ margin: "10px" }}>
        <Button type="edit" />
      </div>

      <div style={{ margin: "10px" }}>
        <Button type="delete" />
      </div>
    </div>
  );
}
