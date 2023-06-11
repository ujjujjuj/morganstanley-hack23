import React, { useState, useEffect } from "react"
import axios from "axios" 
import { useTranslation } from "react-i18next"
import useUser from "../../../hooks/useUser"

function Employment() {
  const [currentEmployment, setCurrentEmployment] = useState("") 
  const [previousEmployment, setPreviousEmployment] = useState("")
  const [jobTraining, setJobTraining] = useState("") 
  const [workNature, setWorkNature] = useState("") 
  const [workIndustry, setWorkIndustry] = useState("") 
  const [openForEmployment, setOpenForEmployment] = useState("") 
  const { i18n } = useTranslation()
  const { t } = useTranslation()
  const { user } = useUser()
  const id = user._id

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
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="grow">
        {/* Panel body */}
        <div className="p-6 space-y-6">
          <h2 className="mb-5 text-2xl font-bold text-slate-800">
            {t("EmploymentStatus")}
          </h2>

          {/* section 1*/}

          <section>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              {/* Current Employment Status,*/}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="CurrentEmployment"
                >
                  {t("CurrentEmploymentStatus")}
                </label>
                <select
                  id="CurrentEmployment"
                  className="w-full form-select"
                  value={currentEmployment}
                  onChange={(e) => setCurrentEmployment(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="Employed">{t("Employed")}</option>
                  <option value="Unemployed">{t("Unemployed")}</option>
                  <option value="Retired">{t("Retired")}</option>
                  <option value="Student">{t("Student")}</option>
                </select>
              </div>

              {/* work nature,*/}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="WorkNature"
                >
                  {t("Worknature")}
                </label>
                <select
                  id="WorkNature"
                  className="w-full form-select"
                  value={workNature}
                  onChange={(e) => setWorkNature(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="Permanent">{t("Permanent")}</option>
                  <option value="Contract">{t("Contract")}</option>
                  <option value="Casual">{t("Casual")}</option>
                </select>
              </div>

              {/* workIndustry,*/}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="WorkIndustry"
                >
                  {t("IndustryofWork")}
                </label>
                <select
                  id="WorkIndustry"
                  className="w-full form-select"
                  value={workIndustry}
                  onChange={(e) => setWorkIndustry(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="Agriculture">{t("Agriculture")}</option>
                  <option value="Manufacturing">{t("Manufacturing")}</option>
                  <option value="Construction">{t("Construction")}</option>
                  <option value="Other">{t("Other")}</option>
                </select>
              </div>
            </div>
          </section>

          <section>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              {/* PreviousEmployment,*/}
              <div className="sm:w-[32%]">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="PreviousEmployment"
                >
                  {t("PreviousEmployment")}
                </label>
                <input
                  id="PreviousEmployment"
                  className="w-full form-input"
                  type="text"
                  value={previousEmployment}
                  onChange={(e) => setPreviousEmployment(e.target.value)}
                />
              </div>

              {/* openForEmployment,*/}
              <div className="sm:w-[32.2%]">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="OpenForEmployment"
                >
                  {t("OpenForEmployment")}
                </label>
                <select
                  id="OpenForEmployment"
                  className="w-full form-select"
                  value={openForEmployment}
                  onChange={(e) => setOpenForEmployment(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="Yes">{t("Yes")}</option>
                  <option value="No">{t("No")}</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        {/* Panel footer */}
        <footer>
          <div className="flex flex-col px-6 py-5 border-t border-slate-200">
            <div className="flex self-end">
              <button
                onSubmit={handleSubmit}
                type="submit"
                className="ml-3 text-white bg-indigo-500 btn hover:bg-indigo-600"
              >
                {t("Save")}
              </button>
            </div>
          </div>
        </footer>
      </div>
    </form>
  )
}

export default Employment
