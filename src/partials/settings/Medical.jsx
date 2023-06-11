import React, { useState, useEffect } from "react"
import axios from "axios"
import { useTranslation } from "react-i18next"
import useUser from "../../../hooks/useUser"

function MedicalStatus() {
  const [hospitalizationRecords, setHospitalizationRecords] = useState("") 
  const [chronicIllnesses, setChronicIllnesses] = useState("") 
  const [currentMedications, setCurrentMedications] = useState("")
  const [bloodGroup, setBloodGroup] = useState("") 
  const [allergies, setAllergies] = useState("") 
  const [vaccinationRecords, setVaccinationRecords] = useState("") 
  const [healthInsurance, setHealthInsurance] = useState("") 
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

        setHospitalizationRecords(
          response.data.medicalRecords.hospitalizationRecords
        )
        setChronicIllnesses(response.data.medicalRecords.chronicIllnesses)
        setCurrentMedications(response.data.medicalRecords.currentMedications)
        setBloodGroup(response.data.medicalRecords.bloodGroup)
        setAllergies(response.data.medicalRecords.allergies)
        setVaccinationRecords(response.data.medicalRecords.vaccinationRecords)
        setHealthInsurance(response.data.medicalRecords.healthInsurance)
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
        <div className="p-6 space-y-6">
          <h2 className="mb-5 text-2xl font-bold text-slate-800">
            {t("MedicalStatus")}
          </h2>

          <section>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="hospitalizationRecords"
                >
                  {t("HospitalizationRecords")}
                </label>

                <textarea
                  id="hospitalizationRecords"
                  className="w-full form-textarea"
                  rows="3"
                  value={hospitalizationRecords}
                  onChange={(e) => setHospitalizationRecords(e.target.value)}
                ></textarea>
              </div>
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="chronicIllnesses"
                >
                  {t("Chronicillnesses")}
                </label>
                <textarea
                  id="chronicIllnesses"
                  className="w-full form-input"
                  rows="3"
                  value={chronicIllnesses}
                  onChange={(e) => setChronicIllnesses(e.target.value)}
                ></textarea>
              </div>

              {/*currentMedications,*/}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="currentMedications"
                >
                  {t("CurrentMedications")}
                </label>
                <textarea
                  id="currentMedications"
                  className="w-full form-input"
                  rows="3"
                  value={currentMedications}
                  onChange={(e) => setCurrentMedications(e.target.value)}
                ></textarea>
              </div>
            </div>
          </section>

          {/* section 2      */}
          <section>
            <div className="mt-2 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              {/* bloodGroup,*/}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="bloodGroup"
                >
                  {t("BloodGroup")}
                </label>
                <select
                  id="bloodGroup"
                  className="w-full form-input"
                  rows="3"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="A+">{t("Apos")}</option>
                  <option value="A-">{t("Aneg")}</option>
                  <option value="B+">{t("Bpos")}</option>
                  <option value="B-">{t("Bneg")}</option>
                  <option value="AB+">{t("ABpos")}</option>
                  <option value="AB-">{t("ABneg")}</option>
                  <option value="O+">{t("Opos")}</option>
                  <option value="O-">{t("Oneg")}</option>
                </select>
                {/* your other fields go here */}
              </div>

              {/* allergies,*/}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="allergies"
                >
                  {t("Allergies")}
                </label>
                <select
                  id="allergies"
                  className="w-full form-input"
                  rows="3"
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="yes">{t("Yes")}</option>
                  <option value="no">{t("None")}</option>
                </select>
                {/* your other fields go here */}
              </div>
              {/* healthInsurance,*/}
              <div className="sm:w-[32%]">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="vaccinationRecords"
                >
                  {t("HealthInsurance")}
                </label>
                <select
                  id="healthInsurance"
                  className="w-full form-input"
                  rows="3"
                  value={healthInsurance}
                  onChange={(e) => setHealthInsurance(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="yes">{t("Yes")}</option>
                  <option value="no">{t("None")}</option>
                </select>
                {/* your other fields go here */}
              </div>
            </div>
          </section>

          {/* section 3      */}
          <section>
            <div className="mt-2 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4"></div>
            {/* vaccinationRecords,*/}
            <div className="sm:w-1/3">
              <label
                className="block mb-1 text-sm font-medium"
                htmlFor="vaccinationRecords"
              >
                {t("VaccinationRecords")}
              </label>
              <textarea
                id="vaccinationRecords"
                className="w-full form-input"
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

export default MedicalStatus
