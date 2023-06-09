import React, { useState, useEffect } from "react"
import axios from "axios"
import MeetupsPost from "./MeetupsPost"

export default function EventsPosts() {
  const [posts, setPosts] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [pastEvents, setPastEvents] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

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
        console.log(past)
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
      <div className="hidden sm:flex sm:justify-between sm:items-center mb-2">
        {/* Filters */}
        <div className="mb-0">
          <ul className="flex flex-wrap -m-1">
            {categories.map((category) => (
              <li
                className="inline-flex m-1 items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out"
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

      <div className="text-sm text-slate-500 italic mb-1">
        Total events: {posts.length}
      </div>
      <h1 className="text-xl md:text-2xl mb-1 text-slate-800 font-bold">
        Future Events
      </h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {upcomingEvents
          .filter(
            (event) => !selectedCategory || event.category === selectedCategory
          )
          .map((post) => (
            <MeetupsPost key={post._id} {...post} />
          ))}
      </div>
      <h1 className="text-xl md:text-2xl text-slate-800 mt-6 mb-1 font-bold">
        Past Events
      </h1>

      <div className="grid sm:grid-cols-2 gap-6">
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
