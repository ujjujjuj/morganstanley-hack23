import React, { useState } from "react"
import Sidebar from "../../../partials/Sidebar"
import Header from "../../../partials/Header"
import Datepicker from "../../../components/Datepicker"



function Common() {
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
              <div className="flex space-between gap-4 flex-col xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[400px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=500f9df8-5c05-409a-85bd-0a82f8d92ae0&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[400px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=a9c533b8-8639-4e36-99ee-3e784b5fe1fc&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[400px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=7f49a646-846d-442a-9de9-cabd5008e242&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                
                
              </div>
              {/* div for 3 charts in a row */}
              <div className="flex space-between gap-4 flex-col xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=2a793486-fc36-4391-b8f1-b734cdaf84f5&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=29898ba9-3fb6-4d97-8943-d615dc40ed65&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                
              </div>
              {/* div for 3 charts in a row */}
              <div className="flex space-between gap-4 flex-col xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=071d176e-06aa-41a4-b835-96ce8908f39c&maxDataAge=3600&theme=light&autoRefresh=true"
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
              {/* div for 2 charts in a row */}
              <div className="flex space-between gap-4 flex-col lg:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[600px] lg:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=a699a10e-328c-4fa6-b865-cffb4991aaba&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
               
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Common
