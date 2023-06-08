import React, { useState, useEffect } from "react";
import axios from "axios"; // import axios for making HTTP requests

function MedicalStatus(props) {
  const [hospitalizationRecords, setHospitalizationRecords] = useState(""); // state variable for hospitalizationRecords
  const [chronicIllnesses, setChronicIllnesses] = useState(""); // state variable for chronicIllnesses
  const [currentMedications, setCurrentMedications] = useState(""); // state variable for currentMedications
  const [bloodGroup, setBloodGroup] = useState(""); // state variable bloodGroup
  const [allergies, setAllergies] = useState(""); // state variable allergies
  const [vaccinationRecords, setVaccinationRecords] = useState(""); // state variable vaccinationRecords
  const [healthInsurance, setHealthInsurance] = useState(""); // state variable healthInsurance

  // const id = "d667476a-6f64-47c4-8eb7-4d4504927b60"; // Constant user ID for now
  const id=props.id; 
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/user/user/${id}`
        );

        setHospitalizationRecords(
          response.data.medicalRecords.hospitalizationRecords
        );
        setChronicIllnesses(response.data.medicalRecords.chronicIllnesses);
        setCurrentMedications(response.data.medicalRecords.currentMedications);
        setBloodGroup(response.data.medicalRecords.bloodGroup);
        setAllergies(response.data.medicalRecords.allergies);
        setVaccinationRecords(response.data.medicalRecords.vaccinationRecords);
        setHealthInsurance(response.data.medicalRecords.healthInsurance);
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
          medicalRecords: {
            hospitalizationRecords: hospitalizationRecords,
            chronicIllnesses: chronicIllnesses,
            currentMedications: currentMedications,
            bloodGroup: bloodGroup,
            allergies: allergies,
            vaccinationRecords: vaccinationRecords,
            healthInsurance: healthInsurance,
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
            Medical Status
          </h2>

          {/* section 1  - Communication */}

          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
              {/* setHospitalizationRecords,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="hospitalizationRecords"
                >
                  Hospitalization Records
                </label>

                <textarea
                  id="hospitalizationRecords"
                  className="form-textarea w-full"
                  rows="3"
                  value={hospitalizationRecords}
                  onChange={(e) => setHospitalizationRecords(e.target.value)}
                ></textarea>
              </div>
              {/* chronicIllnesses,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="chronicIllnesses"
                >
                  Chronic illnesses
                </label>
                <textarea
                  id="chronicIllnesses"
                  className="form-input w-full"
                  rows="3"
                  value={chronicIllnesses}
                  onChange={(e) => setChronicIllnesses(e.target.value)}
                ></textarea>
              </div>

              {/*currentMedications,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="currentMedications"
                >
                  Current Medications
                </label>
                <textarea
                  id="currentMedications"
                  className="form-input w-full"
                  rows="3"
                  value={currentMedications}
                  onChange={(e) => setCurrentMedications(e.target.value)}
                ></textarea>
              </div>
            </div>
          </section>

          {/* section 2      */}
          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
              {/* bloodGroup,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="bloodGroup"
                >
                  Blood Group
                </label>
                <select
                  id="bloodGroup"
                  className="form-input w-full"
                  rows="3"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                {/* your other fields go here */}
              </div>

              {/* allergies,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="allergies"
                >
                  Allergies
                </label>
                <select
                  id="allergies"
                  className="form-input w-full"
                  rows="3"
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">None</option>
                </select>
                {/* your other fields go here */}
              </div>
              {/* healthInsurance,*/}
              <div className="sm:w-[32%]">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="vaccinationRecords"
                >
                  Health Insurance
                </label>
                <select
                  id="healthInsurance"
                  className="form-input w-full"
                  rows="3"
                  value={healthInsurance}
                  onChange={(e) => setHealthInsurance(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">None</option>
                </select>
                {/* your other fields go here */}
              </div>
            </div>
          </section>

          {/* section 3      */}
          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2"></div>
            {/* vaccinationRecords,*/}
            <div className="sm:w-1/3">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="vaccinationRecords"
              >
                Vaccination Records
              </label>
              <textarea
                id="vaccinationRecords"
                className="form-input w-full"
                rows="3"
                value={vaccinationRecords}
                onChange={(e) => setVaccinationRecords(e.target.value)}
              ></textarea>
              {/* your other fields go here */}
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

export default MedicalStatus;
