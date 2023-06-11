import React, { useState, useEffect } from "react"
import axios from "axios" // import axios for making HTTP requests
import { toast } from "react-toastify"

function AccountPanel(props) {
  const [kids, setKids] = useState(0)
  const [dependents, setDependents] = useState(0)
  const [name, setName] = useState("") // state variable for name
  const [age, setAge] = useState("") // state variable for age
  const [gender, setGender] = useState("") // state variable for gender
  const [phoneNumber, setPhoneNumber] = useState("") // state variable for phone number
  const [primaryLanguage, setPrimaryLanguage] = useState("") // state variable for primary language
  const [zip, setZip] = useState("") // state variable for zip code
  const [city, setCity] = useState("") // state variable for city
  const [state, setState] = useState("") // state variable for state
  const [address1, setAddress] = useState("") // state variable for address
  const [maritalStatus, setMaritalStatus] = useState("") // state variable for marital status
  const [familyIncome, setFamilyIncome] = useState("") // state variable for family income
  const [community, setCommunityStatus] = useState("") // state variable for marital status
  // const id = "d667476a-6f64-47c4-8eb7-4d4504927b60"; // Constant user ID for now
  const id = props.id
  const [communityList, setCommunityList] = useState({})

  const handleCommunityChange = (e) => {
    setCommunityStatus(e.target.value)
  }

  useEffect(() => {
    console.log(id)
    const fetchCommunity = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_ADDRESS}/user/group/community`
        )
        if (response.ok) {
          const data = await response.json()
          // console.log(data); // Process the response data
          setCommunityList(data.result)
          console.log(data.result)
        } else {
          throw new Error("Request failed with status: " + response.status)
        }
      } catch (error) {
        console.error("Error:", error.message)
      }
    }
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_ADDRESS}/user/user/${id}`
        )
        setName(response.data.basicDetails.name)

        setAge(response.data.basicDetails.age)
        setGender(response.data.basicDetails.gender)
        console.log(response.data.basicDetails.gender)
        setCommunityStatus(response.data.basicDetails.Community)
        setPhoneNumber(response.data.basicDetails.PhoneNumber)
        console.log(response.data.basicDetails.PhoneNumber)
        setAddress(response.data.basicDetails.address.address1)
        console.log(response.data.basicDetails.address.address1)
        setCity(response.data.basicDetails.address.city)
        console.log(response.data.basicDetails.address.city)
        setState(response.data.basicDetails.address.state)
        console.log(response.data.basicDetails.address.state)
        setZip(response.data.basicDetails.address.zip)
        console.log(response.data.basicDetails.address.zip)
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
    fetchCommunity()
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
          <h2 className="text-2xl text-slate-800 font-bold mb-5">
            Basic Details
          </h2>

          {/* section 1 - My Profile           */}
          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  className="form-input w-full"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {/* your other fields go here */}
              </div>

              {/* age */}
              <div className="sm:w-1/3">
                <label
                  className="sm:flex block text-sm font-medium mb-1"
                  htmlFor="age"
                >
                  Age <span className="text-rose-500">*</span>
                </label>
                <select
                  id="age"
                  className="form-select w-full"
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
                  className="block text-sm font-medium mb-1"
                  htmlFor="gender"
                >
                  Gender <span className="text-rose-500">*</span>
                </label>
                <select
                  id="gender"
                  className="form-select w-full"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </section>

          {/* section 2  - Communication */}

          <section>
            <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
              Communication
            </h2>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
              {/* Community */}
              {/* Old community */}
              {/* <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="Community"
                >
                  Community <span className="text-rose-500">*</span>
                </label>
                <input
                  id="Community"
                  className="form-input w-full"
                  type="text"
                  value={community}
                  onChange={(e) => setCommunityStatus(e.target.value)}
                  required
                /> */}
              {/* your other fields go here */}
              {/* </div> */}

              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="community"
                >
                  Community <span className="text-rose-500">*</span>
                </label>
                <select
                  id="community"
                  className="form-select w-full"
                  value={community}
                  onChange={handleCommunityChange}
                  required
                >
                  <option value="">Select a community</option>
                  {Object.entries(communityList).map(([value, label]) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
                {/* Your other fields go here */}
              </div>

              {/* phone no,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="PhoneNumber"
                >
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  id="PhoneNumber"
                  className="form-input w-full"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              {/* primary langaugae*/}

              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="PrimaryLanguage"
                >
                  Primary Language
                </label>
                <select
                  id="PrimaryLanguage"
                  className="form-select w-full"
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
            <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
              Address
            </h2>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="sm:w-full">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="Address"
                >
                  Address
                </label>
                <textarea
                  id="Address"
                  className="form-textarea w-full"
                  rows="4"
                  value={address1}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>
            </div>
          </section>

          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
              {/* Zip */}
              <div className="sm:w-1/3">
                <label className="block text-sm font-medium mb-1" htmlFor="Zip">
                  Zip
                </label>
                <input
                  id="Zip"
                  className="form-input w-full"
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>

              {/* City */}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="City"
                >
                  City
                </label>
                <input
                  id="City"
                  className="form-input w-full"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              {/* State */}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="State"
                >
                  State
                </label>
                <select
                  id="State"
                  className="form-select w-full"
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

          {/* Marital Status */}
          <section>
            <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
              Family & Occupation Details
            </h2>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="maritalStatus"
                >
                  Marital Status
                </label>
                <select
                  id="maritalStatus"
                  className="form-select w-full"
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                >
                  <option value="">Select Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
              {/* Number of Dependents */}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="dependents"
                >
                  Number of Dependents
                </label>
                <input
                  id="dependents"
                  className="form-input w-full"
                  type="number"
                  min="0"
                  value={dependents}
                  onChange={(e) => setDependents(e.target.value)}
                  required
                />
              </div>

              {/* Family Details */}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="kids"
                >
                  Number of Children
                </label>
                <input
                  id="kids"
                  className="form-input w-full"
                  type="number"
                  min="0"
                  value={kids}
                  onChange={(e) => setKids(e.target.value)}
                />
              </div>
            </div>
          </section>

          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
              {/* Family Income */}
              <div className="sm:w-[32%]">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="income"
                >
                  Family Income
                </label>
                <input
                  id="income"
                  className="form-input w-full"
                  type="number"
                  min="0"
                  value={familyIncome}
                  onChange={(e) => setFamilyIncome(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Email */}
          {/* 
          <section>
            <h2 className="text-xl leading-snug text-slate-800 font-bold mb-1 ">
              Email
            </h2>
            <div className="text-sm">
              You can Change your email address here.
            </div>
            <div className="flex flex-wrap mt-5">
              <div className="mr-2">
                <label className="sr-only  " htmlFor="email">
                  Business email
                </label>
                <input
                  id="email"
                  className="form-input "
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                className="btn border-slate-200 hover:border-slate-300 shadow-sm text-indigo-500"
                onClick={handleEmailChange}
              >
                Change
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-xl leading-snug text-slate-800 font-bold mb-1 ">
              Password
            </h2>
            <div className="text-sm">You can Change your password here.</div>
            <div className="flex flex-wrap mt-5">
              <div className="mr-2">
                <label className="sr-only  " htmlFor="password">
                  New Password
                </label>
                <input
                  id="password"
                  className="form-input "
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="btn border-slate-200 hover:border-slate-300 shadow-sm text-indigo-500"
                onClick={handlePasswordChange}
              >
                Change
              </button>
            </div>
          </section> */}
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

export default AccountPanel
