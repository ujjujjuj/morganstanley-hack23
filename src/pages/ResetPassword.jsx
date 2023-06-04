import React from "react";
import { Link } from "react-router-dom";

import AuthImage from "../images/auth-image.webp";
import TinyMiraclesLogo from "../images/tinymiracles.webp";
import { useTranslation } from "react-i18next";

function ResetPassword() {
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
                {t('resetPassword')}&nbsp;✨
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
                      <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      className="w-full form-input"
                      type="email"
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button className="text-white whitespace-nowrap bg-indigo-500 btn hover:bg-indigo-600">
                    {t('sendResetLink')}
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
    </main>
  );
}

export default ResetPassword;
