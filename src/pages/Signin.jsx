import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router-dom"

import TinyMiraclesLogo from "../images/tinymiracles.webp"
import AuthImage from "../images/auth-image.webp"
import { toast } from "react-toastify"
import { DateLocalizer } from "react-big-calendar"
import useUser from "../../hooks/useUser"

const languages = [
  { name: "English", code: "en" },
  { name: "हिन्दी", code: "hi" },
  { name: "मराठी", code: "mr" },
]
const Signin = () => {
  const { t, i18n } = useTranslation()
  console.log("HI???")
  const { user, loginUser } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (user.isLoggedIn) {
      navigate("/")
    }
  }, [user])

  const formSubmit = (e) => {
    e.preventDefault()

    const { number, password } = Object.fromEntries(new FormData(e.target))

    if (!number || !password) {
      toast.error("Please provide all the details")
      return
    } else if (number.length !== 10) {
      toast.error("Please provide a valid phone number")
      return
    } else if (password.length < 6) {
      toast.error("Password length should be greater than 6")
      return
    }

    const toastId = toast.loading("Logging in")
    fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ PhoneNumber: number, pwd: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (!data._id) throw "Invalid"
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
        <div className="md:w-1/2">
          <div className="flex flex-col h-full min-h-screen after:flex-1">
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
                {t("login")} ✨
              </h1>
              {/* Form */}
              <form onSubmit={formSubmit}>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="number"
                    >
                      {t("number")}
                    </label>
                    <input
                      id="number"
                      className="w-full form-input"
                      type="number"
                      name="number"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="password"
                    >
                      {t("password")}
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
                  <div className="mr-1">
                    <Link
                      className="text-sm underline hover:no-underline"
                      to="/reset-password"
                    >
                      {t("forgotPassword")}
                    </Link>
                  </div>
                  <input
                    className="ml-3 text-white bg-indigo-500 btn hover:bg-indigo-600"
                    type="submit"
                    value={t("login")}
                  />
                </div>
              </form>
              {/* Footer */}
              <div className="mt-6 border-t border-slate-200">
                <div className="text-sm">
                  {t("dontHaveAnAccount")}&nbsp;
                  <Link
                    className="font-medium text-indigo-500 hover:text-indigo-600"
                    to="/signup"
                  >
                    {t("register")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute mt-auto text-white ml-1rem lang">
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

export default Signin
