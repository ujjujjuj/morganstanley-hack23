import React, { useState, useEffect } from "react"
import axios from "axios" // import axios for making HTTP requests

function Socioeconomic(props) {
  const [cleanWaterAccess, setCleanWaterAccess] = useState("") // state variable for currentEmployment
  const [electricityAccess, setElectricityAccess] = useState("") // state variable for previousEmployment
  const [housingType, setHousingType] = useState("") // state variable for jobTraining
  const [transportationAccess, setTransportationAccess] = useState("") // state variable for workNature

  // const id = "d667476a-6f64-47c4-8eb7-4d4504927b60"; // Constant user ID for now
  const id = props.id
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
            Socioeconomic Status
          </h2>

          {/* section 1*/}

          <section>
            <div className="sm:flex sm:items-center  space-y-4 sm:space-y-0 sm:space-x-4 ">
              {/* cleanWaterAccess,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="CleanWaterAccess"
                >
                  Do you have access to clean water?
                </label>
                <select
                  id="CleanWaterAccess"
                  className="form-select w-full"
                  value={cleanWaterAccess}
                  onChange={(e) => setCleanWaterAccess(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* electricityAccess,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="ElectricityAccess"
                >
                  Do you have access to electricity?
                </label>
                <select
                  id="ElectricityAccess"
                  className="form-select w-full"
                  value={electricityAccess}
                  onChange={(e) => setElectricityAccess(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* housingType,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="HousingType"
                >
                  What type of House do you live in?
                </label>
                <select
                  id="HousingType"
                  className="form-select w-full"
                  value={housingType}
                  onChange={(e) => setHousingType(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="kutcha">Kutcha</option>
                  <option value="semipucca">Semi-Pucca</option>
                  <option value="pucca">Pucca</option>
                </select>
              </div>
            </div>
          </section>

          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0  sm:space-x-4 ">
              {/* transportationAccess,*/}
              <div className="sm:w-[32%]">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="TransportationAccess"
                >
                  What type of transportation do you have access to?
                </label>
                <select
                  id="TransportationAccess"
                  className="form-select w-full"
                  value={transportationAccess}
                  onChange={(e) => setTransportationAccess(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                  <option value="none">None</option>
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

export default Socioeconomic
