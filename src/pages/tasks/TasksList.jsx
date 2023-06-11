import React, { useState, useEffect } from "react";
import axios from "axios";
import useUser from "../../../hooks/useUser"
import Sidebar from "../../partials/UserSidebar"
import Header from "../../partials/UserHeader"
import DialogflowMessenger from "../../utils/DialogflowMessenger";
import Tasks from "./Tasks";
import Feedback from "./Feedback"; 

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [followUps, setFollowUps] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <DialogflowMessenger />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="sm:flex sm:justify-between sm:items-center mb-8">
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                    Follow-Up Feedback
                  </h1>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h2 className="grow font-semibold text-slate-800 truncate mb-4"></h2>
                  <div className="space-y-2">
                    {tasks.map((task) => (
                      <div
                        className="bg-white shadow-lg rounded-sm mb-4 border border-slate-200 p-4"
                        draggable="true"
                        key={task._id}
                      >
                        <div className="sm:flex sm:justify-between sm:items-start">
                          <Tasks task={task} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
