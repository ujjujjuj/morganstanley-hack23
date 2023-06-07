import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import React from "react";
import EventDisplay from "./DateFormat";



import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";

// import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

export default function EventPost() {
  const [postInfo, setPostInfo] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/events/event/${id}`).then((response) => {
      response.json().then((data) => {
        setPostInfo(data);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
            {/* Page content */}
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
              {/* Content */}
              <div>
                <div className="mb-6">
                  <Link
                    className="btn-sm px-3 bg-white border-slate-200 hover:border-slate-300 text-slate-600"
                    to="/community/meetups"
                  >
                    <svg
                      className="fill-current text-slate-400 mr-2"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                    >
                      <path d="M5.4.6 6.8 2l-4 4 4 4-1.4 1.4L0 6z" />
                    </svg>
                    <span>Back To Events</span>
                  </Link>
                </div>
                <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">
                  <EventDisplay
                    eventStartTime={postInfo.result.eventStartTime}
                    eventDuration={postInfo.result.eventDuration}
                  />
                </div>
                <header className="mb-4">
                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
                    {postInfo.result.eventName}
                  </h1>
                </header>

                {/* Meta */}
                <div className="space-y-3 sm:flex sm:items-center sm:justify-between sm:space-y-0 mb-6">
                  {/* Author */}

                  {/* Right side */}
                  <div className="flex flex-wrap items-center sm:justify-end space-x-2">
                    {/* Tags */}
                    <div className="text-xs inline-flex items-center font-medium bg-white text-slate-600 rounded-full text-center px-2.5 py-1">
                      <span>{postInfo.result.category}</span>
                    </div>
                    <div className="text-xs inline-flex font-medium uppercase bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1">
                      {postInfo.result.location}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <figure className="mb-6">
                  <img
                    className="w-full rounded-sm"
                    src={postInfo.result.imageUrl}
                    width="640"
                    height="360"
                    alt="Meetup"
                  />
                </figure>

                {/* Post content */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
                    Session Details
                  </h2>
                  <p className="mb-6">{postInfo.result.eventDetails}</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                {/* 1st block */}
                <div className="bg-white p-5 shadow-lg rounded-sm border border-slate-200 lg:w-72 xl:w-80">
                  <div className="space-y-2">
                    <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                      <svg
                        className="w-4 h-4 fill-current shrink-0"
                        viewBox="0 0 16 16"
                      >
                        <path d="m2.457 8.516.969-.99 2.516 2.481 5.324-5.304.985.989-6.309 6.284z" />
                      </svg>
                      <span className="ml-1">Attending</span>
                    </button>
                  </div>
                </div>

                {/* 2nd block */}

                <div className="flex justify-between space-x-1 mb-0 bg-white p-5 shadow-lg rounded-sm border border-slate-200 text-sm text-slate-800 font-semibold lg:w-72 xl:w-80">
                  <div className="">
                    Registered ({postInfo.result.registered.length})
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// const [postInfo,setPostInfo] = useState(null);
// const {userInfo} = useContext(UserContext);
// const {id} = useParams();
// useEffect(() => {
//   fetch(`https://json.extendsclass.com/bin/c6c7aca8a86e`)
//     .then(response => {
//       response.json().then(postInfo => {
//         setPostInfo(postInfo);
//       });
//     });
// }, []);
// if (!postInfo) return '';
// return (
//   <div className="post-page">
//     <h1>{postInfo.title}</h1>
//     <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
//     <div className="author">by @{postInfo.author.username}</div>
//     {userInfo.id === postInfo.author._id && (
//       <div className="edit-row">
//         <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
//           </svg>
//           Edit this post
//         </Link>
//       </div>
//     )}
//     <div className="image">
//       <img src={`http://localhost:4000/${postInfo.cover}`} alt=""/>
//     </div>
//     <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
//   </div>
// );
