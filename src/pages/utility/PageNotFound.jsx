import React, { useState } from "react"
import { Link } from "react-router-dom"

import Sidebar from "../../partials/Sidebar"
import Header from "../../partials/Header"

import NotFoundImage from "../../images/404-illustration.svg"

function PageNotFound() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex overflow-hidden items-center h-screen bg-white justify-normal">
      {/* Sidebar */}
      {/* Content area */}
      <div className="flex overflow-y-auto overflow-x-hidden relative flex-col flex-1 bg-white">
        <main>
          <div className="px-4 py-8 mx-auto w-full sm:px-6 lg:px-8 max-w-9xl">
            <div className="m-auto mt-16 max-w-2xl">
              <div className="px-4 text-center">
                <div className="inline-flex mb-8">
                  <img
                    src={NotFoundImage}
                    width="176"
                    height="176"
                    alt="404 illustration"
                  />
                </div>
                <div className="mb-6">
                  Hmm...this page doesn’t exist. Try searching for something
                  else!
                </div>
                <Link
                  to="/"
                  className="text-white bg-indigo-500 btn hover:bg-indigo-600"
                >
                  Back To Dashboard
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PageNotFound
