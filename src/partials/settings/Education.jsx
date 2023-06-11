import React, { useState, useEffect } from "react"
import axios from "axios" // import axios for making HTTP requests
import { useTranslation } from "react-i18next"
import useUser from "../../../hooks/useUser"
import { toast } from "react-toastify"

function EducationStatus() {
  const [currentEducationLevel, setCurrentEducationLevel] = useState("") // state variable for currentEmployment
  const [ongoingEducation, setOngoingEducation] = useState("") // state variable for previousEmployment
  const [furtherStudyInterest, setFurtherStudyInterest] = useState("") // state variable for jobTraining
  const { i18n } = useTranslation()
  const { t } = useTranslation()
  const { user } = useUser()

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_ADDRESS}/user/user/${user._id}`
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
        `${import.meta.env.VITE_SERVER_ADDRESS}/user/userUpdates/${user._id}`,
        {
          educationStatus: {
            currentEducationLevel: currentEducationLevel,
            ongoingEducation: ongoingEducation,
            furtherStudyInterest: furtherStudyInterest,
          },
        }
      )
      console.log(response.data)
      toast.success("Profile updated successfully.")
    } catch (error) {
      console.error("Failed to update profile.", error)
      toast.error("Failed to update profile.")
    }
  }
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="grow">
        {/* Panel body */}
        <div className="p-6 space-y-6">
          <h2 className="mb-5 text-2xl font-bold text-slate-800">
            {t("EducationStatus")}
          </h2>
          {/* section 1*/}
          <section>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              {/* Current Education Status,*/}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="CurrentEducationLevel"
                >
                  {t("Educationlevel")}
                </label>
                <select
                  id="CurrentEducationLevel"
                  className="w-full form-select"
                  value={currentEducationLevel}
                  onChange={(e) => setCurrentEducationLevel(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="noEducation">{t("NoEducation")}</option>
                  <option value="primarySchool">{t("PrimarySchool")}</option>
                  <option value="middleSchool">{t("MiddleSchool")}</option>
                  <option value="10th">{t("10th")}</option>
                  <option value="12th">{t("12th")}</option>
                  <option value="diploma">{t("Diploma")}</option>
                  <option value="graduate">{t("Graduate")}</option>
                </select>
              </div>

              {/* ongoing Education,*/}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="OngoingEducation"
                >
                  {t("OngoingEducation")}
                </label>
                <select
                  id="OngoingEducation"
                  className="w-full form-select"
                  value={ongoingEducation}
                  onChange={(e) => setOngoingEducation(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="yes">{t("Yes")}</option>
                  <option value="no">{t("No")}</option>
                </select>
              </div>

              {/* further Study Interest,*/}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="FurtherStudyInterest"
                >
                  {t("FurtherStudyInterest")}
                </label>
                <select
                  id="FurtherStudyInterest"
                  className="w-full form-select"
                  value={furtherStudyInterest}
                  onChange={(e) => setFurtherStudyInterest(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="yes">{t("Yes")}</option>
                  <option value="no">{t("No")}</option>
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

export default EducationStatus
