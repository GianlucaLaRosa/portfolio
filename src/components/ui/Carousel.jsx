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
          <div>
            <IoConstructOutline />
            <p>Falegnameria</p>
          </div>
          <div>
            <SiArduino />
            <p>Elettronica</p>
          </div>
          <div>
            <FaTheaterMasks />
            <p>Teatro</p>
          </div>
          <div>
            <IoBeerOutline />
            <p>Birra artigianale</p>
          </div>
          <div>
            <FaGlobeAmericas />
            <p>Lingue</p>
          </div>
          <div>
            <GiCook />
            <p>Cucina</p>
          </div>
          <div>
            <FaChessPawn />
            <p>Giochi da tavolo</p>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Carousel;
