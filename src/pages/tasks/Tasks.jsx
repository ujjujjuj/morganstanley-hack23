import React from "react";
import axios from "axios";
import useUser from "../../../hooks/useUser"


function Tasks({ task }) {
  const { user } = useUser()
  const userID = user._id

  const markUserFollowedUp = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_ADDRESS}/user/markUserFollowedUp`,
        {
          eventId: task._id,
          userId: userID,
        }
      );
      if (response.data) {
        alert("Successfully submitted");
        window.location.reload(); 
      }
    } catch (err) {
      console.error(err.message);
      alert("Error in marking user as followed up");
    }
  };

  return (
    <div className="grow space-y-3 ">
      <div>
        <div className="flex items-center">
          <label className="flex items-center">
            <span className="font-medium text-slate-800 text-base  ml-2 mb-4">
              {task.eventName} 
            </span>
          </label>
        </div>

        {task.category === "Child Education and Enrichment" && (
          <ul className="pl-12 space-y-3 ">
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Are you using any learning methods discussed at the event with
                  your child?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentation1"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentation1"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Have you seen any improvements in your child's schoolwork
                  since the event?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentation2"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentation2"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Have you tried any new activities at home to help your child
                  learn?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentation3"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentation3"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Do you feel your child enjoys learning more now?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentation4"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentation4"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        )}

        {task.category === "Legal" && (
          <ul className="pl-12 space-y-3">
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Are you using any of the legal advice from the event in your
                  life?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentation5"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentation5"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Do you feel better equipped to understand your legal rights
                  now?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentation6"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentation6"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Has the event helped you handle any legal issues you were
                  facing?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentation7"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentation7"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Do you feel more confident when dealing with legal situations
                  now?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentation8"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentation8"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        )}

        {task.category === "Women's Rights" && (
          <ul className="pl-12 space-y-3">
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Are you more aware of women's rights after attending the
                  event?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentation9"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentation9"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Have you made any changes in your life to promote women's
                  rights?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationa"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationa"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Have you talked to anyone about women's rights since the
                  event?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationb"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationb"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Do you feel more confident standing up for women's rights now?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationc"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationc"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        )}

        {task.category === "Financial Literacy" && (
          <ul className="pl-12 space-y-3">
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Are you managing your money better since attending the event?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationd"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationd"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Have you started saving money based on the tips shared?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentatione"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentatione"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Are you able to make your money last longer since the event?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationz"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationz"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Are you using any of the budgeting methods discussed?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationx"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationx"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        )}

        {task.category === "Health and Wellbeing" && (
          <ul className="pl-12 space-y-3">
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Are you taking better care of your health since the event?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationv"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationv"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Have you started doing any of the exercises discussed at the
                  event?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationn"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationn"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Have you made any changes to your diet to be healthier?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationm"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationm"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Are you doing anything differently to take care of your mental
                  health?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationy"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationy"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        )}

        {task.category === "Government Assistance Programs" && (
          <ul className="pl-12 space-y-3">
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Have you applied for any government help after the event?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationu"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationu"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Has the event helped you get any benefits or assistance?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationi"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationi"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Have you guided anyone else to apply for government help?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationo"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationo"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Do you understand more about government assistance programs
                  available?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationp"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationp"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        )}

        {task.category === "Employment and Career Development" && (
          <ul className="pl-12 space-y-3">
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Have you found a job or improved your work situation since the
                  event?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationg"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationg"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Did the event help you get any job interviews or
                  opportunities?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationh"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationh"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Are you talking to more people about jobs since the event?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationj"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationj"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800 ">
                  Have you made any changes to your job application or resume
                  based on the event?
                </span>
                <div className="flex gap-2 pr-10">
                  <label className="flex items-center  ">
                    <input
                      type="radio"
                      name="presentationk"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">Yes</span>
                  </label>
                  <label className="flex items-center ml-3">
                    <input
                      type="radio"
                      name="presentationk"
                      className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                    />
                    <span className="text-sm text-slate-800 ml-3">No</span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        )}
      </div>

      {/* Start */}
      <div className="flex justify-end mt-2">
        <button
          className="btn bg-emerald-500 hover:bg-emerald-600 text-white"
          onClick={markUserFollowedUp}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Tasks;
