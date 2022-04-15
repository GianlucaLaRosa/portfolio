import classes from "./styles/Carousel.module.css";
import { IconContext } from "react-icons";
import { IoConstructOutline, IoBeerOutline } from "react-icons/io5";
import { SiArduino } from "react-icons/si";
import { FaTheaterMasks, FaGlobeAmericas, FaChessPawn } from "react-icons/fa";
import { GiCook } from "react-icons/gi";

function Carousel() {
  return (
    <>
      <div className={classes.carousel}>
        <IconContext.Provider value={{ className: classes.react_icons }}>
          <div className={classes.cook}>
            <GiCook />
            <p>Cucina</p>
          </div>
          <div className={classes.chess}>
            <FaChessPawn />
            <p>Giochi da tavolo</p>
          </div>
          <div className={classes.construct}>
            <IoConstructOutline />
            <p>Falegnameria</p>
          </div>
          <div className={classes.arduino}>
            <SiArduino />
            <p>Elettronica</p>
          </div>
          <div className={classes.theater}>
            <FaTheaterMasks />
            <p>Teatro</p>
          </div>
          <div className={classes.beer}>
            <IoBeerOutline />
            <p>Birra artigianale</p>
          </div>
          <div className={classes.globe}>
            <FaGlobeAmericas />
            <p>Lingue</p>
          </div>
          <div className={classes.cooks}>
            <GiCook />
            <p>Cucina</p>
          </div>
          <div className={classes.chesss}>
            <FaChessPawn />
            <p>Giochi da tavolo</p>
          </div>
          <div className={classes.constructs}>
            <IoConstructOutline />
            <p>Falegnameria</p>
          </div>
          <div className={classes.arduinos}>
            <SiArduino />
            <p>Elettronica</p>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Carousel;
