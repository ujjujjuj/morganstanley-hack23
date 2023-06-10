import React from "react"
import { Link, useNavigate } from "react-router-dom"

import AuthImage from "../images/auth-image.webp"
import TinyMiraclesLogo from "../images/tinymiracles.webp"
import { useTranslation } from "react-i18next"

const languages = [
  { name: "English", code: "en" },
  { name: "हिन्दी", code: "hi" },
  { name: "मराठी", code: "mr" },
]

function ResetPassword() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()

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
              <div
                className="w-8 h-8 bg-[#6366f1] rounded-md flex items-center justify-center text-white font-black text-lg cursor-pointer -translate-y-6"
                onClick={() => navigate(-1)}
              >
                &lt;
              </div>
              <h1 className="mb-6 text-3xl font-bold text-slate-800">
                {t("resetPassword")}&nbsp;✨
              </h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="number"
                    >
                      {t("number")}
                      <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="number"
                      className="w-full form-input"
                      type="number"
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button className="text-white whitespace-nowrap bg-indigo-500 btn hover:bg-indigo-600">
                    {t("sendResetLink")}
                  </button>
                </div>
              </form>
            </div>
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
      <div className="mt-auto ml-1rem text-white fixed lang">
        <div className="flex flex-row gap items-start">
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
    </main>
  )
}

export default ResetPassword
