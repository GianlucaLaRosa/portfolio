import classes from "./styles/Card.module.css";

function Card(props) {
  return (
    <div className={classes.card} data-aos={props.aos}>
      {props.children}
    </div>
  );
}

export default Card;
