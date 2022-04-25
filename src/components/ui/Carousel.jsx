import classes from "./styles/Carousel.module.css";
import { IconContext } from "react-icons";
import { IoConstructOutline, IoBeerOutline } from "react-icons/io5";
import { SiArduino } from "react-icons/si";
import { FaTheaterMasks, FaGlobeAmericas, FaChessPawn } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { useTranslation } from "react-i18next";

function Carousel() {
  const { t } = useTranslation();

  return (
    <>
      <div className={classes.carousel}>
        <IconContext.Provider value={{ className: classes.react_icons }}>
          <div className={classes.cook}>
            <GiCook />
            <p>{t("icons.cooking")}</p>
          </div>
          <div className={classes.chess}>
            <FaChessPawn />
            <p>{t("icons.games")}</p>
          </div>
          <div className={classes.construct}>
            <IoConstructOutline />
            <p>{t("icons.woodw")}</p>
          </div>
          <div className={classes.arduino}>
            <SiArduino />
            <p>{t("icons.electronics")}</p>
          </div>
          <div className={classes.theater}>
            <FaTheaterMasks />
            <p>{t("icons.theater")}</p>
          </div>
          <div className={classes.beer}>
            <IoBeerOutline />
            <p>{t("icons.beer")}</p>
          </div>
          <div className={classes.globe}>
            <FaGlobeAmericas />
            <p>{t("icons.languages")}</p>
          </div>
          <div className={classes.cooks}>
            <GiCook />
            <p>{t("icons.cooking")}</p>
          </div>
          <div className={classes.chesss}>
            <FaChessPawn />
            <p>{t("icons.games")}</p>
          </div>
          <div className={classes.constructs}>
            <IoConstructOutline />
            <p>{t("icons.woodw")}</p>
          </div>
          <div className={classes.arduinos}>
            <SiArduino />
            <p>{t("icons.electronics")}</p>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Carousel;
