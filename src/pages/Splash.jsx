import classes from "./styles/Splash.module.css";
import Card from "../components/ui/Card";

function Splash() {
  return (
    <div className={classes.splash}>
      <div></div>
      <div>
        <Card>
          <h1>About me</h1>
          <p>
            Dai tempi del liceo nutro una passione per il web developing. La
            curiosità è il mio motore primo: amo approfondire ciò che non
            conosco bene e studiare quello che ancora non so. Ritengo di avere
            buone capacità di problem solving. Le mie esperienze lavorative
            precedenti mi hanno permesso di sviluppare abilità di team working
            nonché di comunicazione.Sono in cerca di un'azienda creativa e con
            uno spirito giovane, dove si possa crescere come singoli e come
            team. Ciò che spero di trovare in voi è un ambiente sano in cui
            poter dare il mio apporto per creare prodotti innovativi, che
            possano migliorare la vita delle persone.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Splash;
