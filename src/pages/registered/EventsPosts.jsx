import React, { useState, useEffect } from "react"
import axios from "axios"
import MeetupsPost from "./MeetupsPost"
import { useTranslation } from "react-i18next"
import useUser from "../../../hooks/useUser"

export default function EventsPosts() {
  const [posts, setPosts] = useState([])
  const [attendedPosts, setAttendedPosts] = useState([])
  const { user } = useUser()
  const { i18n } = useTranslation()
  const { t } = useTranslation()

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_ADDRESS}/user/getUsersRegisteredEvents/${user._id}`
      )
      .then((response) => {
        console.log(response)

        const sortedPosts = response.data.sort((a, b) => {
          return (
            new Date(b.eventStartTime).getTime() -
            new Date(a.eventStartTime).getTime()
          )
        })

        setPosts(sortedPosts)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error)
      })
  }, [])

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_ADDRESS}/user/getUsersAttendedEvents/${user._id}`
      )
      .then((response) => {
        console.log(response)

        const sortedPosts = response.data.sort((a, b) => {
          return (
            new Date(b.eventStartTime).getTime() -
            new Date(a.eventStartTime).getTime()
          )
        })

        setAttendedPosts(sortedPosts)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error)
      })
  }, [])

  return (
    <>
      <div className="mb-1 text-sm italic text-slate-500">
        {t("TotalEvents")}: {posts.length}
      </div>
      <h1 className="mb-1 text-xl font-bold md:text-2xl text-slate-800">
        {t("YettoAttend")}
      </h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <MeetupsPost key={post._id} {...post} />
        ))}
      </div>

      <h1 className="mt-4 mb-1 text-xl font-bold md:text-2xl text-slate-800">
        {t("AttendedEvents")}
      </h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {attendedPosts.map((post) => (
          <MeetupsPost key={post._id} {...post} />
        ))}
      </div>
    </>
  )
}
