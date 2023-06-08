// import React from 'react';
import React, { useState, useEffect } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import EventUsersTable from './userCommunityList';
import PaginationClassic from '../../components/PaginationClassic';
import { useLocation, useNavigate } from 'react-router-dom';
// import FilterComponent from './userFilter';
function UsersCommunity() {

    const location = useLocation();
    const navigate=useNavigate();
    // console.log(participants);
    const [list,setList] = useState("Attend"); // State to control which list to show
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [factor,setFactor]=useState("None");
  const [value,setValue]=useState("None");

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  // let handleClickFnc=()=>{
  //   console.log("clicked !! ",location.state.eventId);
  //   const eventId=location.state.eventId;
  //   navigate("/events/markAttendance",{state:{eventId:eventId}});
  // }

  function addCommunity(){
    navigate("/community/addCommunity");
  }

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
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Community ✨</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              {/* <FilterComponent setValue={setValue} setFactor={setFactor}/> */}
              
              
              </div>
            </div>
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span onClick={addCommunity} className="hidden xs:block ml-2">Add Community</span>
                </button>
            </div>
            {/* Table */}
            <EventUsersTable value={value} factor={factor} list={list} selectedItems={handleSelectedItems} />

            {/* Pagination */}
            <div className="mt-8">
              <PaginationClassic />
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default UsersCommunity;