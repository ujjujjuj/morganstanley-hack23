import { React, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function UserForm() {
  const [name, setName] = useState("")
  const [pwd, setPwd] = useState("")
  const [gender, setGender] = useState("")
  const [PhoneNumber, setPhoneNumber] = useState(0)
  const [Community, setCommunityStatus] = useState("") 
  const [communityList, setCommunityList] = useState({})

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_ADDRESS}/user/group/community`
        )
        if (response.ok) {
          const data = await response.json()
          setCommunityList(data.result)
          console.log(data.result)
        } else {
          throw new Error("Request failed with status: " + response.status)
        }
      } catch (error) {
        console.error("Error:", error.message)
      }
    }
    fetchCommunity()
  }, [])
  const navigate = useNavigate()
  const postData = async ({ name, pwd, PhoneNumber, gender, Community }) => {
    try {
      const body = {
        pwd: pwd,
        basicDetails: {
          PhoneNumber: PhoneNumber,
          name: name,
          gender: gender,
          Community: Community,
        },
      }
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_ADDRESS}/user/register/byAdmin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      )

      if (!response.ok) {
        throw new Error("Request failed")
      }

      const responseData = await response.json()
      console.log(responseData)
    } catch (error) {
      console.error(error)
    }
  }

  const handleCommunityChange = (e) => {
    setCommunityStatus(e.target.value)
  }
  async function handleSubmit(e) {
    e.preventDefault()
    await postData({
      name,
      pwd,
      PhoneNumber,
      gender,
      Community,
    })
    navigate("/users/allUsers")
  }
  function handleCancel() {
    navigate("/users/allUsers")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 mx-12 md:mx-24 lg:mx-40">
        <div className="my-2 border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add User Details
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Add the details Carefully !
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  onChange={(event) => {
                    setName(event.target.value)
                  }}
                  type="text"
                  name="first-name"
                  value={name}
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
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
            <div className="sm:col-span-3">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="community"
              >
                Community <span className="text-rose-500">*</span>
              </label>
              <select
                id="community"
                className="form-select w-full"
                value={Community}
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
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  onChange={(event) => {
                    setPwd(event.target.value)
                  }}
                  type="password"
                  name="first-name"
                  value={pwd}
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  onChange={(event) => {
                    setPhoneNumber(event.target.value)
                  }}
                  type="number"
                  name="first-name"
                  value={PhoneNumber}
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={handleCancel}
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  )
}
