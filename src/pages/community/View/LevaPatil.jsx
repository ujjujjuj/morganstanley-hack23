import React, { useState } from "react"
import Sidebar from "../../../partials/Sidebar"
import Header from "../../../partials/Header"
import Datepicker from "../../../components/Datepicker"



function LevaPatil() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                Leva Patil
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex space-between gap-4 flex-col xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[400px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=220a1d62-92de-47b2-9915-5a0b85c4823c&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[400px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=6e1c4343-98ba-4484-8ce0-9dbf710af2e9&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[400px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=6485678b-a250-40c1-8046-faf0688d98ad&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
              </div>
              <div className="flex space-between gap-4 flex-col xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=6f4d85e9-ed35-482c-a1bf-556d7e923878&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64856bc9-7171-4867-8270-122ef6345054&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                
              </div>
              <div className="flex space-between gap-4 flex-col xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=37674647-2995-44b9-80c2-9fe26b3416d0&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=2e72117d-2a3f-4b21-934b-a5a03b7fb4bb&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=6485657a-80fc-4d2c-8fea-a45789f94278&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
              </div>
              <div className="flex space-between gap-4 flex-col lg:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[600px] lg:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=b9c734c7-9bd8-46c5-bd4c-0ed9995cea47&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
               
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LevaPatil
