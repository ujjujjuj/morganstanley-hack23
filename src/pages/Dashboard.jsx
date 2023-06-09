import React, { useState } from "react"

import Sidebar from "../partials/Sidebar"
import Header from "../partials/Header"

function Analytics() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="flex overflow-hidden h-screen">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="flex overflow-y-auto overflow-x-hidden relative flex-col flex-1">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 py-8 mx-auto w-full sm:px-6 lg:px-8 max-w-9xl">
            {/* Page header */}
            <div className="mb-8 sm:flex sm:justify-between sm:items-center">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl font-bold md:text-3xl text-slate-800">
                  Analytics ✨
                </h1>
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
              <div className="flex flex-col gap-4 space-between xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[320px] 2xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64833108-84c7-4413-8f37-186c64f2ca26&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[320px] 2xl:flex-1"
                  // src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=648327f4-fdb9-4ec0-82c8-98071ea74cc5&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[320px] 2xl:flex-1"
                  // src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64805c35-4539-4d14-8d50-9807fe142564&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[320px] 2xl:flex-1"
                  // src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64805c35-4539-4d14-8d50-9807fe142564&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
              </div>
              {/* div for 3 charts in a row */}
              <div className="flex flex-col gap-4 space-between xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=648056d4-b1b7-41ea-8cc7-8619fa588a67&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  // src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=648058a3-ba3a-4dd1-8beb-cde198a42548&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64820078-7f2b-4fbe-8ee1-3368aaeeb163&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
              </div>
              {/* div for 3 charts in a row */}
              <div className="flex flex-col gap-4 space-between xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64805d32-a88f-4f32-8938-011d4f279f5a&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64805db0-abe9-4522-8d84-1e7088a94264&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64805e14-23c6-487f-873f-74915df1e607&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
              </div>
              {/* div for 2 charts in a row */}
              <div className="flex flex-col gap-4 space-between lg:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] lg:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64821d11-1450-4ec6-81d4-04d8efa8d4dd&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] lg:flex-1"
                  // src="https://charts.mongodb.com/charts-project-0-zwpmz/embed/charts?id=647fa2e3-1b39-4a97-8822-968c68c6ef81&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
              </div>
              <div className="flex flex-col gap-4 space-between lg:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=648058a3-ba3a-4dd1-8beb-cde198a42548&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=648327f4-fdb9-4ec0-82c8-98071ea74cc5&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Analytics
