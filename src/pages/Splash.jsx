import classes from "./styles/Splash.module.css";
import Card from "../components/ui/Card";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ disable: "phone", mirror: true });

function Splash() {
  return (
    <div className={classes.container} id="top">
      <div className={classes.void}></div>
      <div className={classes.splash}>
        <Card aos="fade-left">
          <h1>Artisan Front End Developer</h1>
          <p>
            &Egrave; qui che avviene la magia. <br />
            L'angolo dove soddisfo la mia passione, <br /> la scrivania dalla
            quale tutto ha inizio.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Splash;
