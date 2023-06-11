import React, { useState, useEffect } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import EventUsersTable from './UserList';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterComponent from './userFilter';
function Users() {

    const location = useLocation();
    const navigate=useNavigate();
    const [list,setList] = useState("Attend");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [factor,setFactor]=useState("None");
  const [value,setValue]=useState("None");

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const handleFilter = (event) => {
    const selectedFilter = event.target.value;
    if (selectedFilter === 'filter1') {
      setList("Attend"); 
    } else if (selectedFilter === 'filter2') {
      setList("Register"); 
    }
    else{
      setList("Both");
    }
  };

  let handleClickFnc=()=>{
    console.log("clicked !! ",location.state.eventId);
    const eventId=location.state.eventId;
    navigate("/events/markAttendance",{state:{eventId:eventId,type:"Attend"}});
  }
  let handleClickFnc2=()=>{
    console.log("clicked !! ",location.state.eventId);
    const eventId=location.state.eventId;
    navigate("/events/markAttendance",{state:{eventId:eventId,type:"Register"}});
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Users ✨</h1>
              </div>
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              <FilterComponent eventId={location.state.eventId} setValue={setValue} setFactor={setFactor}/>
                
              </div>
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              <select onChange={handleFilter}>
              <option value="filter1">Attended</option>
              <option value="filter2">Registered</option>
              <option value="filter3">Both</option>
              </select>
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white"  onClick={handleClickFnc}>
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">{`Add User (Mark Attendance)`}</span>
                </button>
                
                <button onClick={handleClickFnc2} className="btn bg-yellow-500 hover:bg-yellow-600 text-white onClick={handleClickFnc2} ">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">{`Register User for Event`}</span>
                </button>
              </div>
            </div>
            <EventUsersTable value={value} factor={factor} list={list} eventId={location.state.eventId} selectedItems={handleSelectedItems} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Users;