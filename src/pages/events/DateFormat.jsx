import React from "react";
import { format, addHours } from "date-fns";

const EventDisplay = ({ eventStartTime, eventDuration }) => {
  const startTime = new Date(eventStartTime);
  const endTime = addHours(startTime, eventDuration);

  const formattedStartTime = format(startTime, "eee dd MMM, yyyy - hh:mm aa");
  const formattedEndTime = format(endTime, "hh:mm aa");

  const formattedEvent = `${formattedStartTime} -> ${formattedEndTime}`;

  return (
    <div>
      <p>{formattedEvent}</p>
    </div>
  );
};

export default EventDisplay;
