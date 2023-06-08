import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventUserTableItem(props) {
  const navigate = useNavigate();
  function editUser(){
    console.log("Details :) ");

    navigate("/users/editBasicDetails",{state:{id:props._id,type:"User"}});

  }
  return (
    <tr>
      {/* <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <input id={props.sessionId} className="form-checkbox" type="checkbox" onChange={props.handleClick} checked={props.isChecked} />
          </label>
        </div>
      </td> */}
      {/* <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px"> */}
        {/* <div className="flex items-center relative"> */}
          {/* <button> */}
            {/* <svg className={`w-4 h-4 shrink-0 fill-current ${props.fav ? 'text-amber-500' : 'text-slate-300'}`} viewBox="0 0 16 16">
              <path d="M8 0L6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934h-6L8 0z" />
            </svg> */}
          {/* </button> */}
        {/* </div> */}
      {/* </td> */}
      {/* <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"> */}
        {/* <div className="flex items-center"> */}
          {/* <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
            <img className="rounded-full" src={props.image} width="40" height="40" alt={props.name} />
          </div> */}
          {/* <div className="font-medium text-slate-800">{props.name}</div> */}
          
        {/* </div> */}
      {/* </td> */}
      <td className="px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left">{props.name}</div>
      </td>
      <td className="px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left">{props.age}</div>
      </td>
      <td className="px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.community}</div>
      </td>
      <td className="px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.phone}</div>
      </td>
      <td className="px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.language}</div>
      </td>
      <td className="px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <button onClick={editUser} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
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
      
      {/* <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px"> */}
        {/* Menu button */}
        {/* <button onClick={showUserProfile} className="text-slate-400 hover:text-slate-500 rounded-full">
          <span className="sr-only">Menu</span>
          <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="2" />
            <circle cx="10" cy="16" r="2" />
            <circle cx="22" cy="16" r="2" />
          </svg>
        </button>
      </td> */}
    </tr>
  );
}

export default EventUserTableItem;
