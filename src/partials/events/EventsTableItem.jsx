import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventsTableItem(props) {
  const navigate = useNavigate();
  let showUserList=()=>{
    navigate('/events/userList',{state:{eventId:props._id}});
  }

  let editEvent=()=>{
    navigate("/events/createEvent",{state:
      {eventId:props._id,
        type:"Edit",
      eventName:props.eventName,
      category:props.category,
      details:props.eventDetails,
      location:props.eventLocation,
      attended:props.attended,
      registered:props.registered,
      followUp:props.followUp,
      feedback:props.feedback,
      imageUrl:props.imageUrl    
    }});
  }
  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <input id={props.sessionId} style={{ visibility: 'hidden' }} className="form-checkbox" type="checkbox" onChange={props.handleClick} checked={props.isChecked} />
          </label>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center relative">
          <button>
          </button>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div onClick={editEvent} style={{ cursor: 'pointer' }} className="font-medium text-slate-800">{props.eventName}</div>
          
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left">{props.participantsCount}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.category}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.eventLocation}</div>
      </td>
      <td className="px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.feedbacksCount}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <button onClick={showUserList} className="text-slate-400 hover:text-slate-500 rounded-full">
          <span className="sr-only">Menu</span>
          <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="2" />
            <circle cx="10" cy="16" r="2" />
            <circle cx="22" cy="16" r="2" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default EventsTableItem;
