import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import SettingsSidebar from "../../partials/userSettingsSideBar/SettingsSidebar";
import AccountPanel from "../../partials/userSettingsSideBar/AccountPanel";
import { useLocation, useNavigate } from "react-router-dom";
import Education from "../../partials/userSettingsSideBar/Education";
import Employment from "../../partials/userSettingsSideBar/Employment";
import GovtID from "../../partials/userSettingsSideBar/GovtID";
import MedicalStatus from "../../partials/userSettingsSideBar/Medical";
import Socioeconomic from "../../partials/userSettingsSideBar/Socioeconomic";

const PageDivider = () => {
  return (
    <div className="flex items-center">
      <div className="flex-grow border-t border-gray-300"></div>
      <svg className="w-6 h-6 text-gray-300 mx-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
      </svg>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};
// location.state.id
function UserEditPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location=useLocation();

  const navigate=useNavigate();
  console.log(location.state.id);
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
            <div className="mb-8">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                My Profile ✨
              </h1>
            </div>

            {/* Content */}
            <div className="bg-white flex-col  shadow-lg rounded-sm mb-8">
              <div className="">
                <AccountPanel id={location.state.id}/>
                <PageDivider/>
                <Education id={location.state.id}/>
                <PageDivider/>
                <Employment id={location.state.id}/>
                <PageDivider/>
                <GovtID id={location.state.id}/>
                <PageDivider/>
                <MedicalStatus id={location.state.id}/>
                <PageDivider/>
                <Socioeconomic id={location.state.id}/>
                <PageDivider/>
                <br></br>

                <div className="flex pb-4 pr-4">
                <button onClick={()=>{
                  if(location.state.type==="Event"){
                    navigate("/events/AllEvents");
                  }
                  else{
                    navigate("/users/allUsers");
                  }
                }}
                className="ml-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                  Go Back
                </button> </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default UserEditPage;
