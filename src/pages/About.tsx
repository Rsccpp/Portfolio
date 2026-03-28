import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Education from "./Education";
import "../static/css/about.css";

export default function About() {
  return (
   
      <div id="about" className="aboutContainer">
        <div className="aboutText">
                  <FontAwesomeIcon 
                    icon={faUser} className="icon"
                    />
                  <span
                    className="iconTitle"
                  >
                    About Me
                  </span>
         <p>
            I am a B.Tech pre-final year undergraduate student with a strong
            interest in technology, problem solving, and continuous learning. I
            have developed a solid foundation in programming, data structures,
            algorithms, and software development.
            <br /><br />
            Through academic projects and self-driven learning, I focus on
            building practical solutions to real-world problems. I enjoy working
            on challenging tasks that improve my analytical thinking and logical
            reasoning.
            <br /><br /> My goal is to leverage my skills in software engineering and
            AI/ML to create innovative solutions and make meaningful
            contributions to organizations working on advanced technologies.
          </p>
        </div>

        <div className="aboutCard">
          <Education />
        </div>
      </div>
      
   
  );
}
