import React, { useState, useEffect } from "react"

import EventUserTableItem from "./UserTableItem"

function EventUsersTable(props) {
  const [selectAll, setSelectAll] = useState(false)
  const [isCheck, setIsCheck] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_ADDRESS}/user`
        )
        if (!response.ok) {
          throw new Error("Request failed with status " + response.status)
        }
        const data = await response.json()
        const ans = [...data.result].reverse()
        setList(ans)
        console.log(ans)
      } catch (error) {
        console.log("Error:", error)
      }
    }

    fetchData()
  }, [])

  const searchUserCollections = (f, v) => {
    const filteredCollections = list.filter((collection) => {
      const propertyValue = collection.basicDetails[f]
      return propertyValue === v || propertyValue.startsWith(v)
    })
    setList(filteredCollections)
  }

  useEffect(() => {
    async function fetchData2() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_ADDRESS}/user`
        )
        if (!response.ok) {
          throw new Error("Request failed with status " + response.status)
        }
        const data = await response.json()
        const result = data.result
        const filteredData = result.filter(
          (user) => !/^DoesNotExist/.test(user.pwd)
        )
        const ans = [...filteredData].reverse()
        setList(ans)
      } catch (error) {
        console.log("Error:", error)
      }
    }
    async function fetchData() {
      try {
        if (props.factor === "None") {
          fetchData2()
          return
        }

        searchUserCollections(props.factor, props.value)
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
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200">
              {list.map((participant) => {
                return (
                  <EventUserTableItem
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EventUsersTable
