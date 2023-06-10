import React, { useState } from "react"

import Sidebar from "../../partials/UserSidebar"
import Header from "../../partials/UserHeader"
import SettingsSidebar from "../../partials/settings/SettingsSidebar"
import Socioeconomic from "../../partials/settings/Socioeconomic"
import { useTranslation } from "react-i18next"

function SocioeconomicStatus() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { i18n } = useTranslation()
  const { t } = useTranslation()

  return (
    <div className="flex overflow-hidden h-screen">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="flex overflow-y-auto overflow-x-hidden relative flex-col flex-1">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 py-8 mx-auto w-full sm:px-6 lg:px-8 max-w-9xl">
            {/* Page header */}
            <div className="mb-8">
              {/* Title */}
              <h1 className="text-2xl font-bold md:text-3xl text-slate-800">
                {t("MyProfile")}
              </h1>
            </div>

            {/* Content */}
            <div className="mb-8 bg-white rounded-sm shadow-lg">
              <div className="flex flex-col md:flex-row md:-mr-px">
                <SettingsSidebar />
                <Socioeconomic />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SocioeconomicStatus
