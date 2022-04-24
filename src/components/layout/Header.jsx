import classes from "./styles/Header.module.css";
import logo from "../../assets/svgs/logo.svg";

function Header() {
  return (
    <header className={classes.header}>
      <a href="#top">
        <img className={classes.logo} src={logo} alt="" />
      </a>
      <div className={classes.links}>
        <p className={classes.cv}>
          <a href="../../assets/cv/gianluca_larosa_privcvita.pdf" download>
            download CV
          </a>
        </p>
        <p>
          <a href="#links">Contattami</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
