import React, { useState, useEffect } from "react"

import EventsTableItem from "./EventsTableItem"

function EventsTable({ selectedItems, factor, value }) {
  const [selectAll, setSelectAll] = useState(false)
  const [isCheck, setIsCheck] = useState([])
  const [list, setList] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_ADDRESS}/events`
        )
        const data = await response.json()
        console.log(data.result)
        const customers = data.result
        const ans = [...customers].reverse()
        setList(ans)
      } catch (error) {
        console.log("Error:", error)
      }
    }
    fetchData()
  }, [])

  const searchEventCollections = (f, v) => {
    const filteredCollections = list.filter((collection) => {
      return collection[f] === v
    })
    setList(filteredCollections)
  }

  useEffect(() => {
    async function fetchData2() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_ADDRESS}/events`
        )
        const data = await response.json()
        console.log(data.result)
        const customers = data.result
        const ans = [...customers].reverse()
        setList(ans)
      } catch (error) {
        console.log("Error:", error)
      }
    }
    async function fetchData() {
      try {
        console.log(factor + " Hello :  " + value)
        if (factor === "None") {
          fetchData2()
          return
        }
        searchEventCollections(factor, value)
      } catch (error) {
        console.log("Error:", error)
      }
    }
    fetchData()
  }, [factor])

  const handleSelectAll = () => {
    setSelectAll(!selectAll)
    setIsCheck(list.map((li) => li.id))
    if (selectAll) {
      setIsCheck([])
    }
  }

  const handleClick = (e) => {
    const { id, checked } = e.target
    setSelectAll(false)
    setIsCheck([...isCheck, id])
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id))
    }
  }

  useEffect(() => {
    selectedItems(isCheck)
  }, [isCheck])

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">
          All Events{" "}
          <span className="text-slate-400 font-medium">{list.length}</span>
        </h2>
      </header>
      <div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      <input
                        className="form-checkbox"
                        style={{ visibility: "hidden" }}
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </label>
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <span className="sr-only">Favourite</span>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Event Name</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    No of Participants
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Category</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold">Location</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold">Number of Feedbacks</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold">More</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-200">
              {list.map((event) => {
                return (
                  <EventsTableItem
                    key={event._id}
                    _id={event._id}
                    eventDetails={event.eventDetails}
                    eventName={event.eventName}
                    attended={event.attended}
                    registered={event.registered}
                    followUp={event.followUp}
                    feedback={event.feedback}
                    url={event.imageUrl}
                    participantsCount={event.attended.length}
                    category={event.category}
                    eventLocation={event.eventLocation}
                    registeredCount={event.registered.length}
                    feedbacksCount={event.feedback.length}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(event.sessionId)}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EventsTable
