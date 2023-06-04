import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // sign in
      login: "Log In",
      email: "Email",
      password: "Password",
      forgotPassword: "Forgot Password?",
      dontHaveAnAccount: "Dont have an account?",
      register: "Register",
      // reset password
      resetPassword: "Reset Your Password",
      sendResetLink: "Send Reset Link",
      // sign up
      createAccount: "Create Your Account",
    },
  },
  hi: {
    translation: {
      login: "लॉग इन",
      email: "ईमेल",
      password: "पासवर्ड",
      forgotPassword: "पासवर्ड भूल गए?",
      dontHaveAnAccount: "खाता नहीं है?",
      register: "रजिस्टर",
      resetPassword: "पासवर्ड रीसेट करें",
      sendResetLink: "रीसेट लिंक भेजें",
      createAccount: "अपना खाता बनाएं",
    },
  },
  mr: {
    translation: {
      login: "लॉगिन",
      email: "ईमेल",
      password: "पासवर्ड",
      forgotPassword: "पासवर्ड विसरलात?",
      dontHaveAnAccount: "खाते नाही?",
      register: "रजिस्टर",
      resetPassword: "संकेतशब्द पुनर्प्रस्थापित करा",
      sendResetLink: "रीसेट लिंक पाठवा",
      createAccount: "तुमचे खाते तयार करा",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  supportedLngs: ["en", "hi", "mr"],
  debug: process.env.NODE_ENV === "development",
});

export default i18n;
