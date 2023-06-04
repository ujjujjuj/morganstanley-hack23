import { useTranslation } from "react-i18next";

const languages = [
  { name: "English", code: "en" },
  { name: "हिन्दी", code: "hi" },
  { name: "मराठी", code: "mr" },
];

const Footer = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex fixed right-0 bottom-0 left-0 gap-6 justify-end items-center px-6 h-16">
      {languages.map((language) => (
        <span
          key={language.code}
          className={`transition-transform cursor-pointer hover:scale-110 font-semibold ${
            i18n.language === language.code ? "text-blue-400" : "text-gray-400"
          }`}
          onClick={() => i18n.changeLanguage(language.code)}
        >
          {language.name}
        </span>
      ))}
    </div>
  );
};

export default Footer;
