import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../static/css/hero.css";

export default function Home() {
  return (
    <div className="heroContainer">
      <p className="available">AVAILABLE FOR INTERNSHIPS</p>
      <h1 className="building">
        Building the future with <span className="highlight">code</span>{" "} <br />
        and {" "}
        <span className="highlight">intelligence</span>
      </h1>
      <p>
        B.Tech pre-final year undergraduate student passionate about solving
        real- <br />
        world problems through Software Engineering and AI/ML.
      </p>

      <div className="getInTouch">
        <a href="mailto:rohitsinghsstc2812@gmail.com">
          <button className="mail" >
            <FontAwesomeIcon icon={faEnvelope} /> Get in touch
          </button>
        </a>
        <a href="https://github.com/Rsccpp" className="icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/rohitsingh0028/" className="icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}
