import classes from "./styles/Main.module.css";
import Splash from "./Splash";
import About from "./About";
import Skills from "./Skills";
import Footer from "../components/layout/Footer";

function Main() {
  console.log(
    `%cNeed a web site?`,
    `font-size: 40px; text-shadow: 0 0 5px purple, 0 0 10px red `
  );

  console.log(
    `%cContact me on my email: gianluca_larosa@hotmail.com
or check:
https://www.linkedin.com/in/larosa-gianluca/
https://github.com/GianlucaLaRosa`,
    `color:white;background-color:purple; font-size: 20px`
  );
  console.log(
    `%cHave a nice day! ^_^`,
    `color:purple;font-size: 15px;font-weight: bold`
  );
  return (
    <div className={classes.container}>
      <Splash />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default Main;
