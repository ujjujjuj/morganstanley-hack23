import React, { useState, useEffect } from "react"
import axios from "axios" 

function Employment(props) {
  const [currentEmployment, setCurrentEmployment] = useState("") 
  const [previousEmployment, setPreviousEmployment] = useState("") 
  const [jobTraining, setJobTraining] = useState("") 
  const [workNature, setWorkNature] = useState("") 
  const [workIndustry, setWorkIndustry] = useState("") 
  const [openForEmployment, setOpenForEmployment] = useState("") 
  const id = props.id
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_ADDRESS}/user/user/${id}`
        )

        setCurrentEmployment(response.data.employmentStatus.currentEmployment)
        setPreviousEmployment(response.data.employmentStatus.prevEmployment)
        setJobTraining(response.data.employmentStatus.jobTraining)
        setWorkNature(response.data.employmentStatus.workNature)
        setWorkIndustry(response.data.employmentStatus.workIndustry)
        setOpenForEmployment(response.data.employmentStatus.openForEmployment)
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
          employmentStatus: {
            currentEmployment: currentEmployment,
            prevEmployment: previousEmployment,
            jobTraining: jobTraining,
            workNature: workNature,
            workIndustry: workIndustry,
            openForEmployment: openForEmployment,
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
            Employment Status
          </h2>

          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
              {/* Current Employment Status,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="CurrentEmployment"
                >
                  Current Employment Status
                </label>
                <select
                  id="CurrentEmployment"
                  className="form-select w-full"
                  value={currentEmployment}
                  onChange={(e) => setCurrentEmployment(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="employed">Employed</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="retired">Retired</option>
                  <option value="student">Student</option>
                </select>
              </div>

              {/* work nature,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="WorkNature"
                >
                  Work nature
                </label>
                <select
                  id="WorkNature"
                  className="form-select w-full"
                  value={workNature}
                  onChange={(e) => setWorkNature(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="permanent">Permanent</option>
                  <option value="contract">Contract</option>
                  <option value="casual">Casual</option>
                </select>
              </div>

              {/* workIndustry,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="WorkIndustry"
                >
                  Industry of Work
                </label>
                <select
                  id="WorkIndustry"
                  className="form-select w-full"
                  value={workIndustry}
                  onChange={(e) => setWorkIndustry(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="construction">Construction</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </section>

          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
              {/* PreviousEmployment,*/}
              <div className="sm:w-[32%]">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="PreviousEmployment"
                >
                  Previous Employment (if any)
                </label>
                <input
                  id="PreviousEmployment"
                  className="form-input w-full"
                  type="text"
                  value={previousEmployment}
                  onChange={(e) => setPreviousEmployment(e.target.value)}
                />
              </div>

              {/* openForEmployment,*/}
              <div className="sm:w-[32.2%]">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="OpenForEmployment"
                >
                  Open For Employment?
                </label>
                <select
                  id="OpenForEmployment"
                  className="form-select w-full"
                  value={openForEmployment}
                  onChange={(e) => setOpenForEmployment(e.target.value)}
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

export default Employment
