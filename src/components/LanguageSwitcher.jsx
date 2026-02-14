import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
const { i18n } = useTranslation();

const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
};

return (
    <div className="flex gap-2">
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("fr")}>FR</button>
        <button onClick={() => changeLanguage("ar")}>AR</button>
    </div>
);
};

export default LanguageSwitcher;
