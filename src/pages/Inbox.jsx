import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
// import InboxSidebar from '../partials/inbox/InboxSidebar';

function Inbox() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inboxSidebarOpen, setInboxSidebarOpen] = useState(false);

  return (
    <div className="flex overflow-hidden h-screen">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */} 
      <div className="flex overflow-y-auto overflow-x-hidden relative flex-col flex-1">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="flex relative">

            {/* Inbox sidebar */}
            {/* Inbox body */}

          </div>
        </main>

      </div>
      
    </div>
  );
}

export default Inbox;