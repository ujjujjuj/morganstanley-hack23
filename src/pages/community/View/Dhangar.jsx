import React, { useState } from "react"
import Sidebar from "../../../partials/Sidebar"
import Header from "../../../partials/Header"
import Datepicker from "../../../components/Datepicker"



function Dhangar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                Dhangar Community ✨
                </h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Datepicker built with flatpickr */}
                <Datepicker align="right" />
              </div>
            </div>

            {/* Cards */}
            {/* <div className="grid grid-cols-12 gap-6">

              <AnalyticsCard01 />
              <AnalyticsCard02 />
              <AnalyticsCard03 />
              <AnalyticsCard04 />
              <AnalyticsCard05 />
              <AnalyticsCard06 />
              <AnalyticsCard07 />
              <AnalyticsCard08 />
              <AnalyticsCard09 />
              <AnalyticsCard10 />
              <AnalyticsCard11 />

            </div> */}
            {/* Main Container div */}
            <div className="flex flex-col gap-4">
              <div className="flex space-between gap-4 flex-col xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[300px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64825d5c-1717-4add-836f-8659c85444b6&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[300px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=6482ddb8-5a6d-4e55-8d1b-8cc4969a9d44&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[300px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=6482e555-befa-449e-813e-059a97f73f3e&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                
                
              </div>
              {/* div for 3 charts in a row */}
              <div className="flex space-between gap-4 flex-col xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64824e44-79a4-477b-8a9c-eb36e60d5741&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64825a59-c5f2-45fe-8a97-764f6c635f1f&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                
              </div>
              {/* div for 3 charts in a row */}
              <div className="flex space-between gap-4 flex-col xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=6482490d-7c96-4420-871b-09a29252c315&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64824bf0-1717-4818-8593-8659c843b987&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64805e14-23c6-487f-873f-74915df1e607&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
              </div>
              {/* div for 2 charts in a row */}
              <div className="flex space-between gap-4 flex-col lg:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[600px] lg:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=6482569c-8d6d-4b3f-88fa-e3ca791f2ce1&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
               
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dhangar
