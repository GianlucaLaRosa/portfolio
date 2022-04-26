import classes from "./styles/Skills.module.css";
import Card from "../components/ui/Card";
import { IconContext } from "react-icons";
import { DiGit, DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { FaBootstrap, FaReact, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Skills() {
  return (
    <div className={classes.container}>
      <Card aos="zoom-in">
        <IconContext.Provider value={{ className: classes.react_icons }}>
          <h1 className={classes.header}>Skills</h1>{" "}
          <div className={classes.row}>
            <span>
              <DiGit className={classes.git} />
              <p>Git</p>
            </span>
            <span>
              <DiHtml5 className={classes.html} />
              <p>HTML</p>
            </span>
            <span>
              <DiCss3 className={classes.css} />
              <p>CSS</p>
            </span>
            <span>
              <FaBootstrap className={classes.bs} />
              <p>Bootstrap</p>
            </span>
          </div>
          <div className={classes.row_sec}>
            <span>
              <DiJavascript1 className={classes.js} />
              <p>Javascript</p>
            </span>
            <span>
              <FaReact className={classes.react} />
              <p>ReactJS</p>
            </span>
            <span>
              <FaFigma className={classes.figma} />
              <p>Figma</p>
            </span>
          </div>{" "}
          <br />
          <h3 className={classes.header}>Learning...</h3>
          <div className={classes.row_third}>
            <span>
              <SiTypescript className={classes.ts} />
              <p>TypeScript</p>
            </span>
            <span>
              <SiNextdotjs className={classes.next} />
              <p>NextJS</p>
            </span>
          </div>
        </IconContext.Provider>
      </Card>
    </div>
  );
}

export default Skills;
