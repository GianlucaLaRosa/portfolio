import classes from "./styles/About.module.css";
import Card from "../components/ui/Card";
import Carousel from "../components/ui/Carousel";
import transp from "../assets/images/transp.png";
import { Trans } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function About() {
  return (
    <div className={classes.container}>
      <p className={classes.open}>{"{"}</p>
      <p className={classes.close}>{"}"}</p>
      <div className={classes.about}>
        <Card aos="fade-right">
          <h1>About me</h1>
          <p>
            <Trans i18nKey="pages.about">
              Dai tempi del liceo nutro un forte interesse per il{" "}
              <strong>web developing</strong>.<br />
              Ho lavorato in ambienti molto diversi, seguendo sempre le mie
              passioni. <br />
              Un giorno mi &egrave; stato chiesto di scrivere del codice e da
              quel momento ho capito che dovevo tornare allo{" "}
              <strong>sviluppo web</strong>. <br />
              Senza mai dimenticare gli altri interessi, che aiutano a sfogare
              il mio estro.
            </Trans>
          </p>
        </Card>
      </div>
      <div className={classes.about_icons}>
        <img src={transp} alt="" />
        <Carousel />
      </div>
    </div>
  );
}

export default About;
