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

  // Map each category to a color
  const categoryColors = {
    "Child Education and Enrichment": "#f39c12", // orange
    // blue
    "Women's Rights": "#9b59b6", // purple
    "Financial Literacy": "#2ecc71", // green
    "Health and Wellbeing": "#e74c3c", // red
    "Government Assistance Programs": "#34495e", // dark blue
    "Employment and Career Development": "#16a085", // teal
  };

  useEffect(() => {
    axios
      .get("http://15.206.18.143:3000/events/list")
      .then((response) => {
        const fetchedEvents = response.data.map((event) => ({
          title: event.eventName,
          start: new Date(event.eventStartTime),
          end: new Date(event.eventStartTime),
          id: event._id, // Ensure this field exists in your API response
          // Use the category to determine the color of the event
          category: event.category,
        }));
        setEvents(fetchedEvents);
      })
      .catch((error) => {
        console.error("Error fetching events", error);
      });
  }, []);

  const handleEventSelect = (event) => {
    navigate(`/event/${event.id}`);
  };
  const eventStyleGetter = (event, start, end, isSelected) => {
    var backgroundColor = categoryColors[event.category];
    var style = {
      backgroundColor: backgroundColor,
      borderRadius: "5px", // rounded corners
      opacity: 0.8,
      color: "white", // change text color to white for better contrast
      border: "0px",
      display: "block",
      fontWeight: "bold", // bold text
      padding: "5px", // space around the text
    };
    return {
      style: style,
    };
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
              eventPropGetter={eventStyleGetter}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MyCalendar;
