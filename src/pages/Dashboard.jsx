import React, { useEffect, useState } from "react"

import Sidebar from "../partials/Sidebar"
import Header from "../partials/Header"
import WelcomeBanner from "../partials/analytics/Welcome"

function Analytics() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex overflow-y-auto overflow-x-hidden relative flex-col flex-1">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 py-8 mx-auto w-full sm:px-6 lg:px-8 max-w-9xl">
            <WelcomeBanner />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 space-between xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm min-h-[320px] flex-[2]  shadow-md"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64833108-84c7-4413-8f37-186c64f2ca26&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm min-h-[480px] flex-[3] shadow-md"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=648327f4-fdb9-4ec0-82c8-98071ea74cc5&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
              </div>
              <div className="flex flex-col gap-4 space-between xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1  shadow-md"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=648056d4-b1b7-41ea-8cc7-8619fa588a67&maxDataAge=60&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm min-h-[480px] flex-1  shadow-md"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=648058a3-ba3a-4dd1-8beb-cde198a42548&maxDataAge=60&theme=light&autoRefresh=true"
                ></iframe>
              </div>
              <div className="flex flex-col gap-4 space-between xl:flex-row">
                <iframe
                  className="bg-white rounded-sm border-none min-h-[480px] flex-1 shadow-md"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64820262-b776-4863-8084-10c7d817075a&maxDataAge=60&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1 shadow-md"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64805db0-abe9-4522-8d84-1e7088a94264&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1 shadow-md"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64805e14-23c6-487f-873f-74915df1e607&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
              </div>
              <div className="flex flex-col gap-4 space-between lg:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm min-h-[480px] flex-1  shadow-md"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64821d11-1450-4ec6-81d4-04d8efa8d4dd&maxDataAge=60&theme=light&autoRefresh=true"
                ></iframe>
              </div>
              <div className="flex flex-col gap-4 space-between xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm min-h-[480px] flex-1 shadow-md"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64805d32-a88f-4f32-8938-011d4f279f5a&maxDataAge=60&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm min-h-[480px] flex-1 shadow-md"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=64820078-7f2b-4fbe-8ee1-3368aaeeb163&maxDataAge=300&theme=light&autoRefresh=true"
                ></iframe>
              </div>

              <div className="flex flex-col gap-4 space-between lg:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] lg:flex-1  shadow-md"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=6482112d-030e-4716-8c71-bfd54ab65894&maxDataAge=300&theme=light&autoRefresh=true"
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
