import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import EventsTable from '../../partials/events/EventsTable';
import { useNavigate } from 'react-router-dom';
import FilterComponent from './filter';
function Events() {
  const navigate=useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [factor,setFactor]=useState("None");
  const [value,setValue]=useState("None");
  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  let handleClickFnc=()=>{
    navigate("/events/createEvent",{state:{eventId:"None",type:"Add"}});
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
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Events ✨</h1>
              </div>
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <FilterComponent setFactor={setFactor} setValue={setValue} />
              </div>
              <button onClick={handleClickFnc} className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add Event</span>
                </button>
            </div>
              <EventsTable 
              value={value} factor={factor}
               selectedItems={handleSelectedItems} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Events;