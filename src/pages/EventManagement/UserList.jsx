import React, { useState, useEffect } from "react"

import EventUserTableItem from "./UserTableItem"

function EventUsersTable(props) {
  const [isCheck, setIsCheck] = useState([])
  const [list, setList] = useState([])
  const [list2, setList2] = useState([])
  console.log(props.list)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_ADDRESS}/events/attendance?eventId=${
            props.eventId
          }`
        )
        const data = await response.json()
        const response2 = await fetch(
          `${
            import.meta.env.VITE_SERVER_ADDRESS
          }/events/registeredList?eventId=${props.eventId}`
        )
        const data2 = await response2.json()
        const attendies = data.result
        const registerations = data2.result
        setList(attendies)
        setList2(registerations)
        console.log(list2)
      } catch (error) {
        console.log("Error:", error)
      }
    }
    fetchData()
  }, [])

  const searchEventCollections = (f, v) => {
    const filteredCollections = list.filter((collection) => {
      return collection.basicDetails[f] === v
    })
    const filteredCollections2 = list2.filter((collection) => {
      return collection.basicDetails[f] === v
    })
    setList(filteredCollections)
    setList2(filteredCollections2)
  }

  useEffect(() => {
    async function fetchData2() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_ADDRESS}/events/attendance?eventId=${
            props.eventId
          }`
        )

        const data = await response.json()

        const response2 = await fetch(
          `${
            import.meta.env.VITE_SERVER_ADDRESS
          }/events/registeredList?eventId=${props.eventId}`
        )

        const data2 = await response2.json()
        const attendies = data.result
        const registerations = data2.result
        setList(attendies)
        setList2(registerations)
        console.log(list2)
      } catch (error) {
        console.log("Error:", error)
      }
    }
    async function fetchData() {
      try {
        console.log(props.factor + " Hello :  " + props.value)
        if (props.factor === "None") {
          fetchData2()
          return
        }
        searchEventCollections(props.factor, props.value)
      } catch (error) {
        console.log("Error:", error)
      }
    }

    fetchData()
  }, [props.factor])


  useEffect(() => {
    props.selectedItems(isCheck)
  }, [isCheck])

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
                <th className="px-8 py-3">
                  <div className="font-semibold text-left">
                    Primary Language
                  </div>
                </th>
                <th className="px-8 py-3"></th>
              </tr>
            </thead>

            <tbody className="text-sm divide-y divide-slate-200">
              {props.list === "Attend" ? (
                list.map((participant) => {
                  return (
                    <EventUserTableItem
                      isBoth="No"
                      typeOfEvent="Attend"
                      key={participant._id}
                      _id={participant._id}
                      name={participant.basicDetails.name}
                      age={participant.basicDetails.age}
                      community={participant.basicDetails.Community}
                      phone={participant.basicDetails.PhoneNumber}
                      language={participant.basicDetails.primaryLanguage}
                    />
                  )
                })
              ) : props.list === "Register" ? (
                list2.map((participant) => {
                  return (
                    <EventUserTableItem
                      isBoth="No"
                      typeOfEvent="Register"
                      key={participant._id}
                      _id={participant._id}
                      name={participant.basicDetails.name}
                      age={participant.basicDetails.age}
                      community={participant.basicDetails.Community}
                      phone={participant.basicDetails.PhoneNumber}
                      language={participant.basicDetails.primaryLanguage}
                    />
                  )
                })
              ) : (
                <>
                  {list.map((participant) => {
                    return (
                      <EventUserTableItem
                        isBoth="Yes"
                        typeOfEvent="Attend"
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
                  {list2.map((participant) => {
                    return (
                      <EventUserTableItem
                        isBoth="Yes"
                        typeOfEvent="Register"
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
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EventUsersTable
