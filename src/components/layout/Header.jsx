import classes from "./styles/Header.module.css";
import logo from "../../assets/svgs/logo.svg";
import { Squeeze as Hamburger } from "hamburger-react";
import { useState } from "react";

function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} alt="" />
      <Hamburger
        toggled={isHamburgerOpen}
        onToggle={toggled => {
          if (toggled) {
            setIsHamburgerOpen(true);
          } else {
            setIsHamburgerOpen(false);
          }
        }}
        rounded
        label="Show menu"
      />
    </header>
  );
}

export default Header;
