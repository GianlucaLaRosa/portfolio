import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const options = {
  // order and from where user language should be detected
  order: [
    "querystring",
    "localStorage",
    "navigator",
    "sessionStorage",
    "htmlTag",
    "path",
    "subdomain",
  ],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 1,
  cookieDomain: "none",

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    whitelist: ["it", "en", "si"],
    detection: options,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
