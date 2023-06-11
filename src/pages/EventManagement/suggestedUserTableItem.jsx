import React from "react"
import { useNavigate } from "react-router-dom"

function SuggestedUserTableItem(props) {
  const navigate = useNavigate()
  async function addUser(e) {
    e.preventDefault()
    const eventId = props.eventId
    const userId = props._id
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_ADDRESS}/events/markAttendance`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ eventId, userId }),
        }
      )

      if (response.ok) {
        const data = await response.json()
        console.log("Data:", data)
        navigate("/events/userList", { state: { eventId: props.eventId } })
      } else {
        console.log("Unsucess Retry")
      }
    } catch (error) {
      console.log("Error occurred during fetch:", error)
    }
  }
  async function registerUser(e) {
    e.preventDefault()
    const eventId = props.eventId
    const userId = props._id
    console.log(eventId + " " + userId)
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_ADDRESS}/user/registerForEvent/byAdmin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ eventId, userId }),
        }
      )

      if (response.ok) {
        const data = await response.json()
        console.log("Data:", data)
        navigate("/events/userList", { state: { eventId: props.eventId } })
      } else {
        console.log("Unsucess Retry")
      }
    } catch (error) {
      console.log("Error occurred during fetch:", error)
    }
  }

  return (
    <tr>
      <td className="px-8 py-3">
        <div className="text-left">{props.name}</div>
      </td>
      <td className="px-8 py-3">
        <div className="text-left">{props.age}</div>
      </td>
      <td className="px-8 py-3">
        <div className="text-left">{props.community}</div>
      </td>
      <td className="px-8 py-3">
        <div className="text-left">{props.phone}</div>
      </td>
      {props.type === "Attend" ? (
        <td className="px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <button
            onClick={addUser}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </td>
      ) : (
        <td className="px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <button
            onClick={registerUser}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </td>
      )}

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      </td>
    </tr>
  )
}

export default SuggestedUserTableItem
