import React, { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"

import "./css/style.css"

import "./charts/ChartjsConfig"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

// Import pages
import Dashboard from "./pages/Dashboard"
import Customers from "./pages/ecommerce/Customers"
import Inbox from "./pages/Inbox"
import Campaigns from "./pages/Campaigns"
// import UsersTabs from "./pages/community/UsersTabs"
// import Meetups from "./pages/community/Meetups"
// import MeetupsPost from "./pages/community/MeetupsPost"
import Messages from "./pages/Messages"
import AdminMessages from "./pages/AdminMessages"
import Calendar from "./pages/Calendar"
import PageNotFound from "./pages/utility/PageNotFound"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import ResetPassword from "./pages/ResetPassword"
import EventsList from "./pages/events/Events"
import EventPost from "./pages/community/EventPage"
import AdminEventPost from "./pages/community/AdminEventPage"

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

import useUser, { UserProvider } from "../hooks/useUser"
import UsersCommunity from "./pages/community/userCommunities"
import AddCommunityForm from "./pages/community/addCommunityForm"
import AddCommunity from "./pages/community/addCommunity"

// community details pages
import Chambhar from "./pages/community/View/Chambhar"
import MahadevKoli from "./pages/community/View/Mahadev Koli"
import Dhangar from "./pages/community/View/Dhangar"
import Mali from "./pages/community/View/Mali"
import Maratha from "./pages/community/View/Maratha"
import LevaPatil from "./pages/community/View/LevaPatil"
import Common from "./pages/community/View/Common"
import Meetups from "./pages/community/ Meetups"
import RegisteredEventsList from "./pages/registered/RegisteredEvents"
import RegisteredEventPost from "./pages/registered/EventPage"
import TasksList from "./pages/tasks/TasksList"
import Faqs from "./pages/Faqs"
import MedicalRecords from "./pages/settings/MedicalRecords"
import EducationStatus from "./pages/settings/EducationStatus"
import EmploymentStatus from "./pages/settings/EmploymentStatus"
import GovtID from "./partials/userSettingsSideBar/GovtID"
import GovtId from "./pages/settings/GovtID"
import SocioeconomicStatus from "./pages/settings/SocioeconomicStatus"
import Account from "./pages/settings/Account"
import MyCalendar from "./pages/AdminCalendar"

function App() {
  const location = useLocation()

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto"
    window.scroll({ top: 0 })
    document.querySelector("html").style.scrollBehavior = ""
  }, [location.pathname]) // triggered on route change

  return (
    <UserProvider>
      <SWHandler />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        {/* <Route path="/community/meetups" element={<Meetups />} />
        <Route path="/community/meetups-post" element={<MeetupsPost />} /> */}
        <Route path="/messages" element={<AdminMessages />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/Inbox" element={<Inbox />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/events/list" element={<EventsList />} />
        <Route path="/events/list/:id" element={<AdminEventPost />} />

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
        <Route path="/community/allCommunities/Maratha" element={<Maratha />} />
        <Route
          path="/community/allCommunities/Leva Patil"
          element={<LevaPatil />}
        />
        <Route path="/community/allCommunities/:id" element={<Common />} />

        {/* User side Routes */}
        <Route path="/user/" element={<Meetups />} />
        <Route path="/user/event/:id" element={<EventPost />} />
        <Route path="/user/registered/" element={<RegisteredEventsList />} />
        <Route path="/user/registered/:id" element={<RegisteredEventPost />} />
        <Route path="/user/tasks/" element={<TasksList />} />
        <Route path="/user/calendar/" element={<Calendar />} />
        <Route path="/user/settings/account" element={<Account />} />
        <Route
          path="/user/settings/MedicalRecords"
          element={<MedicalRecords />}
        />
        <Route
          path="/user/settings/EducationStatus"
          element={<EducationStatus />}
        />
        <Route
          path="/user/settings/EmploymentStatus"
          element={<EmploymentStatus />}
        />
        <Route path="/user/settings/GovtID" element={<GovtId />} />
        <Route
          path="/user/settings/SocioeconomicStatus"
          element={<SocioeconomicStatus />}
        />
        <Route path="/user/contact/" element={<Messages />} />
        <Route path="/user/faqs" element={<Faqs />} />
      </Routes>
      <ToastContainer />
    </UserProvider>
  )
}

const SWHandler = () => {
  const { user } = useUser()

  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return
    }

    if (!("PushManager" in window)) {
      return
    }

    const createSub = async () => {
      try {
        let sw = await navigator.serviceWorker.ready
        console.log(import.meta.env.VITE_VAPID_PUBLIC_KEY)

        const sub = await sw.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: import.meta.env.VITE_VAPID_PUBLIC_KEY,
        })
        console.log(JSON.stringify(sub))

        const res = await fetch(
          `${import.meta.env.VITE_SERVER_ADDRESS}/user/addSub/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: user._id, sub }),
          }
        ).then((res) => res.json())
      } catch (err) {
        console.log(err)
      }
    }
    if (user.isLoggedIn) {
      createSub()
    }
  }, [user])

  return null
}

export default App
