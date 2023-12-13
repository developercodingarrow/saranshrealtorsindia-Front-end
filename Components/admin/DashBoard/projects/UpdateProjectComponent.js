import React from "react";
import AdminContdentUI from "../AdminContdentUI";
import UpdateProjectForm from "../../../../utilsComponents/form/UpdateProjectForm";

export default function UpdateProjectComponent() {
  return (
    <>
      <div>
        <AdminContdentUI pageTitle={"UPDATE PROJECT"}>
          <UpdateProjectForm />
        </AdminContdentUI>
      </div>
    </>
  );
}
