import React, { useState, useEffect } from "react"
import axios from "axios"

import Sidebar from "../../partials/UserSidebar"
import Header from "../../partials/UserHeader"
import DialogflowMessenger from "../../utils/DialogflowMessenger"
import Tasks from "./Tasks"

function TasksList() {
  const [tasks, setTasks] = useState([])
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    axios
      .get("http://15.206.18.143:3000/events/list")
      .then((response) => {
        setTasks(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error)
      })
  }, [])

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
            {/* Smaller container */}
            <div className="mx-auto max-w-3xl">
              {/* Page header */}
              <div className="mb-8 sm:flex sm:justify-between sm:items-center">
                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-2xl font-bold md:text-3xl text-slate-800">
                    Follow Up
                  </h1>
                </div>
              </div>

              {/* Tasks */}
              <div className="space-y-6">
                {/* Group 1 */}
                <div>
                  <h2 className="mb-4 font-semibold truncate grow text-slate-800">
                    To Do's 🖋️
                  </h2>
                </div>

                {/* Group 2 */}
                <div>
                  <h2 className="mb-4 font-semibold truncate grow text-slate-800">
                    In Progress ✌️
                  </h2>
                  <div className="space-y-2">
                    {/* Task */}
                    {tasks.map((task) => (
                      <div
                        className="p-4 bg-white rounded-sm border shadow-lg border-slate-200"
                        draggable="true"
                        key={task._id}
                      >
                        <div className="sm:flex sm:justify-between sm:items-start">
                          {/* Left side */}
                          <Tasks task={task} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Group 3 */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default TasksList
