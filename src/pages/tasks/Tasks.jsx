import React from "react";
import { classNamesShape } from "react-transition-group/cjs/utils/PropTypes";

function Tasks({ task }) {
  return (
    <div className="space-y-3 grow">
      <div>
        <div className="flex items-center">
          <label className="flex items-center">
            <span className="mb-4 ml-2 text-base font-medium text-slate-800">
              {task.eventName} {/* Display the event name here */}
            </span>
          </label>
        </div>
        {/* Nested checkboxes */}

        {task.category === "Child Education and Enrichment" && (
          <ul className="pl-12 space-y-3">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Finish the presentation
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Finish the design
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Publish the content
                </span>
              </label>
            </li>
          </ul>
        )}

        {task.category === "Legal" && (
          <ul className="pl-12 space-y-3">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Finish the presentation
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Finish the design
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Publish the content
                </span>
              </label>
            </li>
          </ul>
        )}

        {task.category === "Women's Rights" && (
          <ul className="pl-12 space-y-3">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Finish the presentation
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Finish the design
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Publish the content
                </span>
              </label>
            </li>
          </ul>
        )}

        {task.category === "Financial Literacy" && (
          <ul className="pl-12 space-y-3">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Finish the presentation
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Finish the design
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Publish the content
                </span>
              </label>
            </li>
          </ul>
        )}

        {task.category === "Health and Wellbeing" && (
          <ul className="pl-12 space-y-3">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">test</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Finish the design
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Publish the content
                </span>
              </label>
            </li>
          </ul>
        )}

        {task.category === "Government Assistance Programs" && (
          <ul className="pl-12 space-y-3">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Finish the presentation
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Finish the design
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Publish the content
                </span>
              </label>
            </li>
          </ul>
        )}

        {task.category === "Employment and Career Development" && (
          <ul className="pl-12 space-y-3">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Finish the presentation
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Finish the design
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-indigo-500 bg-white rounded-full border peer focus:ring-0 focus-visible:ring border-slate-200"
                />
                <span className="ml-3 text-sm text-slate-800">
                  Publish the content
                </span>
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Start */}
      <div className="flex justify-end mt-2">
        <button className="text-white bg-emerald-500 btn hover:bg-emerald-600">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Tasks;
