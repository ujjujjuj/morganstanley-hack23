import React from "react"
import { Link } from "react-router-dom"
import { format } from "date-fns"
import EventDisplay from "./DateFormat"

function MeetupsPosts({
  _id,
  eventName,
  category,
  location,
  eventDuration,
  eventStartTime,
  eventDetails,
  imageUrl,
}) {
  // Function to truncate the string
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + "..."
  }

  return (
    <>
      {/* Item 1 */}
      <article className="flex overflow-hidden bg-white rounded-sm border shadow-lg border-slate-200">
        {/* Image */}
        <Link
          className="block relative w-20 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to={`/user/event/${_id}`}
        >
          <img
            className="object-cover object-center absolute w-full h-full"
            src={imageUrl}
            width="220"
            height="236"
            alt="Meetup 01"
          />
        </Link>
        {/* Content */}
        <div className="flex flex-col p-4 grow sm:p-5">
          {" "}
          {/* Adjusted padding */}
          {/* Event date */}
          <div className="mb-2 text-sm font-semibold text-indigo-500 uppercase">
            <EventDisplay
              eventStartTime={eventStartTime}
              eventDuration={eventDuration}
            />
          </div>
          <Link className="inline-flex mb-2" to={`/user/event/${_id}`}>
            {/* event name */}
            <h3 className="text-base font-bold sm:text-lg text-slate-800">
              {eventName}
            </h3>{" "}
            {/* Adjusted font size */}
          </Link>
          {/* Event details */}
          <div className="text-xs sm:text-sm">
            {truncateString(eventDetails, 180)}
          </div>{" "}
          {/* Adjusted font size */}
          {/* Footer */}
          <div className="flex justify-between mt-3">
            {/* Tag */}
            <div className="text-xs inline-flex items-center font-medium bg-slate-100 text-slate-600 rounded-full text-center px-2.5 py-1">
              <span>{category}</span> {/* Event Type */}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default MeetupsPosts
