import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import "../static/css/about.css";

export default function Education() {
  return (
    <div className="education">
      <div className="educationNav">
        <FontAwesomeIcon icon={faGraduationCap} className="icon" />{" "}
        <div>
          <b>Education</b> <br /> Bachelor of Technology
        </div>
      </div>
      <div className="focus">
        <p>Focus</p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p><b>Computer Science & Engineering</b></p>
      </div>
      <div className="year">
        <p>Year</p>
        <p><b>Pre-final Year</b></p>
      </div>
      <div className="interest">
        <p>Interest</p> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        <p><b>AI, ML, Software Dev</b></p>
      </div>

      
    </div>
  );
}
