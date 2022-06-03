import "../styles/ChangeMd.css";
import routes from "../steps/stepsRouting.json";
import { Link } from "react-router-dom";

const ChangeMd = () => {
  return (
    <div className="changemd-component-container">
      {routes.map((route, i) => {
        return (
          <Link to={route.path}>
            <p key={i}>{route.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ChangeMd;
