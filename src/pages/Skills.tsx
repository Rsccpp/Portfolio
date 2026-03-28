import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../static/css/skills.css";
import {
  faBrain,
  faCode,
  faLaptopCode,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import SkillsCard from "./SkillsCard";

export default function Skills() {
  const skills = [
    {
      icon: faCode ,
      title: "Programming",
      items: ["C++", "Python", "Java", "JavaScript", "TypeScript"],
    },
    {
      icon: faCode ,
      title: "Programming",
      items: ["C++", "Python", "Java", "JavaScript", "TypeScript"],
    },
    {
      icon: faBrain ,
      title: "Machine Learning",
      items: ["Scikit-learn", "Pandas", "Numpy", "Matplotlit"],
    },
    {
      icon: faLaptopCode ,
      title: "Web Development",
      items: [
            "HTML5",
            "CSS",
            "React",
            "Bootstrap",
            "Nodejs",
            "Express",
            "MongoDB",
          ],
    },
  ];
  return (
    <div className="skillContainer">
      <div className="title">
        <FontAwesomeIcon icon={faTerminal} className="icon" />
        <span className="iconTitle">Technical Skills</span>
      </div>
      <div id="skills">
        { skills.map((skill, i) => (
            <SkillsCard key={i} {...skill}/>
          ))}
      </div>
    </div>
  );
}
