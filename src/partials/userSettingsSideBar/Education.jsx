import React, { useState, useEffect } from "react"
import axios from "axios" // import axios for making HTTP requests

function EducationStatus(props) {
  const [currentEducationLevel, setCurrentEducationLevel] = useState("") // state variable for currentEmployment
  const [ongoingEducation, setOngoingEducation] = useState("") // state variable for previousEmployment
  const [furtherStudyInterest, setFurtherStudyInterest] = useState("") // state variable for jobTraining

  // const id = "d667476a-6f64-47c4-8eb7-4d4504927b60"; // Constant user ID for now
  const id = props.id
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_ADDRESS}/user/user/${id}`
        )

        setCurrentEducationLevel(
          response.data.educationStatus.currentEducationLevel
        )
        setOngoingEducation(response.data.educationStatus.ongoingEducation)
        setFurtherStudyInterest(
          response.data.educationStatus.furtherStudyInterest
        )
      } catch (error) {
        console.error("Failed to fetch user details.", error)
      }
    }
    fetchUserDetail()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_ADDRESS}/user/userUpdates/${id}`,
        {
          educationStatus: {
            currentEducationLevel: currentEducationLevel,
            ongoingEducation: ongoingEducation,
            furtherStudyInterest: furtherStudyInterest,
          },
        }
      )
      console.log(response.data)
      alert("Profile updated successfully.")
    } catch (error) {
      console.error("Failed to update profile.", error)
      alert("Failed to update profile.")
    }
  }
  return (
    <form className="w-full  " onSubmit={handleSubmit}>
      <div className="grow">
        {/* Panel body */}
        <div className="p-6 space-y-6">
          <h2 className="text-2xl text-slate-800 font-bold mb-5">
            Education Status
          </h2>
          {/* section 1*/}
          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
              {/* Current Education Status,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="CurrentEducationLevel"
                >
                  Education level
                </label>
                <select
                  id="CurrentEducationLevel"
                  className="form-select w-full"
                  value={currentEducationLevel}
                  onChange={(e) => setCurrentEducationLevel(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="noEducation">No Education</option>
                  <option value="primarySchool">Primary School</option>
                  <option value="middleSchool">Middle School</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                  <option value="diploma">Diploma</option>
                  <option value="graduate">Graduate</option>
                </select>
              </div>

              {/* ongoing Education,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="OngoingEducation"
                >
                  Ongoing Education
                </label>
                <select
                  id="OngoingEducation"
                  className="form-select w-full"
                  value={ongoingEducation}
                  onChange={(e) => setOngoingEducation(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* further Study Interest,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="FurtherStudyInterest"
                >
                  Further Study Interest?
                </label>
                <select
                  id="FurtherStudyInterest"
                  className="form-select w-full"
                  value={furtherStudyInterest}
                  onChange={(e) => setFurtherStudyInterest(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        {/* Panel footer */}
        {props.showSave === "Yes" && (
          <footer>
            <div className="flex flex-col px-6 py-5 border-t border-slate-200">
              <div className="flex self-end">
                <button
                  type="submit"
                  onSubmit={handleSubmit}
                  className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"
                >
                  Save
                </button>
              </div>
            </div>
          </footer>
        )}
      </div>
    </form>
  )
}

export default EducationStatus
