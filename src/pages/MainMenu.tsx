import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { other_fundamentals, project_stack } from "../data/project-stack-intro";
import "../styles/Intro.css";

const TechCards = (props: {
  title: string;
  description: string;
  icon: ReactElement;
  path: string
}) => {
  return (
    <div className="tech-card">
      <Link to={props.path}>
        <h3>
          {props.icon} {props.title}
        </h3>
      </Link>
      <p>{props.description}</p>
    </div>
  );
};

export default function Intro() {
  return (
    <div>
      <Navbar />
      <div className="intro-content-container">
        <h1>CodeSchool Project </h1>
        <p>
          Mi objetivo es crear una guía de aprendizaje autodidacta para el
          desarrollo web. Mi meta es proporcionar una guía completa que cubra
          todos los aspectos necesarios para que una persona pueda desempeñarse
          eficientemente en el mundo del desarrollo web.
        </p>
        <p>
          Aunque esta guía es completa, recomendamos que investigues también por
          tu cuenta, que pruebes cosas y que busques más recursos y te nutras de
          diversas fuentes. A veces, cuando solo leemos o vemos un contenido,
          podemos creer que lo entendemos, pero es cuando lo ponemos en práctica
          cuando realmente aprendemos. Por lo tanto, es importante practicar y
          poner en práctica lo que aprendemos para asegurarnos de comprenderlo
          realmente.
        </p>
        <p>
          Actualmente, CodeSchool ofrece formación en una serie de tecnologías
          muy utilizadas en la actualidad que pueden ayudar a formar a un buen
          desarrollador full stack. Estas tecnologías incluyen:
        </p>
        <div className="tech-cards-fundamentals">
          {other_fundamentals.map((fundamental, i) => {
              return (
                <TechCards
                  key={i}
                  title={fundamental.title}
                  description={fundamental.description}
                  icon={fundamental.icon}
                  path={fundamental.path}
                />
              );
            })}
          </div>
        <div className="tech-stack-cards">
          <div className="tech-cards-langs">
            {project_stack.map((tech, i) => {
              return (
                <TechCards
                  key={i}
                  title={tech.title}
                  description={tech.description}
                  icon={tech.icon}
                  path={tech.path}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
