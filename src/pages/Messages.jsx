import React, { useState, useEffect, useRef } from "react"

import Sidebar from "../partials/UserSidebar"
import Header from "../partials/UserHeader"
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
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div
        className="flex overflow-y-auto overflow-x-hidden relative flex-col flex-1"
        ref={contentArea}
      >
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="flex relative">
            <iframe
              className="bg-white airtable-embed airtable-dynamic-height z-1"
              src="https://airtable.com/embed/shrhtcfiJwO2PjCLf?backgroundColor=blue"
              frameborder="0"
              onmousewheel=""
              width="100%"
              height="800"
              style={{ background: "transparent", border: "1px solid #ccc" }}
              title="Airtable Form"
              onLoad={() => setLoaded(true)}
            />
            {!loaded ? <span className="absolute inset-0 p-4 -z-1">Loading...</span>:null}
            
          </div>
        </main>
      </div>
    </div>
  )
}

export default Messages
