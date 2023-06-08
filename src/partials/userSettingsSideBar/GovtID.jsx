import React, { useState, useEffect } from "react";
import axios from "axios"; // import axios for making HTTP requests

function GovtID(props) {
  const [aadharcard, setAadharCard] = useState(""); // state variable for aadharcard
  const [rationcard, setRationCard] = useState(""); // state variable for rationcard
  const [esharamcard, setEsharamCard] = useState(""); // state variable for esharamCard
  const [voterID, setVoterID] = useState(""); // state variable for voterID
  const [pancard, setPancard] = useState(""); // state variable for pancard

  // const id = "d667476a-6f64-47c4-8eb7-4d4504927b60"; // Constant user ID for now
  const id=props.id; 
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/user/user/${id}`
        );

        setAadharCard(response.data.govtSchemes.aadharCard);
        setRationCard(response.data.govtSchemes.rationCard);
        setEsharamCard(response.data.govtSchemes.esharamCard);
        setVoterID(response.data.govtSchemes.panCard);
        setPancard(response.data.govtSchemes.voterId);
      } catch (error) {
        console.error("Failed to fetch user details.", error);
      }
    };
    fetchUserDetail();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3000/user/userUpdates/${id}`,
        {
          govtSchemes: {
            rationCard: rationcard,
            aadharCard: aadharcard,
            esharamCard: esharamcard,
            panCard: pancard,
            voterId: voterID,
          },
        }
      );
      console.log(response.data);
      alert("Profile updated successfully.");
    } catch (error) {
      console.error("Failed to update profile.", error);
      alert("Failed to update profile.");
    }
  };
  return (
    <form className="w-full  " onSubmit={handleSubmit}>
      <div className="grow">
        {/* Panel body */}
        <div className="p-6 space-y-6">
          <h2 className="text-2xl text-slate-800 font-bold mb-5">
            Government IDs
          </h2>

          {/* section 2  - Communication */}

          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
              {/* Ration card,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="RationCard"
                >
                  Ration Card
                </label>
                <input
                  id="RationCard"
                  className="form-input w-full"
                  type="text"
                  value={rationcard}
                  onChange={(e) => setRationCard(e.target.value)}
                />
              </div>

              {/* Aadhar Card,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="Aadharcard"
                >
                  Aadhar Card
                </label>
                <input
                  id="Aadharcard"
                  className="form-input w-full"
                  type="text"
                  value={aadharcard}
                  onChange={(e) => setAadharCard(e.target.value)}
                />
              </div>

              {/* Pan card,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="PanCard"
                >
                  Pan card
                </label>
                <input
                  id="PanCard"
                  className="form-input w-full"
                  type="text"
                  value={pancard}
                  onChange={(e) => setPancard(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* section 2 esharamCard voted id         */}
          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
              {/* e-Sharam Card,*/}
              <div className="sm:w-[32%]">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="EsharamCard"
                >
                  e-Sharam Card
                </label>
                <input
                  id="EsharamCard"
                  className="form-input w-full"
                  type="text"
                  value={esharamcard}
                  onChange={(e) => setEsharamCard(e.target.value)}
                />
                {/* your other fields go here */}
              </div>

              {/* Voter ID Card,*/}
              <div className="sm:w-[32.2%]">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="VoterID"
                >
                  Voter ID Card
                </label>
                <input
                  id="VoterID"
                  className="form-input w-full"
                  type="text"
                  value={voterID}
                  onChange={(e) => setVoterID(e.target.value)}
                />
                {/* your other fields go here */}
              </div>
            </div>
          </section>
        </div>

        {/* Panel footer */}
        <footer>
          <div className="flex flex-col px-6 py-5 border-t border-slate-200">
            <div className="flex self-end">
              <button
                type="submit"
                className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"
              >
                Save
              </button>
            </div>
          </div>
        </footer>
      </div>
    </form>
  );
}

export default GovtID;
