import React, { useState, useEffect, useRef } from "react"

import Sidebar from "../partials/Sidebar"
import Header from "../partials/Header"
import DialogflowMessenger from "../utils/DialogflowMessenger"

function Messages() {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = "https://static.airtable.com/js/embed/embed_snippet_v1.js"
    script.async = true

    document.body.appendChild(script)
  }, [])

  const contentArea = useRef(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [loaded, setLoaded] = useState(false)

  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className="flex overflow-y-auto overflow-x-hidden relative flex-col flex-1"
        ref={contentArea}
      >
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 py-8 mx-auto w-full sm:px-6 lg:px-8 max-w-9xl">
            <div className="mb-8 sm:flex sm:justify-between sm:items-center">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl font-bold md:text-3xl text-slate-800">
                  Support Responses
                </h1>
              </div>
            </div>
            <iframe
              className="airtable-embed"
              src="https://airtable.com/embed/shr2EMp9aWNMA8KxW?backgroundColor=blue&viewControls=on"
              frameborder="0"
              onmousewheel=""
              width="100%"
              height="533"
              style={{ background: "transparent", border: "1px solid #ccc" }}
              title="Airtable Data"
            />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Messages
