import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventUserTableItem(props) {
  const navigate = useNavigate();
  function showUserProfile(){
    console.log("Details :) ");
    navigate("/users/editBasicDetails",{state:{id:props._id,type:"Event"}});
  }
  return (
    <tr>
      <td className="px-8 py-3">
        <div className="text-left">{props.name}</div>
      </td>
      <td className="px-8 py-3">
        <div className="text-left">{props.age}</div>
      </td>
      <td className="px-8 py-3">
        <div className="text-left">{props.community}</div>
      </td>
      <td className="px-8 py-3">
        <div className="text-left">{props.phone}</div>
      </td>
      <td className="px-8 py-3">
        <div className="text-left">{props.language}</div>
      </td>
      <td className="px-8 py-3">
        <button onClick={showUserProfile} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          User Details
        </button>
      </td>
      {(props.isBoth==="Yes") && <td className="px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">
        {(props.typeOfEvent==="Attend") ?(<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-base font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        Attended
      </span>):<span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-base font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
        Registered
      </span>}
        </div>
      </td>}
    </tr>
  );
}

export default EventUserTableItem;
