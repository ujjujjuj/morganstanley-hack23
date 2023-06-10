import React, { useState } from "react";

function Feedback({ followUp }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFeedbackChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const handleFeedbackSubmit = () => {
    alert("Feedback submitted!");
    //refresh window
    window.location.reload();
    console.log(feedbackText);
  };

  return (
    <div className="grow space-y-3  bg-white shadow-lg rounded-sm border border-slate-200 p-4">
      <div>
        <div className="flex items-center">
          <label className="flex items-center">
            <span className="font-medium text-slate-800 text-base ml-2 mb-4">
              {followUp.eventName} {/* Display the event name here */}
            </span>
          </label>
        </div>

        {/* Expanded area with textarea for feedback */}
        {isExpanded && (
          <div>
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              rows="4"
              onChange={handleFeedbackChange}
            ></textarea>
          </div>
        )}

        <div className="flex justify-between mt-2">
          <button
            className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
            onClick={handleExpandClick}
          >
            {isExpanded ? "Collapse" : "Expand"}
          </button>

          <button
            className="btn bg-emerald-500 hover:bg-emerald-600 text-white"
            onClick={handleFeedbackSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
