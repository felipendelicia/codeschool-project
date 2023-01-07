import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

export default function Navbar() {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const handleClick = () => setShowDropdownMenu(!showDropdownMenu);

  return (
    <>
      <div className="navbar-component-container">
        <div className="navbar-brand-name">
          <Link to="/intro">
            <p>CodeSchool Project</p>
          </Link>
        </div>
        <div className="navbar-items">
          <Link to="/intro">
            <p className="navbar-item">
              <FontAwesomeIcon icon={faStar} /> Acerca del proyecto
            </p>
          </Link>
          <p className="navbar-item" onClick={handleClick}>
            <FontAwesomeIcon icon={faPaperclip} /> Aprende!
          </p>
        </div>
      </div>
      <DropdownMenu handleClick={handleClick} showDropMenu={showDropdownMenu}/>
    </>
  );
}
