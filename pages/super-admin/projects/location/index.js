import React, { useContext } from 'react'
import SuperAdminPrivate from '../../../../private/SuperAdminPrivate'
import SuperAdminLayout from '../../../../Components/layouts/super admin layout/SuperAdminLayout'
import CreatePageUI from '../../../../Components/admin/Developer-project/CreatePageUI'
import {ProjectPageContext} from '../../../../contextApi/ProjectPageContextApi'


const optionList = [ "sector 4", "sector 61",]

export default function CreateLOcationPage() {
    const {handelCreateLocationrProject} = useContext(ProjectPageContext)
  return (
    <>
    <SuperAdminPrivate>
        <SuperAdminLayout>
        <CreatePageUI pageTitle="CREATE NEW LOCATION PAGE" submitHandel={handelCreateLocationrProject}  slectType={"ProjectCity"}  options={optionList}/>
        </SuperAdminLayout>
    </SuperAdminPrivate>
    </>
  )
}
