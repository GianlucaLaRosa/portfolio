import classes from "./styles/Footer.module.css";
import { FaMapPin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { ImFilePdf } from "react-icons/im";
import { IoNewspaperOutline } from "react-icons/io5";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className={classes.container}>
      <div>
        <a
          href="https://it.wikipedia.org/wiki/Trieste"
          target="_blank"
          rel="noreferrer">
          <span>
            <FaMapPin className={classes.logo} /> Trieste
          </span>
        </a>
      </div>
      <div className={classes.social}>
        <a
          href="https://www.linkedin.com/in/larosa-gianluca/"
          target="_blank"
          rel="noreferrer">
          <span>
            <AiOutlineLinkedin className={classes.logo} />
            &nbsp; &nbsp; in/larosa-gianluca
          </span>
        </a>{" "}
        <a href="mailto:gianluca_larosa@hotmail.com">
          <span>
            <MdAlternateEmail className={classes.logo} />{" "}
            gianluca_larosa@hotmail.com
          </span>
        </a>
        <a
          href="https://github.com/GianlucaLaRosa"
          target="_blank"
          rel="noreferrer">
          <span>
            <FiGithub className={classes.logo} />
            &nbsp; GianlucaLaRosa
          </span>
        </a>
      </div>
      <div>
        <a href="../../assets/cv/gianluca_larosa_privcvita.pdf" download>
          <span>
            <IoNewspaperOutline className={classes.logo} /> &nbsp; Download
            CV&nbsp;
            <ImFilePdf className={classes.pdf} />
          </span>
        </a>
      </div>
      <div className={classes.copy}>
        <p>&copy; Gianluca La Rosa {year}</p>
      </div>
    </div>
  );
}

export default Footer;
