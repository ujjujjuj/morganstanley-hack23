import React from 'react';
import { Link } from 'react-router-dom';

function CampaignsCard(props) {

;


  return (
    <div className="col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="flex flex-col h-full p-5">
        <header>

        </header>
        <div className="grow mt-2">
          <Link className="inline-flex text-slate-800 hover:text-slate-900 mb-1" to={props.title}>
            <h2 className="text-xl leading-snug font-semibold">{props.title}</h2>
          </Link>
        </div>
        <footer className="mt-5">
          <div className="flex justify-between items-center">

            <div>
              <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600" to={props.title}>View -&gt;</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CampaignsCard;
