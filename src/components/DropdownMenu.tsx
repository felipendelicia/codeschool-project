import "../styles/DropdownMenu.css";
import contentsRouting from "../data/contentsRouting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IDropdownMenu } from "../types/PropTypes";
import { Link } from "react-router-dom";

const DropdownMenu = (props: IDropdownMenu) => {
  const showedClass = props.showDropMenu ? "showed" : "";

  return (
    <div className={"dropdownmenu-component-container " + showedClass}>
      <div className="close-dropdownmenu">
        <FontAwesomeIcon icon={faXmark} onClick={props.handleClick} />
      </div>
      <div className="page-categories">
        {contentsRouting.map((content, i) => {
          return (
            <Link to={content.path}>
              <p key={i}>
                {" "}
                {content.icon} {content.title}{" "}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownMenu;
