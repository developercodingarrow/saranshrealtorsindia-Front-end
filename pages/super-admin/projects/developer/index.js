import React, { useContext } from 'react'
import SuperAdminPrivate from '../../../../private/SuperAdminPrivate'
import SuperAdminLayout from '../../../../Components/layouts/super admin layout/SuperAdminLayout'
import CreatePageUI from '../../../../Components/admin/Developer-project/CreatePageUI'
import {ProjectPageContext} from '../../../../contextApi/ProjectPageContextApi'


const optionList = [ "Godrej", "GLS", "Signature"]

export default function CreateDeveloperPage() {
  const {handelDeveloperList , handelCreateDeveloperProject , setsending} = useContext(ProjectPageContext)
  return (
    <>
    <SuperAdminPrivate>
        <SuperAdminLayout>
            <CreatePageUI pageTitle="CREATE NEW DEVELOPER PAGE" submitHandel={handelCreateDeveloperProject} slectType={"developer"} options={optionList} />
        </SuperAdminLayout>
    </SuperAdminPrivate>
    </>
  )
}
