import React, { useState, useEffect } from "react"
import axios from "axios"
import MeetupsPost from "./MeetupsPost"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import WelcomeBanner from "./WelcomeBanner"

export default function EventsPosts() {
  const [posts, setPosts] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [pastEvents, setPastEvents] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const { i18n } = useTranslation()
  const { t } = useTranslation()

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_ADDRESS}/events/list`)
      .then((response) => {
        console.log(response)

        const sortedPosts = response.data.sort((a, b) => {
          return (
            new Date(b.eventStartTime).getTime() -
            new Date(a.eventStartTime).getTime()
          )
        })

        setPosts(response.data)
        const today = Date.now()
        const upcoming = sortedPosts.filter(
          (post) => new Date(post.eventStartTime).getTime() >= today
        )
        const past = sortedPosts.filter(
          (post) => new Date(post.eventStartTime).getTime() < today
        )
        setUpcomingEvents(upcoming)
        setPastEvents(past)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error)
      })
  }, [])

  const categories = [
    "Child Education and Enrichment",
    "Legal",
    "Women's Rights",
    "Financial Literacy",
    "Health and Wellbeing",
    "Government Assistance Programs",
    "Employment and Career Development",
  ]

  return (
    <>
      <WelcomeBanner />
      <div className="hidden mb-2 sm:flex sm:justify-between sm:items-center">
        {/* Filters */}
        <div className="hidden mb-0 xl:block">
          <ul className="flex flex-wrap -m-1">
            {categories.map((category) => (
              <li
                className="inline-flex justify-center items-center px-3 py-1 m-1 text-sm font-medium leading-5 bg-white rounded-full border shadow-sm duration-150 ease-in-out border-slate-200 hover:border-slate-300 text-slate-500"
                key={category}
              >
                <button onClick={() => setSelectedCategory(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-1 text-sm italic text-slate-500">
        {t("TotalEvents")}: {posts.length}
      </div>
      <h1 className="mb-1 text-xl font-bold md:text-2xl text-slate-800">
        {t("FutureEvents")}
      </h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {upcomingEvents
          .filter(
            (event) => !selectedCategory || event.category === selectedCategory
          )
          .map((post) => (
            <MeetupsPost key={post._id} {...post} />
          ))}
      </div>
      <h1 className="mt-6 mb-1 text-xl font-bold md:text-2xl text-slate-800">
        {t("PastEvents")}
      </h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {pastEvents
          .filter(
            (event) => !selectedCategory || event.category === selectedCategory
          )
          .map((post) => (
            <MeetupsPost key={post._id} {...post} />
          ))}
      </div>
    </>
  )
}
