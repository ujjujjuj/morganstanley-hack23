import React, { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"

import "./css/style.css"

import "./charts/ChartjsConfig"

// Import pages
import Dashboard from "./pages/Dashboard"
import Customers from "./pages/ecommerce/Customers"
import Inbox from "./pages/Inbox"
import Campaigns from "./pages/Campaigns"
// import UsersTabs from "./pages/community/UsersTabs"
// import Meetups from "./pages/community/Meetups"
// import MeetupsPost from "./pages/community/MeetupsPost"
import Messages from "./pages/Messages"
import Calendar from "./pages/Calendar"
import PageNotFound from "./pages/utility/PageNotFound"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import ResetPassword from "./pages/ResetPassword"
import EventsList from "./pages/events/Events"
import EventPost from "./pages/events/EventPage"

// Event Management and user management related Routes
import Events from "./pages/EventManagement/Events"
import Users from "./pages/EventManagement/Users"
import AddEventPage from "./pages/EventManagement/AddEventPage"
import AddUserPage from "./pages/EventManagement/AddUserPage"
import UsersList from "./pages/UsersSection/Users"
import AddUsersFormPage from "./pages/UsersSection/addUser"
import UserEditPage from "./pages/UsersSection/Account"

// community related routes

import "./i18n"

import { UserProvider } from "../hooks/useUser"
import UsersCommunity from "./pages/community/userCommunities"
import AddCommunityForm from "./pages/community/addCommunityForm"
import AddCommunity from "./pages/community/addCommunity"

// community details pages
import Chambhar from "./pages/community/View/Chambhar"
import MahadevKoli from "./pages/community/View/Mahadev Koli"
import Dhangar from "./pages/community/View/Dhangar"
import Mali from "./pages/community/View/Mali"
import Maratha from "./pages/community/View/Maratha"

function App() {
  const location = useLocation()

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto"
    window.scroll({ top: 0 })
    document.querySelector("html").style.scrollBehavior = ""
  }, [location.pathname]) // triggered on route change

  return (
    <UserProvider>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        {/* <Route path="/community/meetups" element={<Meetups />} />
        <Route path="/community/meetups-post" element={<MeetupsPost />} /> */}
        <Route path="/messages" element={<Messages />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/Inbox" element={<Inbox />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/events/list" element={<EventsList />} />
        <Route path="/events/list/:id" element={<EventPost />} />

        {/* Event Management and User Management All Routes !! */}
        <Route exact path="/events/userList" element={<Users />} />
        <Route exact path="/events/createEvent" element={<AddEventPage />} />
        <Route path="/events/AllEvents" element={<Events />} />
        <Route path="/events/markAttendance" element={<AddUserPage />} />
        <Route path="/users/allUsers" element={<UsersList />} />
        <Route path="/users/addUser" element={<AddUsersFormPage />} />
        <Route path="/users/editBasicDetails" element={<UserEditPage />} />

        {/* Community realted Routes */}
        <Route path="/community" element={<UsersCommunity />} />
        <Route path="/community/allCommunities" element={<Campaigns />} />
        <Route path="/community/addCommunity" element={<AddCommunity />} />
        <Route path="/community/Chambhar" element={<Chambhar />} />
        <Route path="/community/MahadevKoli" element={<MahadevKoli />} />
        <Route path="/community/Dhangar" element={<Dhangar />} />
        <Route path="/community/Mali" element={<Mali />} />
        <Route path="/community/Maratha" element={<Maratha />} />
      </Routes>
    </UserProvider>
  )
}

export default App
