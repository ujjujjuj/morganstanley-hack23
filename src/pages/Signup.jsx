import React from "react"
import { Link, useNavigate } from "react-router-dom"

import AuthImage from "../images/auth-image.webp"
import TinyMiraclesLogo from "../images/tinymiracles.webp"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import useUser from "../../hooks/useUser"

const languages = [
  { name: "English", code: "en" },
  { name: "हिन्दी", code: "hi" },
  { name: "मराठी", code: "mr" },
]
function Signup() {
  const { t } = useTranslation()
  const { i18n } = useTranslation()
  const { user, loginUser } = useUser()
  const navigate = useNavigate()

  if (user.isLoggedIn) {
    navigate("/")
  }

  const formSubmit = (e) => {
    e.preventDefault()
    const { name, number, password, community, gender } = Object.fromEntries(
      new FormData(e.target)
    )

    if (!name || !number || !password) {
      toast.error("Please provide all the details")
      return
    } else if (name.length < 2) {
      toast.error("Please provide a valid name")
      return
    } else if (number.length !== 10) {
      toast.error("Please provide a valid phone number")
      return
    } else if (password.length < 6) {
      toast.error("Password length should be greater than 6")
      return
    }

    const toastId = toast.loading("Logging in")
    fetch("http://localhost:3000/user/register/byUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pwd: password,
        basicDetails: {
          PhoneNumber: number,
          name,
          gender,
          Community: community,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        toast.update(toastId, {
          render: "Logged In",
          type: toast.TYPE.SUCCESS,
          autoClose: 3000,
          isLoading: false,
        })
        loginUser(data)
      })
      .catch((e) => {
        toast.update(toastId, {
          render: "An unknown error occured",
          type: toast.TYPE.ERROR,
          autoClose: 3000,
          isLoading: false,
        })
        console.log(e)
      })
  }

  return (
    <main className="bg-white">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="flex flex-col h-full min-h-screen after:flex-1">
            {/* Header */}
            <div className="flex-1">
              <div className="flex justify-between items-center mt-4 w-32 ms-4">
                <img
                  className="object-cover object-center w-full h-full"
                  src={TinyMiraclesLogo}
                  alt="Logo"
                />
              </div>
            </div>

            <div className="px-8 py-8 mx-auto w-full max-w-lg">
              <h1 className="mb-6 text-3xl font-bold text-slate-800">
                {t("createAccount")} ✨
              </h1>
              {/* Form */}
              <form onSubmit={formSubmit}>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="name"
                    >
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      className="w-full form-input"
                      type="name"
                      name="name"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="phone"
                    >
                      Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="phone"
                      className="w-full form-input"
                      name="number"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="community"
                    >
                      Community <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="community"
                      className="w-full form-select"
                      name="community"
                    >
                      <option>Maratha</option> <option>Brahmin</option>{" "}
                      <option>Kunbi</option> <option>Dhangar</option>{" "}
                      <option>Chambhar</option> <option>Mahadev Koli</option>{" "}
                      <option>Mali</option> <option>Agri</option>{" "}
                      <option>Bhandari</option> <option>Vanjari</option>{" "}
                      <option>Teli</option> <option>Leva Patil</option>{" "}
                      <option>Matang</option> <option>Nhavi</option>{" "}
                      <option>Lingayat</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="gender"
                    >
                      Gender <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="gender"
                      className="w-full form-select"
                      name="gender"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="password"
                    >
                      Password <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="password"
                      className="w-full form-input"
                      type="password"
                      name="password"
                      autoComplete="on"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <input
                    type="submit"
                    className="ml-3 text-white whitespace-nowrap bg-indigo-500 btn hover:bg-indigo-600"
                    value="Sign Up"
                  />
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200">
                <div className="text-sm">
                  Have an account?{" "}
                  <Link
                    className="font-medium text-indigo-500 hover:text-indigo-600"
                    to="/signin"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed mt-auto text-white ml-1rem lang">
          <div className="flex flex-row items-start gap">
            {languages.map((language) => (
              <span
                key={language.code}
                className={`transition-transform cursor-pointer hover:scale-110 font-semibold ${
                  i18n.language === language.code
                    ? "text-blue-400"
                    : "text-gray-400"
                }`}
                onClick={() => i18n.changeLanguage(language.code)}
              >
                {language.name}
              </span>
            ))}
          </div>
        </div>
        {/* Image */}
        <div
          className="hidden absolute top-0 right-0 bottom-0 md:block md:w-1/2"
          aria-hidden="true"
        >
          <img
            className="object-cover object-center w-full h-full"
            src={AuthImage}
            width="760"
            height="1024"
            alt="Authentication"
          />
        </div>
      </div>
    </main>
  )
}

export default Signup
