import classes from "./styles/Main.module.css";
import Splash from "./Splash";
import About from "./About";
import Skills from "./Skills";
import Footer from "../components/layout/Footer";

function Main() {
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
