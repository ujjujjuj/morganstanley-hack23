import React, { useState, useEffect } from "react"
import EventUserTableItem from "./communityItem"

function EventUsersTable(props) {
  const [selectAll, setSelectAll] = useState(false)
  const [isCheck, setIsCheck] = useState([])
  const [list, setList] = useState({})
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_ADDRESS}/user/group/community`
        )
        if (!response.ok) {
          throw new Error("Request failed with status " + response.status)
        }
        const data = await response.json()
        const reversedObj = Object.entries(data.result)
          .reverse()
          .reduce((acc, [key, value]) => {
            acc[key] = value
            return acc
          }, {})
        setList(reversedObj)
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
    props.selectedItems(isCheck)
  }, [isCheck])

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">
          All Community
          <span className="text-slate-400 font-medium">{list.length}</span>
        </h2>
      </header>
      <div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
              <tr>
                <th className="px-12 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Community Name</div>
                </th>
                <th className="px-12 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Number of Users</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-200">
              {Object.keys(list).map((key) => (
                <EventUserTableItem community={key} count={list[key].length} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EventUsersTable
