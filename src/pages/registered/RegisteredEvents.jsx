import React, { useState } from "react"

import Sidebar from "../../partials/UserSidebar"
import Header from "../../partials/UserHeader"
import EventsPosts from "./EventsPosts"
import DialogflowMessenger from "../../utils/DialogflowMessenger"

function RegisteredEventsList() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex overflow-y-auto overflow-x-hidden relative flex-col flex-1">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <DialogflowMessenger />
        <main>
          <div className="px-4 py-8 mx-auto w-full sm:px-6 lg:px-8 max-w-9xl">
            <EventsPosts />
          </div>
        </main>
      </div>
    </div>
  )
}

export default RegisteredEventsList
