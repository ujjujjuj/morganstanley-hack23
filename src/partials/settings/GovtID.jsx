import React, { useState, useEffect } from "react"
import axios from "axios" // import axios for making HTTP requests
import { useTranslation } from "react-i18next"
import useUser from "../../../hooks/useUser"
import { toast } from "react-toastify"

function GovtID() {
  const [aadharcard, setAadharCard] = useState("") // state variable for aadharcard
  const [rationcard, setRationCard] = useState("") // state variable for rationcard
  const [esharamcard, setEsharamCard] = useState("") // state variable for esharamCard
  const [voterID, setVoterID] = useState("") // state variable for voterID
  const [pancard, setPancard] = useState("") // state variable for pancard
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

        setAadharCard(response.data.govtSchemes.aadharCard)
        setRationCard(response.data.govtSchemes.rationCard)
        setEsharamCard(response.data.govtSchemes.esharamCard)
        setVoterID(response.data.govtSchemes.panCard)
        setPancard(response.data.govtSchemes.voterId)
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
          govtSchemes: {
            rationCard: rationcard,
            aadharCard: aadharcard,
            esharamCard: esharamcard,
            panCard: pancard,
            voterId: voterID,
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
            {t("GovernmentIDs")}
          </h2>

          {/* section 1 */}
          <section>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              {/* Ration Card */}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="RationCard"
                >
                  {t("RationCard")}
                </label>
                <select
                  id="RationCard"
                  className="w-full form-input"
                  value={rationcard}
                  onChange={(e) => setRationCard(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="Yes">{t("Yes")}</option>
                  <option value="No">{t("No")}</option>
                </select>
              </div>

              {/* Aadhar Card */}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="Aadharcard"
                >
                  {t("AadharCard")}
                </label>
                <select
                  id="Aadharcard"
                  className="w-full form-input"
                  value={aadharcard}
                  onChange={(e) => setAadharCard(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="Yes">{t("Yes")}</option>
                  <option value="No">{t("No")}</option>
                </select>
              </div>

              {/* Pan card */}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="PanCard"
                >
                  {t("PanCard")}
                </label>
                <select
                  id="PanCard"
                  className="w-full form-input"
                  value={pancard}
                  onChange={(e) => setPancard(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="Yes">{t("Yes")}</option>
                  <option value="No">{t("No")}</option>
                </select>
              </div>
            </div>
          </section>

          {/* section 2 */}
          <section>
            <div className="mt-2 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              {/* e-Sharam Card */}
              <div className="sm:w-[32%]">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="EsharamCard"
                >
                  {t("ESharamCard")}
                </label>
                <select
                  id="EsharamCard"
                  className="w-full form-input"
                  value={esharamcard}
                  onChange={(e) => setEsharamCard(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="Yes">{t("Yes")}</option>
                  <option value="No">{t("No")}</option>
                </select>
              </div>

              {/* Voter ID Card */}
              <div className="sm:w-[32.2%]">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="VoterID"
                >
                  {t("VoterIDCard")}
                </label>
                <select
                  id="VoterID"
                  className="w-full form-input"
                  value={voterID}
                  onChange={(e) => setVoterID(e.target.value)}
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

export default GovtID
