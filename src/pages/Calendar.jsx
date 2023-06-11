import React, { useState, useEffect } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import axios from "axios"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useNavigate } from "react-router-dom"
import DialogflowMessenger from "../utils/DialogflowMessenger"
import Sidebar from "../partials/UserSidebar"
import Header from "../partials/UserHeader"
import "react-big-calendar/lib/css/react-big-calendar.css"
import "./MyCalendar.css"

const localizer = momentLocalizer(moment)

function MyCalendar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [events, setEvents] = useState([])
  const navigate = useNavigate()
 
  const categoryColors = {
    "Child Education and Enrichment": "#f39c12", // orange
    "Women's Rights": "#9b59b6", // purple
    "Financial Literacy": "#2ecc71", // green
    "Health and Wellbeing": "#e74c3c", // red
    "Government Assistance Programs": "#34495e", // dark blue
    "Employment and Career Development": "#16a085", // teal
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_ADDRESS}/events/list`)
      .then((response) => {
        const fetchedEvents = response.data.map((event) => ({
          title: event.eventName,
          start: new Date(event.eventStartTime),
          end: new Date(event.eventStartTime),
          id: event._id, 
          category: event.category,
        }))
        setEvents(fetchedEvents)
      })
      .catch((error) => {
        console.error("Error fetching events", error)
      })
  }, [])

  const handleEventSelect = (event) => {
    navigate(`/user/event/${event.id}`)
  }
  const eventStyleGetter = (event, start, end, isSelected) => {
    var backgroundColor = categoryColors[event.category]
    var style = {
      backgroundColor: backgroundColor,
      borderRadius: "5px", 
      opacity: 0.8,
      color: "white", 
      border: "0px",
      display: "block",
      fontWeight: "bold",
      padding: "5px", 
    }
    return {
      style: style,
    }
  }
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex overflow-y-auto overflow-x-hidden relative flex-col flex-1">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="p-2 sm:p-10">
          <div className="mb-8 sm:flex sm:justify-between sm:items-center">
            <div className="mb-1  mt-4 sm:mt-0 ml-3 sm:mb-0">
              <h1 className="text-2xl font-bold md:text-3xl text-slate-800">
                Event Calender
              </h1>
            </div>
          </div>
          <div className=" h-[30rem] sm:h-[35rem] ">
            <Calendar
              localizer={localizer}
              defaultDate={new Date()}
              defaultView="month"
              events={events}
              onSelectEvent={handleEventSelect}
              eventPropGetter={eventStyleGetter}
            />
          </div>
        </main>
      </div>
    </div>
  )
}

export default MyCalendar
