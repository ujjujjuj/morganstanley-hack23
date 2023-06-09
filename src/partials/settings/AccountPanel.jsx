import React, { useState, useEffect } from "react"
import axios from "axios"
import useUser from "../../../hooks/useUser"
import { toast } from "react-toastify" // import the toast function

function AccountPanel() {
  const [kids, setKids] = useState(0)
  const [dependents, setDependents] = useState(0)
  const [name, setName] = useState("")
  const [age, setAge] = useState("") 
  const [gender, setGender] = useState("") 
  const [phoneNumber, setPhoneNumber] = useState("") 
  const [primaryLanguage, setPrimaryLanguage] = useState("") 
  const [zip, setZip] = useState("") 
  const [city, setCity] = useState("")
  const [state, setState] = useState("") 
  const [address1, setAddress] = useState("") 
  const [maritalStatus, setMaritalStatus] = useState("") 
  const [familyIncome, setFamilyIncome] = useState("")
  const [community, setCommunityStatus] = useState("") 
  const { user } = useUser()
  const id = user._id 

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_ADDRESS}/user/user/${id}`
        )

        setName(response.data.basicDetails.name)

        setAge(response.data.basicDetails.age)
        setGender(response.data.basicDetails.gender)
        setCommunityStatus(response.data.basicDetails.Community)
        setPhoneNumber(response.data.basicDetails.PhoneNumber)
        setAddress(response.data.basicDetails.address.address1)
        setCity(response.data.basicDetails.address.city)
        setState(response.data.basicDetails.address.state)
        setZip(response.data.basicDetails.address.zip)
        setPrimaryLanguage(response.data.basicDetails.primaryLanguage)
        setKids(response.data.basicDetails.familyDetails.numOfChild)
        setDependents(response.data.basicDetails.familyDetails.dependents)
        setMaritalStatus(response.data.basicDetails.familyDetails.maritalStatus)

        setFamilyIncome(response.data.basicDetails.familyDetails.income)
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
          basicDetails: {
            name: name,
            age: age,
            PhoneNumber: phoneNumber,
            address: {
              address1: address1,
              city: city,
              state: state,
              zip: zip,
            },
            Community: community,
            familyDetails: {
              numOfChild: kids,
              maritalStatus: maritalStatus,
              income: familyIncome,
              dependents: dependents,
            },
            primaryLanguage: primaryLanguage,
            gender: gender,
          },
        }
      )
      console.log(response.data)
      // toast on successful update
      toast.success("Profile updated successfully.")
    } catch (error) {
      console.error("Failed to update profile.", error)
      // toast on failed update
      toast.error("Failed to update profile.")
    }
  }
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="grow">
        <div className="p-6 space-y-6">
          <h2 className="mb-5 text-2xl font-bold text-slate-800">My Account</h2>

          <section>
            <div className="mt-2 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="name"
                >
                  Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  className="w-full form-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* age */}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium sm:flex"
                  htmlFor="age"
                >
                  Age <span className="text-rose-500">*</span>
                </label>
                <select
                  id="age"
                  className="w-full form-select"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                >
                  {Array.from({ length: 110 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>

              {/* gender */}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="gender"
                >
                  Gender <span className="text-rose-500">*</span>
                </label>
                <select
                  id="gender"
                  className="w-full form-select"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </section>

          {/* section 2  - Communication */}

          <section>
            <h2 className="mb-2 text-xl font-bold leading-snug text-slate-800">
              Communication
            </h2>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              {/* Community */}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="Community"
                >
                  Community
                </label>
                <select
                  id="Community"
                  className="w-full form-select"
                  value={community}
                  onChange={(e) => setCommunityStatus(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option value="">Select</option>
                  <option value="Maratha">Maratha</option>
                  <option value="Brahmin">Brahmin</option>
                  <option value="Kunbi">Kunbi</option>
                  <option value="Dhangar">Dhangar</option>
                  <option value="Chambhar">Chambhar</option>
                  <option value="Mahadev Koli">Mahadev Koli</option>
                  <option value="Mali">Mali</option>
                  <option value="Agri">Agri</option>
                  <option value="Bhandari">Bhandari</option>
                  <option value="Vanjari">Vanjari</option>
                  <option value="Teli">Teli</option>
                  <option value="Leva Patil">Leva Patil</option>
                  <option value="Matang">Matang</option>
                  <option value="Nhavi">Nhavi</option>
                  <option value="Lingayat">Lingayat</option>
                </select>
              </div>

              {/* phone no,*/}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="PhoneNumber"
                >
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  id="PhoneNumber"
                  className="w-full form-input"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              {/* primary langaugae*/}

              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="PrimaryLanguage"
                >
                  Primary Language
                </label>
                <select
                  id="PrimaryLanguage"
                  className="w-full form-select"
                  value={primaryLanguage}
                  onChange={(e) => setPrimaryLanguage(e.target.value)}
                  required
                >
                  <option value="">Select Language</option>
                  <option value="hindi">Hindi</option>
                  <option value="marathi">Marathi</option>
                  <option value="english">English</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </section>

          {/* Address */}

          <section>
            <h2 className="mb-2 text-xl font-bold leading-snug text-slate-800">
              Address
            </h2>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              <div className="sm:w-full">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="Address"
                >
                  Address
                </label>
                <textarea
                  id="Address"
                  className="w-full form-textarea"
                  rows="4"
                  value={address1}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>
            </div>
          </section>

          <section>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              {/* Zip */}
              <div className="sm:w-1/3">
                <label className="block mb-1 text-sm font-medium" htmlFor="Zip">
                  Zip
                </label>
                <input
                  id="Zip"
                  className="w-full form-input"
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>

              {/* City */}
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="City"
                >
                  City
                </label>
                <input
                  id="City"
                  className="w-full form-input"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="State"
                >
                  State
                </label>
                <select
                  id="State"
                  className="w-full form-select"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Dadra and Nagar Haveli">
                    Dadra and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                </select>
              </div>
            </div>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-bold leading-snug text-slate-800">
              Family & Occupation Details
            </h2>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="maritalStatus"
                >
                  Marital Status
                </label>
                <select
                  id="maritalStatus"
                  className="w-full form-select"
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                >
                  <option value="">Select Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="dependents"
                >
                  Number of Dependents
                </label>
                <input
                  id="dependents"
                  className="w-full form-input"
                  type="number"
                  min="0"
                  value={dependents}
                  onChange={(e) => setDependents(e.target.value)}
                  required
                />
              </div>
              <div className="sm:w-1/3">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="kids"
                >
                  Number of Children
                </label>
                <input
                  id="kids"
                  className="w-full form-input"
                  type="number"
                  min="0"
                  value={kids}
                  onChange={(e) => setKids(e.target.value)}
                />
              </div>
            </div>
          </section>

          <section>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              <div className="sm:w-[32%]">
                <label
                  className="block mb-1 text-sm font-medium"
                  htmlFor="income"
                >
                  Family Income
                </label>
                <input
                  id="income"
                  className="w-full form-input"
                  type="number"
                  min="0"
                  value={familyIncome}
                  onChange={(e) => setFamilyIncome(e.target.value)}
                />
              </div>
            </div>
          </section>
        </div>
        <footer>
          <div className="flex flex-col px-6 py-5 border-t border-slate-200">
            <div className="flex self-end">
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="ml-3 text-white bg-indigo-500 btn hover:bg-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </footer>
      </div>
    </form>
  )
}

export default AccountPanel
