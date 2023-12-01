import React from 'react'
import SuperAdminPrivate from '../../../../private/SuperAdminPrivate'
import SuperAdminLayout from '../../../../Components/layouts/super admin layout/SuperAdminLayout'
import CreatePageUI from '../../../../Components/admin/Developer-project/CreatePageUI'

export default function CreateDeveloperPage() {
  return (
    <>
    <SuperAdminPrivate>
        <SuperAdminLayout>
            <CreatePageUI pageTitle="CREATE NEW DEVELOPER PAGE" />
        </SuperAdminLayout>
    </SuperAdminPrivate>
    </>
  )
}
