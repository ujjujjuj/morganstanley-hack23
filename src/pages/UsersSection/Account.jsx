import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import AccountPanel from "../../partials/userSettingsSideBar/AccountPanel";
import { useLocation, useNavigate } from "react-router-dom";
import Education from "../../partials/userSettingsSideBar/Education";
import Employment from "../../partials/userSettingsSideBar/Employment";
import GovtID from "../../partials/userSettingsSideBar/GovtID";
import MedicalStatus from "../../partials/userSettingsSideBar/Medical";
import Socioeconomic from "../../partials/userSettingsSideBar/Socioeconomic";
import EditFilterComponent from "./filter";

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
function UserEditPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location=useLocation();

  const [factor,setFactor]=useState("View");
  const navigate=useNavigate();
  console.log(location.state.id);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="mb-8 flex">
              <h1 className="text-2xl ml-2 sm:ml-0 mt-6 md:text-3xl text-slate-800 font-bold whitespace-nowrap">
              User's Profile&nbsp;✨
            </h1>
                
              <EditFilterComponent setFactor={setFactor} id={location.state.id} />
            </div>
            <div className="bg-white flex-col  shadow-lg rounded-sm mb-8">
            {factor==="View"?<div className="">
                <AccountPanel showSave="No" id={location.state.id}/>
                <PageDivider/>
                <Education showSave="No" id={location.state.id}/>
                <PageDivider/>
                <Employment showSave="No" id={location.state.id}/>
                <PageDivider/>
                <GovtID showSave="No" id={location.state.id}/>
                <PageDivider/>
                <MedicalStatus showSave="No" id={location.state.id}/>
                <PageDivider/>
                <Socioeconomic showSave="No" id={location.state.id}/>
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
              </div>:
            <div className="">
                <AccountPanel showSave="Yes" id={location.state.id}/>
                <PageDivider/>
                <Education showSave="Yes" id={location.state.id}/>
                <PageDivider/>
                <Employment showSave="Yes" id={location.state.id}/>
                <PageDivider/>
                <GovtID showSave="Yes" id={location.state.id}/>
                <PageDivider/>
                <MedicalStatus showSave="Yes" id={location.state.id}/>
                <PageDivider/>
                <Socioeconomic showSave="Yes" id={location.state.id}/>
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
              </div>}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default UserEditPage;
