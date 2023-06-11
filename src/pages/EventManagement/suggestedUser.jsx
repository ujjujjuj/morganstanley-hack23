import React, { useState, useEffect } from "react"
import SuggestedUserTableItem from "./suggestedUserTableItem"

function SuggestedUser(props) {
  const [list, setList] = useState([])
  useEffect(() => {
    console.log(props.eventId)
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_ADDRESS}/user/filter/name?name=${
            props.name
          }`
        )
        const data = await response.json()
        if (data.hasOwnProperty("result")) {
          setList(data.result)
        } else {
          setList([])
        }
      } catch (error) {
        console.log("No user Found !!")
      }
    }

    if (props.name) {
      fetchData()
    }
  }, [props.name])

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">
          All Users{" "}
          <span className="text-slate-400 font-medium">{list.length}</span>
        </h2>
      </header>
      <div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-8 py-3">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="px-8 py-3">
                  <div className="font-semibold text-left">Age</div>
                </th>
                <th className="px-8 py-3">
                  <div className="font-semibold text-left">Community</div>
                </th>
                <th className="px-8 py-3">
                  <div className="font-semibold text-left">Phone Number</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-200">
              {list.length > 0 &&
                list.map((participant) => {
                  return (
                    <SuggestedUserTableItem
                      type={props.type}
                      eventId={props.eventId}
                      key={participant._id}
                      _id={participant._id}
                      name={participant.basicDetails.name}
                      age={participant.basicDetails.age}
                      community={participant.basicDetails.Community}
                      phone={participant.basicDetails.PhoneNumber}
                      language={participant.basicDetails.primaryLanguage}
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

export default SuggestedUser
