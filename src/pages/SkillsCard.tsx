import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Skill } from "../types/SkillProps";
import "../static/css/skills.css";

export default function SkillsCard({ icon, title, items }: Skill) {
    return (
    <div className="skillCard">
      
        <FontAwesomeIcon icon={icon}className="icon" />
        <h4>{title}</h4>
        
          {items.map((item, index) => (
            <button key={index}>{item}</button>
          ))} &nbsp;
       
    
    </div>
  );
}