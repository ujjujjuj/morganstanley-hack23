import React from 'react';

const EditDropdown = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="ml-auto w-24 sm:w-36  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default EditDropdown;