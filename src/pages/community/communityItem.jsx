import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventUserTableItem(props) {
  const navigate = useNavigate();
  return (
    <tr>
      <td className="px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left">{props.community}</div>
      </td>
      <td className="px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left">{props.count}</div>
      </td>
    </tr>
  );
}

export default EventUserTableItem;
