import classes from "./styles/Header.module.css";
import logo from "../../assets/svgs/logo.svg";
import { useTranslation } from "react-i18next";
import { AiOutlineGlobal } from "react-icons/ai";
import { It, Gb, Si } from "react-flags-select";

function Header() {
  const { t, i18n } = useTranslation();

  function languageHandler(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <header className={classes.header}>
      <a href="#top">
        <img className={classes.logo} src={logo} alt="logo" />
      </a>
      <nav className={classes.links}>
        <ul className={classes.ulist}>
          <li>
            <a href="../../assets/cv/gianluca_larosa_privcvita.pdf" download>
              {t("header.download")}
            </a>
          </li>
          <li>
            <a href="#links">{t("header.contacts")}</a>
          </li>
          <li className={classes.globe}>
            <div>
              <AiOutlineGlobal />
            </div>
            <div alt="Italiano" onClick={() => languageHandler("it")}>
              <It alt="Italiano" />
            </div>
            <div onClick={() => languageHandler("en")}>
              <Gb alt="English" />
            </div>
            <div onClick={() => languageHandler("si")}>
              <Si alt="Slovensko" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
