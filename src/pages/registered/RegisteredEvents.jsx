import React, { useState } from "react"

import Sidebar from "../../partials/UserSidebar"
import Header from "../../partials/UserHeader"
import EventsPosts from "./EventsPosts"
import DialogflowMessenger from "../../utils/DialogflowMessenger"

function RegisteredEventsList() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex overflow-hidden h-screen">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="flex overflow-y-auto overflow-x-hidden relative flex-col flex-1">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <DialogflowMessenger />

        <main>
          <div className="px-4 py-8 mx-auto w-full sm:px-6 lg:px-8 max-w-9xl">
            {/* Page header */}
            {/* Content */}
            {/* <EventsList events={eventsList} /> */}
            <EventsPosts />
          </div>
        </main>
      </div>
    </div>
  )
}

export default RegisteredEventsList
