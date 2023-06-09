import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import axios from "axios";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useNavigate } from "react-router-dom";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./MyCalender.css";

const localizer = momentLocalizer(moment);

function MyCalendar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://15.206.18.143:3000/events/list")
      .then((response) => {
        const fetchedEvents = response.data.map((event) => ({
          title: event.eventName,
          start: new Date(event.eventStartTime),
          end: new Date(event.eventStartTime),
          id: event._id, // Ensure this field exists in your API response
        }));
        setEvents(fetchedEvents);
      })
      .catch((error) => {
        console.error("Error fetching events", error);
      });
  }, []);

  const handleEventSelect = (event) => {
    navigate(`/events/list/${event.id}`);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className=" p-10">
          <div style={{ height: "500px" }}>
            <Calendar
              localizer={localizer}
              defaultDate={new Date()}
              defaultView="month"
              events={events}
              style={{ height: "100%" }}
              onSelectEvent={handleEventSelect}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MyCalendar;
