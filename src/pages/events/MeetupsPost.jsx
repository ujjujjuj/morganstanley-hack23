import React from "react"
import { Link } from "react-router-dom"
import EventDisplay from "./DateFormat"

function MeetupsPosts({
  _id,
  eventName,
  category,
  eventLocation,
  eventDuration,
  eventStartTime,
  eventDetails,
  imageUrl,
}) {
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + "..."
  }

  return (
    <>
      <article className="flex overflow-hidden flex-col bg-white rounded-sm border shadow-lg md:flex-row border-slate-200">
        <Link
          className="block relative w-full h-48 md:h-auto md:w-20 2xl:sidebar-expanded:w-56 shrink-0"
          to={`/events/list/${_id}`}
        >
          <img
            className="object-cover object-center absolute w-full h-full"
            src={imageUrl}
            alt="Meetup 01"
          />
        </Link>
        <div className="flex flex-col p-4 grow sm:p-5">
          <div className="mb-2 text-sm font-semibold text-indigo-500 uppercase">
            <EventDisplay
              eventStartTime={eventStartTime}
              eventDuration={eventDuration}
            />
          </div>
          <Link className="inline-flex mb-2" to={`/events/list/${_id}`}>
            <h3 className="text-base font-bold sm:text-lg text-slate-800">
              {eventName}
            </h3>
          </Link>
          <div className="text-xs sm:text-sm">
            {truncateString(eventDetails, 180)}
          </div>
          <div className="flex justify-between mt-3">
            <div className="text-xs inline-flex items-center font-medium bg-slate-100 text-slate-600 rounded-full text-center px-2.5 py-1">
              <span>{category}</span>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default MeetupsPosts
