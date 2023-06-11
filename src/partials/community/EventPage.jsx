import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import EventDisplay from "./DateFormat";
import axios from "axios";
import DialogflowMessenger from "../../utils/DialogflowMessenger";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import useUser from "../../../hooks/useUser";
import { Link } from "react-router-dom";

export default function RegisteredEventPost() {
  const [postInfo, setPostInfo] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { id } = useParams();
  const [isAttended, setIsAttended] = useState(false);
  const attended = postInfo ? postInfo.attended.length : 0;
  const registered = postInfo ? postInfo.registered.length : 0;
  const didNotAttend = registered - attended;
  const { user } = useUser()
  const userID = user._id

 

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/events/list/${id}`).then((response) => {
      response.json().then((data) => {
        setPostInfo(data);
      });
    });
  }, []);
  const attendEvent = async () => {
    if (postInfo) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_ADDRESS}/user/attendAnEvent`,
          {
            eventId: postInfo._id,
            userId: userID,
          }
        );

        if (response.data.message === "Success !!") {
          setIsAttended(true);
        } else {
          alert("Error: " + response.data.message);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        if (
          error.response &&
          error.response.data.message ===
            "User is already registered for this event."
        ) {
          alert("You have already attended this event.");
          setIsAttended(true);
        } else {
          alert("An error occurred. Please try again.");
        }
      }
    }
  };

  if (!postInfo) return "";

  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex overflow-y-auto overflow-x-hidden relative flex-col flex-1">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <DialogflowMessenger />
        <main>
          <div className="px-4 py-8 w-full sm:px-6 lg:px-8">
            <div className="flex flex-col mx-auto max-w-5xl lg:flex-row lg:space-x-8 xl:space-x-16">
              <div>
                <div className="mb-6">
                  <Link
                    className="px-3 bg-white btn-sm border-slate-200 hover:border-slate-300 text-slate-600"
                    to="/registered"
                  >
                    <svg
                      className="mr-2 fill-current text-slate-400"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                    >
                      <path d="M5.4.6 6.8 2l-4 4 4 4-1.4 1.4L0 6z" />
                    </svg>
                    <span>Back To Events</span>
                  </Link>
                </div>
                <div className="mb-2 text-sm font-semibold text-indigo-500 uppercase">
                  <EventDisplay
                    eventStartTime={postInfo.eventStartTime}
                    eventDuration={postInfo.eventDuration}
                  />
                </div>
                <header className="mb-4">
                  <h1 className="mb-2 text-2xl font-bold md:text-3xl text-slate-800">
                    {postInfo.eventName}
                  </h1>
                </header>
                <div className="mb-6 space-y-3 sm:flex sm:items-center sm:justify-between sm:space-y-0">
                  <div className="flex flex-wrap items-center space-x-2 sm:justify-end">
                    <div className="text-xs inline-flex items-center font-medium bg-white text-slate-600 rounded-full text-center px-2.5 py-1">
                      <span>{postInfo.category}</span>
                    </div>
                    <div className="text-xs inline-flex font-medium uppercase bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1">
                      {postInfo.location}
                    </div>
                  </div>
                </div>
                <figure className="mb-6">
                  <img
                    className="w-full rounded-sm"
                    src={postInfo.imageUrl}
                    width="640"
                    height="360"
                    alt="Meetup"
                  />
                </figure>
                <div>
                  <h2 className="mb-2 text-xl font-bold leading-snug text-slate-800">
                    Session Details
                  </h2>
                  <p className="mb-6">{postInfo.eventDetails}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-5 bg-white rounded-sm border shadow-lg border-slate-200 lg:w-72 xl:w-80">
                  <div className="space-y-2">
                    {isAttended ? (
                      <button
                        className="w-full text-white bg-green-500 btn hover:bg-green-600"
                        disabled
                      >
                        <svg
                          className="w-4 h-4 fill-current shrink-0"
                          viewBox="0 0 16 16"
                        >
                          <path d="m2.457 8.516.969-.99 2.516 2.481 5.324-5.304.985.989-6.309 6.284z" />
                        </svg>
                        <span className="ml-1">Attended</span>
                      </button>
                    ) : (
                      <button
                        className="w-full text-white bg-indigo-500 btn hover:bg-indigo-600"
                        onClick={attendEvent}
                        disabled={!postInfo}
                      >
                        <svg
                          className="w-4 h-4 fill-current shrink-0"
                          viewBox="0 0 16 16"
                        >
                          <path d="m2.457 8.516.969-.99 2.516 2.481 5.324-5.304.985.989-6.309 6.284z" />
                        </svg>
                        <span className="ml-1">Attending</span>
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex justify-between p-5 mb-0 space-x-1 text-sm font-semibold bg-white rounded-sm border shadow-lg border-slate-200 text-slate-800 lg:w-72 xl:w-80">
                  <div className="">
                    Registered ({postInfo.registered.length})
                  </div>
                  <div className="">Attended ({postInfo.attended.length})</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
