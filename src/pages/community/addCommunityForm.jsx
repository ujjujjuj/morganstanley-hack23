import { React, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddCommunityForm() {
  const [Community, setCommunity] = useState("")
  // duration details

  const navigate = useNavigate()
  const postData = async ({ Community }) => {
    try {
      const body = {
        Community: Community,
      }
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_ADDRESS}/user/addCommunity`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      )

      if (!response.ok) {
        console.log(response.message)
      }

      const responseData = await response.json()
      console.log(responseData)
    } catch (error) {
      console.log(response.message)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await postData({
      Community,
    })
    // just navigate !!
    navigate("/community")
  }
  function handleCancel() {
    navigate("/community")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 mx-12 md:mx-24 lg:mx-40">
        <div className="my-2 border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add New Community
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Add the details Carefully !
          </p>

          {/* name  */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Community
              </label>
              <div className="mt-2">
                <input
                  onChange={(event) => {
                    setCommunity(event.target.value)
                  }}
                  type="text"
                  name="first-name"
                  value={Community}
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
