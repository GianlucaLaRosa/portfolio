import classes from "./styles/Splash.module.css";
import Card from "../components/ui/Card";

function Splash() {
  return (
    <div className={classes.splash}>
      <div></div>
      <div className={classes.container}>
        <Card>
          <h1>Front End Developer</h1>
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
