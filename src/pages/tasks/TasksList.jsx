import React, { useState, useEffect } from "react";
import axios from "axios";
import useUser from "../../../hooks/useUser"

import Sidebar from "../../partials/UserSidebar"
import Header from "../../partials/UserHeader"
import DialogflowMessenger from "../../utils/DialogflowMessenger";
import Tasks from "./Tasks";
import Feedback from "./Feedback"; // Import the Feedback component

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [followUps, setFollowUps] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Get token from local storage
  const { user } = useUser()
  const userID = user._id

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_ADDRESS}/user/getFollowUpPending/${userID}`)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .get(`${import.meta.env.VITE_SERVER_ADDRESS}/user/getFollowUpDone/${userID}`)
      .then((response) => {
        setFollowUps(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <DialogflowMessenger />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Smaller container */}
            <div className="max-w-3xl mx-auto">
              {/* Page header */}
              <div className="sm:flex sm:justify-between sm:items-center mb-8">
                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                    Follow-Up Feedback
                  </h1>
                </div>
              </div>

              {/* Tasks */}
              <div className="space-y-3">
                {/* Group 1 */}

                {/* Group 2 */}
                <div>
                  <h2 className="grow font-semibold text-slate-800 truncate mb-4"></h2>
                  <div className="space-y-2">
                    {/* Task */}
                    {tasks.map((task) => (
                      <div
                        className="bg-white shadow-lg rounded-sm mb-4 border border-slate-200 p-4"
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
              <div>
                <h1 className="text-2xl md:text-3xl mt-10 mb-2 text-slate-800 font-bold">
                  Give Feedback
                </h1>
                <div className="space-y-2 ">
                  {followUps.map((followUp) => (
                    <Feedback key={followUp._id} followUp={followUp} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TasksList;
