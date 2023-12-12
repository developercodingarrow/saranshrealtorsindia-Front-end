import React, { useContext } from "react";
import SuperAdminPrivate from "../../../../private/SuperAdminPrivate";
import SuperAdminLayout from "../../../../Components/layouts/super admin layout/SuperAdminLayout";
import CreatePageUI from "../../../../Components/admin/Developer-project/CreatePageUI";
import { ProjectPageContext } from "../../../../contextApi/ProjectPageContextApi";
import { LocationContext } from "../../../../contextApi/LocationContextApi";

const optionList = ["sector 4", "sector 61"];

export default function CreateLOcationPage() {
  const { allLocation } = useContext(LocationContext);
  const { handelCreateLocationrProject } = useContext(ProjectPageContext);
  console.log(allLocation);
  return (
    <>
      <SuperAdminPrivate>
        <SuperAdminLayout>
          <CreatePageUI
            pageTitle="CREATE NEW LOCATION PAGE"
            submitHandel={handelCreateLocationrProject}
            slectType={"locationName"}
            propertyName="locationName"
            options={allLocation}
          />
        </SuperAdminLayout>
      </SuperAdminPrivate>
    </>
  );
}
