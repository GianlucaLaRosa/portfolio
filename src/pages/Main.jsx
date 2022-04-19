import classes from "./styles/Main.module.css";
import Splash from "./Splash";
import About from "./About";
import Skills from "./Skills";

function Main() {
  return (
    <div className={classes.container}>
      <Splash />
      <About />
      <Skills />
    </div>
  );
}

export default Main;
