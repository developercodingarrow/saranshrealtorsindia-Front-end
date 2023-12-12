import React, { useContext, useEffect } from "react";
import SuperAdminPrivate from "../../../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../../../Components/layouts/super admin layout/SuperAdminLayout";
import CreatePageUI from "../../../../Components/admin/Developer-project/CreatePageUI";
import { ProjectPageContext } from "../../../../contextApi/ProjectPageContextApi";
import { DeveloperContext } from "../../../../contextApi/DeveloperContextApi";

const optionList = ["Godrej", "GLS", "Signature"];

export default function CreateDeveloperPage() {
  const { allDeveloper, handelGetAllDeveloper } = useContext(DeveloperContext);
  const { handelDeveloperList, handelCreateDeveloperProject, setsending } =
    useContext(ProjectPageContext);

  console.log(allDeveloper);
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <CreatePageUI
            pageTitle="CREATE NEW DEVELOPER PAGE"
            submitHandel={handelCreateDeveloperProject}
            slectType={"developer"}
            propertyName="DeveloperName"
            options={allDeveloper}
          />
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
