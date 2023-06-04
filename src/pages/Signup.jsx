import React from "react";
import { Link } from "react-router-dom";

import AuthImage from "../images/auth-image.webp";
import TinyMiraclesLogo from "../images/tinymiracles.webp";
import { useTranslation } from "react-i18next";

function Signup() {
  const { t } = useTranslation();

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
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="email"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      className="w-full form-input"
                      type="email"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="name"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      className="w-full form-input"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="role"
                    >
                      Your Role <span className="text-rose-500">*</span>
                    </label>
                    <select id="role" className="w-full form-select">
                      <option>Designer</option>
                      <option>Developer</option>
                      <option>Accountant</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      className="w-full form-input"
                      type="password"
                      autoComplete="on"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div className="mr-1">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2 text-sm">
                        Email me about product news.
                      </span>
                    </label>
                  </div>
                  <Link
                    className="ml-3 text-white whitespace-nowrap bg-indigo-500 btn hover:bg-indigo-600"
                    to="/"
                  >
                    Sign Up
                  </Link>
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
  );
}

export default Signup;
