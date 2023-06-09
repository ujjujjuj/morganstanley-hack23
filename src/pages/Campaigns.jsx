import React, { useState, useEffect } from "react"
import Sidebar from "../partials/Sidebar"
import Header from "../partials/Header"
import SearchForm from "../partials/actions/SearchForm"
import FilterButton from "../components/DropdownFilter"
import CampaignsCard from "../partials/campaigns/CampaignsCard"
import axios from "axios"

function Campaigns() {
  const [items, setItems] = useState([])
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_ADDRESS}/user/group/community`)
      .then((response) => {
        const communityNames = Object.keys(response.data.result)
        const newItems = communityNames.map((name, index) => ({
          id: index,
          title: name,
        }))

        setItems(newItems)
      })
      .catch((error) => console.error("Error fetching community data:", error))
  }, [])

  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex overflow-y-auto overflow-x-hidden relative flex-col flex-1">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 py-8 mx-auto w-full sm:px-6 lg:px-8 max-w-9xl">
            <div className="mb-8 sm:flex sm:justify-between sm:items-center">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl font-bold md:text-3xl text-slate-800">
                  Communities ✨
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              {items.map((item) => {
                return (
                  <CampaignsCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                  />
                )
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Campaigns
