import classes from "./styles/Main.module.css";
import Splash from "./Splash";
import About from "./About";

function Main() {
  return (
    <div className={classes.container}>
      <Splash />
      <About />
    </div>
  );
}

export default Main;
