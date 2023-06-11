import React from "react"
import { Link } from "react-router-dom"
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
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + "..."
  }

  return (
    <>
      <article className="flex overflow-hidden bg-white rounded-sm border shadow-lg border-slate-200">
        <Link
          className="block relative w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to={`/user/registered/${_id}`}
        >
          <img
            className="object-cover object-center absolute w-full h-full"
            src={imageUrl}
            width="220"
            height="236"
            alt="Meetup 01"
          />
        </Link>
        <div className="flex flex-col p-5 grow">
          <div className="mb-2 text-sm font-semibold text-indigo-500 uppercase">
            <EventDisplay
              eventStartTime={eventStartTime}
              eventDuration={eventDuration}
            />
          </div>
          <Link className="inline-flex mb-2" to={`/user/registered/${_id}`}>
            <h3 className="text-lg font-bold text-slate-800">{eventName}</h3>
          </Link>
          <div className="text-sm">{truncateString(eventDetails, 180)}</div>
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
