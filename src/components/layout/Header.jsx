import classes from "./styles/Header.module.css";
import logo from "../../assets/svgs/logo.svg";

function Header() {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} alt="" />
    </header>
  );
}

export default Header;
