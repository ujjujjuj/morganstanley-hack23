import React, { useState } from "react";

import Sidebar from "../../partials/UserSidebar";
import Header from "../../partials/UserHeader";
import SettingsSidebar from "../../partials/settings/SettingsSidebar";
import AccountPanel from "../../partials/settings/AccountPanel";

function Account() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex overflow-y-auto overflow-x-hidden relative flex-col flex-1">=
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />=
        <main>
          <div className="px-4 py-8 mx-auto w-full sm:px-6 lg:px-8 max-w-9xl">
            <div className="mb-8">
              <h1 className="text-2xl font-bold md:text-3xl text-slate-800">
                My Profile ✨
              </h1>
            </div>
            <div className="mb-8 bg-white rounded-sm shadow-lg">
              <div className="flex flex-col md:flex-row md:-mr-px">
                <SettingsSidebar />
                <AccountPanel />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Account;
