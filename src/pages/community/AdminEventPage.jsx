import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import React from "react"
import EventDisplay from "./DateFormat"
import DialogflowMessenger from "../../utils/DialogflowMessenger"
import QRCode from "react-qr-code"

import Sidebar from "../../partials/Sidebar"
import Header from "../../partials/Header"
import { Link } from "react-router-dom"
import useUser from "../../../hooks/useUser"

export default function EventPost() {
  const [postInfo, setPostInfo] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { id } = useParams()

  const { user } = useUser()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/events/list/${id}`).then(
      (response) => {
        response.json().then((data) => {
          setPostInfo(data)
        })
      }
    )
  }, [])

  if (!postInfo) return ""

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
                    to="/events/list/"
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
                <div className="flex flex-col justify-between items-center p-5 mb-0 space-x-1 text-sm font-semibold bg-white rounded-sm border shadow-lg border-slate-200 text-slate-800 lg:w-72 xl:w-80">
                  <div className="mb-4 text-lg text-center">
                    Attendance QR Code
                  </div>
                  <div className="flex justify-center items-center w-full max-w-xs">
                    <QRCode value={id} />
                  </div>
                </div>
                <div className="flex justify-between p-5 mb-0 space-x-1 text-sm font-semibold bg-white rounded-sm border shadow-lg border-slate-200 text-slate-800 lg:w-72 xl:w-80">
                  <div className="">
                    Registered Users ({postInfo.registered.length})
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
