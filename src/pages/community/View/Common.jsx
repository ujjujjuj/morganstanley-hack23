import React, { useState } from "react"
import Sidebar from "../../../partials/Sidebar"
import Header from "../../../partials/Header"
import Datepicker from "../../../components/Datepicker"



function Common() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
             
                </h1>
              </div>

          
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 space-between xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[400px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=d85f73bb-7e65-4a37-937d-dd8bb60e3b7a&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[400px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=eb3a6da6-54a1-437b-a0ca-a0383e5db2bb&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[400px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=0a6cfe8e-209a-4f01-841e-0f26c1583d76&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                
                
              </div>
              <div className="flex flex-col gap-4 space-between xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=e5855aac-a73b-4ddf-bb1b-b9b69f296c8d&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=41ed8cbf-d899-4d0e-8a60-c5e14ca45dfa&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                
              </div>
              <div className="flex flex-col gap-4 space-between xl:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=513c762d-05aa-4881-94a0-c4bc8270feee&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=139c698e-9bfd-4692-9843-dd7e49952f34&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  className="bg-white border-none rounded-sm h-[480px] xl:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=a6a7e667-55ba-4bc1-9808-8db723b29d69&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
              </div>
              <div className="flex flex-col gap-4 space-between lg:flex-row">
                <iframe
                  className="bg-white border-none rounded-sm h-[600px] lg:flex-1"
                  src="https://charts.mongodb.com/charts-project1-tuzcu/embed/charts?id=d4c90075-b4b6-4a14-9a66-4caeaabd151a&maxDataAge=3600&theme=light&autoRefresh=true"
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
