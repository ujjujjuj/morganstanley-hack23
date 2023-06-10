import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      // sign in
      login: "Log In",
      number: "Phone Number",
      password: "Password",
      forgotPassword: "Forgot Password?",
      dontHaveAnAccount: "Dont have an account?",
      register: "Register",
      // reset password
      resetPassword: "Reset Your Password",
      sendResetLink: "Send Reset Link",
      // sign up
      createAccount: "Create Your Account",

      // sidebar
      dashboard: "Dashboard",
      events: "Events",
      manageEvents: "Manage Events",
      eventsView: "Events View",
      users: "Users",
      community: "Community",
      manageCommunity: "Manage Community",
      allCommunities: "All Communities",
      inbox: "Inbox",
      calendar: "Calendar",
      supportResponses: "Support Responses",
      pages: "Pages",
    },
  },
  hi: {
    translation: {
      login: "लॉग इन",
      number: "फ़ोन नंबर",
      password: "पासवर्ड",
      forgotPassword: "पासवर्ड भूल गए?",
      dontHaveAnAccount: "खाता नहीं है?",
      register: "रजिस्टर",
      resetPassword: "पासवर्ड रीसेट करें",
      sendResetLink: "रीसेट लिंक भेजें",
      createAccount: "अपना खाता बनाएं",
      dashboard: "डैशबोर्ड",
      events: "आयोजन",
      manageEvents: "घटनाओं का प्रबंधन",
      eventsView: "घटना दृश्य",
      users: "उपयोगकर्ताओं",
      community: "समुदाय",
      manageCommunity: "समुदायों प्रबंधन",
      allCommunities: "सभी समुदाय",
      inbox: "इनबॉक्स",
      calendar: "पंचांग",
      supportResponses: "समर्थन प्रतिक्रियाएँ",
      pages: "पृष्ठों",
    },
  },
  mr: {
    translation: {
      login: "लॉगिन",
      number: "फोन नंबर",
      password: "पासवर्ड",
      forgotPassword: "पासवर्ड विसरलात?",
      dontHaveAnAccount: "खाते नाही?",
      register: "रजिस्टर",
      resetPassword: "संकेतशब्द पुनर्प्रस्थापित करा",
      sendResetLink: "रीसेट लिंक पाठवा",
      createAccount: "तुमचे खाते तयार करा",
      dashboard: "डॅशबोर्ड",
      events: "कार्यक्रम",
      manageEvents: "कार्यक्रम व्यवस्थापित",
      eventsView: "कार्यक्रम दृश्य",
      users: "वापरकर्ते",
      community: "समुदाय",
      manageCommunity: "समुदाय व्यवस्थापित",
      allCommunities: "सर्व समुदाय",
      inbox: "इनबॉक्स",
      calendar: "कॅलेंडर",
      supportResponses: "समर्थन प्रतिसाद",
      pages: "पृष्ठे",
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  supportedLngs: ["en", "hi", "mr"],
  debug: process.env.NODE_ENV === "development",
})

export default i18n
