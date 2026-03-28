import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRProject } from "@fortawesome/free-brands-svg-icons";
import "../static/css/navbar.css";

export default function Navbar() {
  return (
      <div className="navbar">
        <div className="logo">
          <FontAwesomeIcon icon={faRProject} />
        </div>
        <div className="navbarLists">
          <a href="#about">About</a>
          <a href="#skill">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="contact">Contact</a>
  
        </div>
      </div>
     
  );
}
