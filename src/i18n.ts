import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nBackend from "i18next-http-backend";


i18n
.use(i18nBackend) // Charge les fichiers via HTTP
.use(initReactI18next)
.init({
    backend: {
    loadPath: `${import.meta.env.BASE_URL}/locales/{{lng}}/{{ns}}.json`, // Chemin dynamique
        },
    lng: 'fr',
    fallbackLng: 'fr',
    ns: ['navbar', 'core_components', 'timeline', "projects", "about_me"],
    defaultNS: 'common',
    interpolation: {
    escapeValue: false,
    },
});

export default i18n;

