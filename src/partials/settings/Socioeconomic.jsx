import React, { useState, useEffect } from "react"
import axios from "axios"
import { useTranslation } from "react-i18next"
import useUser from "../../../hooks/useUser"
import { toast } from "react-toastify"

function Socioeconomic() {
  const [cleanWaterAccess, setCleanWaterAccess] = useState("")
  const [electricityAccess, setElectricityAccess] = useState("")
  const [housingType, setHousingType] = useState("")
  const [transportationAccess, setTransportationAccess] = useState("") 
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

        setCleanWaterAccess(response.data.SocioeconomicStatus.cleanWaterAccess)
        setElectricityAccess(
          response.data.SocioeconomicStatus.electricityAccess
        )
        setHousingType(response.data.SocioeconomicStatus.housingType)
        setTransportationAccess(
          response.data.SocioeconomicStatus.transportationAccess
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
          SocioeconomicStatus: {
            cleanWaterAccess: cleanWaterAccess,
            electricityAccess: electricityAccess,
            housingType: housingType,
            transportationAccess: transportationAccess,
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
        <div className="p-6 space-y-6">
          <h2 className="mb-5 text-2xl font-bold text-slate-800">
            {t("SocioeconomicStatus")}
          </h2>
          <section>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              {/* cleanWaterAccess,*/}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="CleanWaterAccess"
                >
                  {t("CleanWater")}
                </label>
                <select
                  id="CleanWaterAccess"
                  className="w-full form-select"
                  value={cleanWaterAccess}
                  onChange={(e) => setCleanWaterAccess(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="yes">{t("Yes")}</option>
                  <option value="no">{t("No")}</option>
                </select>
              </div>

              {/* electricityAccess,*/}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="ElectricityAccess"
                >
                  {t("ElectricityAccess")}
                </label>
                <select
                  id="ElectricityAccess"
                  className="w-full form-select"
                  value={electricityAccess}
                  onChange={(e) => setElectricityAccess(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="yes">{t("Yes")}</option>
                  <option value="no">{t("No")}</option>
                </select>
              </div>

              {/* housingType,*/}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="HousingType"
                >
                  {t("HouseType")}
                </label>
                <select
                  id="HousingType"
                  className="w-full form-select"
                  value={housingType}
                  onChange={(e) => setHousingType(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="kutcha">{t("Kutcha")}</option>
                  <option value="semipucca">{t("SemiPucca")}</option>
                  <option value="pucca">{t("Pucca")}</option>
                </select>
              </div>
            </div>
          </section>

          <section>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              {/* transportationAccess,*/}
              <div className="sm:w-[32%]">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="TransportationAccess"
                >
                  {t("TransportationAccess")}
                </label>
                <select
                  id="TransportationAccess"
                  className="w-full form-select"
                  value={transportationAccess}
                  onChange={(e) => setTransportationAccess(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="public">{t("Public")}</option>
                  <option value="private">{t("Private")}</option>
                  <option value="none">{t("None")}</option>
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

export default Socioeconomic
