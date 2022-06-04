import "../styles/ChangeMd.css";
import routes from "../steps/stepsRouting.json";
import { Link } from "react-router-dom";
import config from "../config/config";

const ChangeMd = (props: { currentTheme: string }) => {
  const emojis = config.emojis
    
  return (
    <div className="changemd-component-container">
      {routes.map((route, i) => {
        let randomEmoji =
          emojis.split(" ")[
            Math.floor(Math.random() * emojis.split(" ").length)
          ];
        return (
          <Link to={route.path} key={i}>
            <p
              id={
                props.currentTheme === route.name ? "content-theme-active" : ""
              }
            >
              {(i + 1).toString() + " " + randomEmoji + " " + route.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ChangeMd;
