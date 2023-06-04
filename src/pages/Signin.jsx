import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import TinyMiraclesLogo from "../images/tinymiracles.webp";
import AuthImage from "../images/auth-image.webp";

const Signin = () => {
  const { t } = useTranslation();

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
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="email"
                    >
                      {t("email")}
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
                      htmlFor="password"
                    >
                      {t("password")}
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
                    <Link
                      className="text-sm underline hover:no-underline"
                      to="/reset-password"
                    >
                      {t("forgotPassword")}
                    </Link>
                  </div>
                  <Link
                    className="ml-3 text-white bg-indigo-500 btn hover:bg-indigo-600"
                    to="/"
                  >
                    {t("login")}
                  </Link>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200">
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
};

export default Signin;
