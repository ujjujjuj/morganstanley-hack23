import React, { useState } from 'react';
import EditDropdown from './editDropdown';
import { useNavigate } from 'react-router-dom';
const EditFilterComponent = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFactor, setSelectedFactor] = useState('');
    const navigate=useNavigate();
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFactorChange = (e) => {
    setSelectedFactor(e.target.value);
  };
  const handleFilterSubmit = () => {
    // Perform the filtering logic here based on searchValue and selectedFactor
    // console.log('Search Value:', searchValue);
    // console.log('Selected Factor:', selectedFactor);
    if(selectedFactor==="View"){
      props.setFactor("View"); 
    }
    else{
      props.setFactor(selectedFactor); 
    }
    navigate("/users/editBasicDetails",{state:{id:location.state.id}});
  };
  const factors = [
    { value: "View", label: "View" },
    { value: "Edit", label: "Edit" },
  ];

  return (
    <div className="container mx-auto mt-4">
      <div className="flex space-x-4">
        <EditDropdown options={factors} value={selectedFactor} onChange={handleFactorChange} />
        <button
          onClick={handleFilterSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded-md focus:outline-none hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditFilterComponent;
