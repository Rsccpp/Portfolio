import type { ProjectCardProps } from "../types/ProjectCardProps";
import "../static/css/projects.css";

export default function ProjectCard({
  title,
  desc,
  features,
  languages,
  url,
}: ProjectCardProps) {
  return (
    <div className="project-card">
  
        <h3>{title}</h3>
     
      <p className="description">{desc}</p>
      <h4>Key Features</h4>
      <ul className="project-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <div className="project-tags">
        {languages.map((lang, i) => (
          <span key={i} className="project-tag">
            {lang}
          </span>
        ))}
      </div>
      <br />
      <a href={url} target="_blank">
        {" "}
        <button className="view">View</button>
      </a>
    </div>
  );
}
